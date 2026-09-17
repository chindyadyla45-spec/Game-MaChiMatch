import React, { useState, useEffect, useCallback, useRef } from 'react';
import { LEVELS } from './data/levels';
import { Direction, Position, CharacterAvatar, MathBox, TargetSlot, HistoryStep, MathQuestion } from './types';
import { sound } from './utils/audio';
import { SokobanBoard } from './components/SokobanBoard';
import { GameHUD } from './components/GameHUD';
import { OnScreenControls } from './components/OnScreenControls';
import { MainMenu } from './components/MainMenu';
import { LevelCompleteModal } from './components/LevelCompleteModal';
import { GameOverModal } from './components/GameOverModal';
import { QuestionDetailModal } from './components/QuestionDetailModal';
import { FormulaBookModal } from './components/FormulaBookModal';
import { PauseModal } from './components/PauseModal';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'menu' | 'playing'>('menu');
  const [levelIndex, setLevelIndex] = useState<number>(0);
  const [unlockedLevels, setUnlockedLevels] = useState<number>(() => {
    const saved = localStorage.getItem('sokoban_math_unlocked');
    return saved ? Math.max(1, parseInt(saved, 10)) : 1;
  });
  const [levelStars, setLevelStars] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('sokoban_math_stars');
    return saved ? JSON.parse(saved) : {};
  });
  const [totalScore, setTotalScore] = useState<number>(() => {
    const saved = localStorage.getItem('sokoban_math_score');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [avatar, setAvatar] = useState<CharacterAvatar>('student_boy');
  const [isMuted, setIsMuted] = useState<boolean>(() => sound.getMuted());

  // In-level Game State
  const currentLevel = LEVELS[levelIndex] || LEVELS[0];
  const [playerPos, setPlayerPos] = useState<Position>({ x: 0, y: 0 });
  const [playerFacing, setPlayerFacing] = useState<Direction>('down');
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [boxes, setBoxes] = useState<MathBox[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [pushes, setPushes] = useState<number>(0);
  const [history, setHistory] = useState<HistoryStep[]>([]);
  const [isLevelWon, setIsLevelWon] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(() => currentLevel.timeLimit);
  const [earnedScore, setEarnedScore] = useState<number>(0);
  const [slotFeedback, setSlotFeedback] = useState<{ message: string; type: 'correct' | 'wrong' } | null>(null);

  // Modals & Pause state
  const [activeQuestion, setActiveQuestion] = useState<MathQuestion | null>(null);
  const [showFormulaBook, setShowFormulaBook] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const moveTimerRef = useRef<number | null>(null);
  const feedbackTimerRef = useRef<number | null>(null);

  // Show feedback banner helper
  const showFeedback = useCallback((message: string, type: 'correct' | 'wrong') => {
    if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    setSlotFeedback({ message, type });
    feedbackTimerRef.current = window.setTimeout(() => {
      setSlotFeedback(null);
    }, 3500);
  }, []);

  // Initialize level
  const loadLevel = useCallback((idx: number) => {
    const lvl = LEVELS[idx];
    if (!lvl) return;
    setLevelIndex(idx);
    setPlayerPos({ ...lvl.playerStart });
    setPlayerFacing('down');
    setBoxes(lvl.boxes.map((b) => ({ ...b, isCorrect: false })));
    setMoves(0);
    setPushes(0);
    setHistory([]);
    setIsLevelWon(false);
    setIsGameOver(false);
    setIsPaused(false);
    setTimeLeft(lvl.timeLimit);
    setActiveQuestion(null);
    setSlotFeedback(null);
  }, []);

  // Global browser audio unlocker on first gesture
  useEffect(() => {
    const unlock = () => {
      sound.ensureUnlocked();
    };
    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, []);

  // Start specific level from menu or list
  const handleSelectLevel = (idx: number) => {
    sound.ensureUnlocked();
    sound.playClick();
    loadLevel(idx);
    setCurrentView('playing');
    sound.startBgm();
  };

  // Mulai Tantangan clicked
  const handleStartGame = () => {
    sound.ensureUnlocked();
    sound.playClick();
    const targetIdx = Math.min(unlockedLevels - 1, LEVELS.length - 1);
    loadLevel(targetIdx);
    setCurrentView('playing');
    sound.startBgm();
  };

  const handleToggleMute = () => {
    const newState = sound.toggleMute();
    setIsMuted(newState);
  };

  // Check if target is satisfied by current boxes
  const checkTargetSolved = useCallback((target: TargetSlot, currentBoxes: MathBox[]) => {
    return currentBoxes.some(
      (b) => b.x === target.x && b.y === target.y && b.value === target.question.answer
    );
  }, []);

  // Count solved targets
  const solvedCount = currentLevel.targets.filter((t) => checkTargetSolved(t, boxes)).length;

  // Real-time Countdown Timer (Pause when popup is open or player pauses)
  const isTimerPaused = Boolean(activeQuestion || showFormulaBook || isPaused);

  useEffect(() => {
    if (currentView !== 'playing' || isLevelWon || isGameOver || isTimerPaused) {
      return;
    }

    const timerInterval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timerInterval);
          setIsGameOver(true);
          sound.pauseBgm();
          sound.playGameOver();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timerInterval);
  }, [currentView, isLevelWon, isGameOver, isTimerPaused]);

  // Level Win handler
  const handleLevelWon = useCallback((finalMoves: number) => {
    sound.pauseBgm();
    sound.playVictory();
    setIsLevelWon(true);
    setActiveQuestion(null);

    // Calculate score (base + efficiency bonus + remaining time bonus)
    const baseScore = 500;
    const efficiencyBonus = Math.max(0, (currentLevel.parSteps - finalMoves) * 15);
    const timeBonus = timeLeft * 5;
    const earned = baseScore + efficiencyBonus + timeBonus;
    setEarnedScore(earned);

    // Calculate star rating
    let starsEarned = 1;
    if (finalMoves <= currentLevel.parSteps && timeLeft >= Math.round(currentLevel.timeLimit * 0.25)) {
      starsEarned = 3;
    } else if (finalMoves <= Math.round(currentLevel.parSteps * 1.4)) {
      starsEarned = 2;
    }

    // Update highest stars
    setLevelStars((prev) => {
      const next = { ...prev, [currentLevel.id]: Math.max(prev[currentLevel.id] || 0, starsEarned) };
      localStorage.setItem('sokoban_math_stars', JSON.stringify(next));
      return next;
    });

    // Update total score
    setTotalScore((prev) => {
      const next = prev + earned;
      localStorage.setItem('sokoban_math_score', String(next));
      return next;
    });

    // Unlock next level
    if (levelIndex + 1 >= unlockedLevels && levelIndex + 1 < LEVELS.length) {
      const nextUnlocked = levelIndex + 2;
      setUnlockedLevels(nextUnlocked);
      localStorage.setItem('sokoban_math_unlocked', String(nextUnlocked));
    }
  }, [currentLevel, timeLeft, levelIndex, unlockedLevels]);

  // Move Logic
  const handleMove = useCallback(
    (dir: Direction) => {
      if (isLevelWon || isGameOver || isPaused) return;

      const deltas: Record<Direction, { dx: number; dy: number }> = {
        up: { dx: 0, dy: -1 },
        down: { dx: 0, dy: 1 },
        left: { dx: -1, dy: 0 },
        right: { dx: 1, dy: 0 },
      };

      const { dx, dy } = deltas[dir];
      const targetX = playerPos.x + dx;
      const targetY = playerPos.y + dy;

      setPlayerFacing(dir);

      // 1. Boundary / Wall check
      if (
        targetX < 0 ||
        targetX >= currentLevel.gridWidth ||
        targetY < 0 ||
        targetY >= currentLevel.gridHeight ||
        currentLevel.map[targetY]?.[targetX] === 1 ||
        currentLevel.map[targetY]?.[targetX] === 9
      ) {
        sound.playWrong();
        return;
      }

      // 2. Check if a box is present at target cell
      const boxIndex = boxes.findIndex((b) => b.x === targetX && b.y === targetY);

      if (boxIndex !== -1) {
        // Pushing a box: check cell behind the box
        const boxTargetX = targetX + dx;
        const boxTargetY = targetY + dy;

        // Is cell behind wall or void?
        if (
          boxTargetX < 0 ||
          boxTargetX >= currentLevel.gridWidth ||
          boxTargetY < 0 ||
          boxTargetY >= currentLevel.gridHeight ||
          currentLevel.map[boxTargetY]?.[boxTargetX] === 1 ||
          currentLevel.map[boxTargetY]?.[boxTargetX] === 9
        ) {
          sound.playWrong();
          return;
        }

        // Is cell behind blocked by another box?
        const isBehindBlockedByBox = boxes.some(
          (b) => b.x === boxTargetX && b.y === boxTargetY
        );
        if (isBehindBlockedByBox) {
          sound.playWrong();
          return;
        }

        // Save history for Undo
        setHistory((prev) => [
          ...prev,
          {
            playerPos: { ...playerPos },
            playerFacing,
            boxes: boxes.map((b) => ({ ...b })),
            moves,
            pushes,
          },
        ]);

        // Push box to new position
        const pushedBox = boxes[boxIndex];
        const newBoxes = boxes.map((b, i) =>
          i === boxIndex ? { ...b, x: boxTargetX, y: boxTargetY } : b
        );

        setBoxes(newBoxes);
        setPlayerPos({ x: targetX, y: targetY });
        setMoves((m) => m + 1);
        setPushes((p) => p + 1);

        // Movement bounce animation
        setIsMoving(true);
        if (moveTimerRef.current) window.clearTimeout(moveTimerRef.current);
        moveTimerRef.current = window.setTimeout(() => setIsMoving(false), 120);

        // Sound effect
        sound.playPush();

        // Check if pushed into a target slot
        const targetHere = currentLevel.targets.find(
          (t) => t.x === boxTargetX && t.y === boxTargetY
        );

        if (targetHere) {
          // Check correctness
          const isCorrectAnswer = targetHere.question.answer === pushedBox.value;

          if (isCorrectAnswer) {
            sound.playMatch();
            showFeedback('Jawaban Tepat! 🎉', 'correct');
          } else {
            sound.playWrong();
            showFeedback('Jawaban belum tepat!', 'wrong');
          }

          // Check if all targets cleared (Level Win)
          const allTargetsCleared = currentLevel.targets.every((t) =>
            newBoxes.some((b) => b.x === t.x && b.y === t.y && b.value === t.question.answer)
          );

          if (allTargetsCleared) {
            handleLevelWon(moves + 1);
          } else {
            // Sesuai revisi: Tampilkan popup informasi yang HANYA berisi soal matematika
            setActiveQuestion(targetHere.question);
          }
        } else {
          // Check if previous state had all cleared
          const allTargetsCleared = currentLevel.targets.every((t) =>
            newBoxes.some((b) => b.x === t.x && b.y === t.y && b.value === t.question.answer)
          );
          if (allTargetsCleared) {
            handleLevelWon(moves + 1);
          }
        }
      } else {
        // Walking onto empty floor or target
        setHistory((prev) => [
          ...prev,
          {
            playerPos: { ...playerPos },
            playerFacing,
            boxes: boxes.map((b) => ({ ...b })),
            moves,
            pushes,
          },
        ]);

        setPlayerPos({ x: targetX, y: targetY });
        setMoves((m) => m + 1);

        setIsMoving(true);
        if (moveTimerRef.current) window.clearTimeout(moveTimerRef.current);
        moveTimerRef.current = window.setTimeout(() => setIsMoving(false), 120);

        sound.playStep();
      }
    },
    [currentLevel, playerPos, playerFacing, boxes, moves, pushes, isLevelWon, isGameOver, isPaused, showFeedback, handleLevelWon]
  );

  // Undo move
  const handleUndo = useCallback(() => {
    if (history.length === 0 || isLevelWon || isGameOver || isPaused) return;
    sound.playUndo();
    const lastStep = history[history.length - 1];
    setPlayerPos(lastStep.playerPos);
    setPlayerFacing(lastStep.playerFacing);
    setBoxes(lastStep.boxes.map((b) => ({ ...b })));
    setMoves(lastStep.moves);
    setPushes(lastStep.pushes);
    setHistory((prev) => prev.slice(0, -1));
  }, [history, isLevelWon, isGameOver, isPaused]);

  // Restart current level
  const handleRestart = useCallback(() => {
    sound.ensureUnlocked();
    sound.playClick();
    loadLevel(levelIndex);
    sound.startBgm();
  }, [levelIndex, loadLevel]);

  // Next level
  const handleNextLevel = () => {
    sound.ensureUnlocked();
    sound.playClick();
    if (levelIndex < LEVELS.length - 1) {
      loadLevel(levelIndex + 1);
      sound.startBgm();
    } else {
      sound.stopBgm();
      setCurrentView('menu');
    }
  };

  // Keyboard Event Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If modal is open, Escape closes it
      if (activeQuestion || showFormulaBook) {
        if (e.key === 'Escape') {
          setActiveQuestion(null);
          setShowFormulaBook(false);
        }
        return;
      }

      if (currentView !== 'playing') return;

      const key = e.key.toLowerCase();

      // Pause toggle with 'p' or Escape
      if (key === 'p' || (key === 'escape' && !isGameOver && !isLevelWon)) {
        e.preventDefault();
        sound.playClick();
        setIsPaused((prev) => {
          const next = !prev;
          if (next) sound.pauseBgm();
          else sound.resumeBgm();
          return next;
        });
        return;
      }

      // If game is paused, ignore movement keys
      if (isPaused) return;

      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd', 'z', 'r'].includes(key)) {
        e.preventDefault();
      }

      if (isGameOver) {
        if (key === 'r') handleRestart();
        return;
      }

      if (key === 'arrowup' || key === 'w') {
        handleMove('up');
      } else if (key === 'arrowdown' || key === 's') {
        handleMove('down');
      } else if (key === 'arrowleft' || key === 'a') {
        handleMove('left');
      } else if (key === 'arrowright' || key === 'd') {
        handleMove('right');
      } else if (key === 'z') {
        handleUndo();
      } else if (key === 'r') {
        handleRestart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, isGameOver, isLevelWon, isPaused, handleMove, handleUndo, handleRestart, activeQuestion, showFormulaBook]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* View Switcher: Main Menu or In-Game */}
      {currentView === 'menu' ? (
        <MainMenu
          levels={LEVELS}
          unlockedLevels={unlockedLevels}
          levelStars={levelStars}
          selectedAvatar={avatar}
          isMuted={isMuted}
          onSelectAvatar={setAvatar}
          onSelectLevel={handleSelectLevel}
          onStartGame={handleStartGame}
          onToggleMute={handleToggleMute}
        />
      ) : (
        <div className="flex-1 flex flex-col items-center">
          {/* Top HUD with Real-Time Countdown Timer & Gameplay Controls */}
          <GameHUD
            currentLevel={currentLevel}
            levelIndex={levelIndex}
            totalLevels={LEVELS.length}
            moves={moves}
            pushes={pushes}
            solvedCount={solvedCount}
            totalTargets={currentLevel.targets.length}
            score={totalScore}
            timeLeft={timeLeft}
            isTimerPaused={isTimerPaused}
            isPaused={isPaused}
            isMuted={isMuted}
            onTogglePause={() => {
              sound.playClick();
              setIsPaused((prev) => {
                const next = !prev;
                if (next) sound.pauseBgm();
                else sound.resumeBgm();
                return next;
              });
            }}
            onToggleMute={handleToggleMute}
            onOpenMenu={() => {
              sound.playClick();
              sound.stopBgm();
              setCurrentView('menu');
            }}
            onOpenFormulaBook={() => {
              sound.playClick();
              setShowFormulaBook(true);
            }}
          />

          {/* Main Play Area */}
          <main className="flex-1 w-full max-w-4xl mx-auto px-2 py-2 sm:px-4 sm:py-3 flex flex-col items-center justify-center gap-2">
            {/* Feedback Banner (Jawaban belum tepat! / Jawaban Tepat!) */}
            {slotFeedback && (
              <div
                id="feedback-banner"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all animate-bounce ${
                  slotFeedback.type === 'correct'
                    ? 'bg-emerald-950/95 text-emerald-300 border-2 border-emerald-500 shadow-emerald-900/40'
                    : 'bg-rose-950/95 text-rose-300 border-2 border-rose-500 shadow-rose-900/40'
                }`}
              >
                {slotFeedback.type === 'correct' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
                <span>{slotFeedback.message}</span>
              </div>
            )}

            <SokobanBoard
              gridWidth={currentLevel.gridWidth}
              gridHeight={currentLevel.gridHeight}
              map={currentLevel.map}
              playerPos={playerPos}
              playerFacing={playerFacing}
              isMoving={isMoving}
              avatar={avatar}
              boxes={boxes}
              targets={currentLevel.targets}
              onTargetClick={(q) => {
                sound.playClick();
                setActiveQuestion(q);
              }}
            />

            {/* Desktop & On-Screen Controls */}
            <div className="w-full max-w-lg mt-1">
              <OnScreenControls
                onMove={handleMove}
                onUndo={handleUndo}
                onRestart={handleRestart}
                canUndo={history.length > 0 && !isGameOver}
              />
            </div>
          </main>
        </div>
      )}

      {/* MODAL: Level Complete (Level Berhasil!) */}
      {isLevelWon && (
        <LevelCompleteModal
          level={currentLevel}
          moves={moves}
          pushes={pushes}
          scoreGained={earnedScore}
          timeLeft={timeLeft}
          isLastLevel={levelIndex === LEVELS.length - 1}
          onNextLevel={handleNextLevel}
          onReplayLevel={() => {
            sound.playClick();
            handleRestart();
          }}
          onBackToMenu={() => {
            sound.playClick();
            sound.stopBgm();
            setIsLevelWon(false);
            setCurrentView('menu');
          }}
        />
      )}

      {/* MODAL: Game Over / Waktu Habis */}
      {isGameOver && (
        <GameOverModal
          level={currentLevel}
          moves={moves}
          pushes={pushes}
          solvedCount={solvedCount}
          totalTargets={currentLevel.targets.length}
          onRetry={() => {
            sound.playClick();
            handleRestart();
          }}
          onBackToMenu={() => {
            sound.playClick();
            sound.stopBgm();
            setIsGameOver(false);
            setCurrentView('menu');
          }}
        />
      )}

      {/* MODAL: Popup Informasi Soal Matematika (HANYA SOAL TANPA JAWABAN/PEMBAHASAN) */}
      {activeQuestion && (
        <QuestionDetailModal
          question={activeQuestion}
          onClose={() => {
            sound.playClick();
            setActiveQuestion(null);
          }}
        />
      )}

      {/* MODAL: Lembar Daftar Soal Level Ini */}
      {showFormulaBook && (
        <FormulaBookModal
          targets={currentLevel.targets}
          boxes={boxes}
          onClose={() => {
            sound.playClick();
            setShowFormulaBook(false);
          }}
        />
      )}

      {/* MODAL: Jeda Permainan (Pause) */}
      {isPaused && (
        <PauseModal
          level={currentLevel}
          levelIndex={levelIndex}
          timeLeft={timeLeft}
          score={totalScore}
          moves={moves}
          isMuted={isMuted}
          onResume={() => {
            sound.playClick();
            sound.resumeBgm();
            setIsPaused(false);
          }}
          onRestart={() => {
            sound.playClick();
            setIsPaused(false);
            handleRestart();
          }}
          onToggleMute={handleToggleMute}
          onBackToMenu={() => {
            sound.playClick();
            sound.stopBgm();
            setIsPaused(false);
            setCurrentView('menu');
          }}
        />
      )}
    </div>
  );
}
