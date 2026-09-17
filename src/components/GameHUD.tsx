import React from 'react';
import { Volume2, VolumeX, BookOpen, Home, Award, Timer, PauseCircle, Sparkles, Pause, Play } from 'lucide-react';
import { LevelData } from '../types';

interface GameHUDProps {
  currentLevel: LevelData;
  levelIndex: number;
  totalLevels: number;
  moves: number;
  pushes: number;
  solvedCount: number;
  totalTargets: number;
  score: number;
  timeLeft: number;
  isTimerPaused: boolean;
  isPaused: boolean;
  isMuted: boolean;
  onTogglePause: () => void;
  onToggleMute: () => void;
  onOpenMenu: () => void;
  onOpenFormulaBook: () => void;
}

export const GameHUD: React.FC<GameHUDProps> = ({
  currentLevel,
  levelIndex,
  totalLevels,
  moves,
  pushes,
  solvedCount,
  totalTargets,
  score,
  timeLeft,
  isTimerPaused,
  isPaused,
  isMuted,
  onTogglePause,
  onToggleMute,
  onOpenMenu,
  onOpenFormulaBook,
}) => {
  const isOptimal = moves <= currentLevel.parSteps;
  const isWarningTime = timeLeft <= 20 && timeLeft > 0;

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(Math.max(0, secs) / 60);
    const s = Math.max(0, secs) % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <header className="w-full bg-slate-900/95 border-b border-slate-800 px-3 py-2.5 backdrop-blur-md sticky top-0 z-30 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Menu button & Level Info */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <button
              id="btn-back-to-menu"
              onClick={onOpenMenu}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white rounded-lg border border-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-sm"
              title="Kembali ke Menu Utama"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Menu</span>
            </button>

            <div className="flex items-center gap-1 px-2.5 py-1 bg-indigo-950/80 rounded-lg border border-indigo-700/60 font-mono font-extrabold text-xs text-indigo-300 shadow-sm">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>MaChiMath</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider">
                Level {levelIndex + 1} / {totalLevels}
              </span>
              <span className="text-xs text-amber-400 font-medium hidden sm:inline">
                {currentLevel.topic}
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-bold text-slate-100 font-mono tracking-tight">
              {currentLevel.name}
            </h1>
          </div>

          {/* Quick buttons on small mobile */}
          <div className="flex items-center gap-1 sm:hidden">
            <button
              onClick={onTogglePause}
              className={`p-1.5 rounded-lg border text-xs font-bold ${
                isPaused ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
              title={isPaused ? 'Lanjut' : 'Jeda'}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={onToggleMute}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
              aria-label="Toggle Suara"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={onOpenFormulaBook}
              className="p-1.5 rounded-lg bg-indigo-950 text-indigo-300 border border-indigo-700"
              title="Daftar Soal"
            >
              <BookOpen className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center: Live Game Metrics (Timer, Langkah, Dorong, Jawaban, Skor) */}
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-2.5 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800/80 text-xs shadow-inner">
          {/* Real-time Countdown Timer */}
          <div
            id="hud-timer-badge"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
              isWarningTime
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse ring-2 ring-rose-500/50'
                : timeLeft === 0
                ? 'bg-red-950 border-red-700 text-red-400'
                : 'bg-slate-900 border-slate-700 text-cyan-300'
            }`}
            title={isTimerPaused ? 'Timer dijeda' : 'Waktu tersisa'}
          >
            <Timer className={`w-4 h-4 shrink-0 ${isWarningTime ? 'text-rose-400 animate-spin' : 'text-cyan-400'}`} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                Waktu
                {isTimerPaused && (
                  <span className="text-[8px] bg-amber-500/20 text-amber-300 px-1 rounded flex items-center gap-0.5 font-bold">
                    <PauseCircle className="w-2.5 h-2.5" /> Jeda
                  </span>
                )}
              </span>
              <span className="font-mono font-extrabold text-sm sm:text-base tracking-wider">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-800 hidden xs:block"></div>

          {/* Moves Count */}
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] text-slate-400 font-medium">Langkah</span>
            <div className="flex items-baseline gap-0.5">
              <span className={`font-mono font-extrabold text-sm ${isOptimal ? 'text-emerald-400' : 'text-amber-400'}`}>
                {moves}
              </span>
              <span className="text-[10px] text-slate-500">/{currentLevel.parSteps}</span>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-800 hidden xs:block"></div>

          {/* Pushes Count */}
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] text-slate-400 font-medium">Dorong</span>
            <span className="font-mono font-bold text-sm text-slate-200">
              {pushes}
            </span>
          </div>

          <div className="h-6 w-px bg-slate-800 hidden xs:block"></div>

          {/* Solved Math Targets */}
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] text-slate-400 font-medium">Jawaban Tepat</span>
            <div className="flex items-center gap-1">
              <span
                className={`font-mono font-extrabold text-sm ${
                  solvedCount === totalTargets ? 'text-emerald-400' : 'text-indigo-300'
                }`}
              >
                {solvedCount}
              </span>
              <span className="text-[10px] text-slate-500">/{totalTargets}</span>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-800 hidden xs:block"></div>

          {/* Score */}
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] text-slate-400 font-medium">Skor</span>
            <div className="flex items-center gap-1 text-amber-400 font-mono font-extrabold text-sm">
              <Award className="w-3.5 h-3.5" />
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Right: Gameplay-related Controls (Pause, Daftar Soal, Audio) */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Pause Button */}
          <button
            id="btn-toggle-pause"
            onClick={onTogglePause}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95 ${
              isPaused
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-400 font-bold ring-2 ring-amber-400/50'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
            title={isPaused ? 'Lanjutkan Permainan' : 'Jeda Permainan (P)'}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>Lanjut</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" />
                <span>Jeda</span>
              </>
            )}
          </button>

          {/* Soal Level Ini */}
          <button
            id="btn-formula-book"
            onClick={onOpenFormulaBook}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 rounded-xl border border-indigo-700/60 text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
            title="Buka Daftar Soal Matematika Level Ini"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Daftar Soal</span>
          </button>

          {/* Audio toggle */}
          <button
            id="btn-toggle-sound"
            onClick={onToggleMute}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95 ${
              isMuted
                ? 'bg-rose-950/60 border-rose-700/80 text-rose-300 hover:bg-rose-900/60'
                : 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700'
            }`}
            title={isMuted ? 'Nyalakan Suara (Sound On)' : 'Bisukan Suara (Mute)'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="text-rose-300">Suara: Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-emerald-300">Suara: On</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
