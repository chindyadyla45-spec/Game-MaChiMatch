import React from 'react';
import { Position, Direction, CharacterAvatar, MathBox, TargetSlot, MathQuestion } from '../types';
import { PlayerSprite } from './PlayerSprite';
import { Check, AlertTriangle, HelpCircle } from 'lucide-react';

interface SokobanBoardProps {
  gridWidth: number;
  gridHeight: number;
  map: number[][];
  playerPos: Position;
  playerFacing: Direction;
  isMoving: boolean;
  avatar: CharacterAvatar;
  boxes: MathBox[];
  targets: TargetSlot[];
  onTargetClick: (q: MathQuestion) => void;
}

export const SokobanBoard: React.FC<SokobanBoardProps> = ({
  gridWidth,
  gridHeight,
  map,
  playerPos,
  playerFacing,
  isMoving,
  avatar,
  boxes,
  targets,
  onTargetClick,
}) => {
  // Check if a tile is a wall
  const isWall = (x: number, y: number): boolean => {
    if (x < 0 || x >= gridWidth || y < 0 || y >= gridHeight) return true;
    return map[y]?.[x] === 1;
  };

  // Find target at position (x, y)
  const getTargetAt = (x: number, y: number) => {
    return targets.find((t) => t.x === x && t.y === y);
  };

  // Find box at position (x, y)
  const getBoxAt = (x: number, y: number) => {
    return boxes.find((b) => b.x === x && b.y === y);
  };

  // Deadlock detection: check if a box is trapped in a non-target corner
  const isBoxCornerDeadlocked = (box: MathBox): boolean => {
    // If it's already on any target, don't flag as deadlocked
    const onTarget = targets.some((t) => t.x === box.x && t.y === box.y);
    if (onTarget) return false;

    const north = isWall(box.x, box.y - 1);
    const south = isWall(box.x, box.y + 1);
    const west = isWall(box.x - 1, box.y);
    const east = isWall(box.x + 1, box.y);

    // Corner formations
    if ((north && west) || (north && east) || (south && west) || (south && east)) {
      return true;
    }
    return false;
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-3.5 sm:p-5 md:p-6 bg-slate-950/90 rounded-3xl border border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col items-center select-none overflow-hidden">
      {/* Educational Ambient Glow */}
      <div className="absolute -top-16 -left-16 w-44 h-44 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Canvas */}
      <div
        id="sokoban-grid-board"
        className="grid gap-2 sm:gap-3 md:gap-3.5 p-3 sm:p-4 md:p-5 bg-slate-900/95 rounded-2xl border-2 border-slate-800/90 shadow-[inset_0_2px_12px_rgba(0,0,0,0.6)]"
        style={{
          gridTemplateColumns: `repeat(${gridWidth}, minmax(0, 1fr))`,
          width: '100%',
          maxWidth: `${Math.min(gridWidth * 74, 660)}px`,
          aspectRatio: `${gridWidth} / ${gridHeight}`,
        }}
      >
        {Array.from({ length: gridHeight }).map((_, y) =>
          Array.from({ length: gridWidth }).map((_, x) => {
            const tileVal = map[y]?.[x] ?? 0;
            const target = getTargetAt(x, y);
            const box = getBoxAt(x, y);
            const isPlayer = playerPos.x === x && playerPos.y === y;
            const isWallTile = tileVal === 1;
            const isVoidTile = tileVal === 9;

            // Check if box on this target is correct
            const isTargetMatched =
              target && box && box.value === target.question.answer;
            const isTargetMismatched =
              target && box && box.value !== target.question.answer;

            const isDeadlocked = box ? isBoxCornerDeadlocked(box) : false;

            return (
              <div
                key={`${x}-${y}`}
                className={`relative rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-200 aspect-square text-xs select-none ${
                  isVoidTile
                    ? 'bg-transparent'
                    : isWallTile
                    ? 'bg-gradient-to-b from-slate-700 to-slate-850 border-b-4 border-slate-950 shadow-md ring-1 ring-slate-600/20'
                    : 'bg-slate-800/40 border border-slate-700/50 shadow-inner'
                }`}
              >
                {/* Wall Detail Texture */}
                {isWallTile && (
                  <div className="w-full h-full p-1.5 flex flex-col justify-between opacity-80 pointer-events-none">
                    <div className="h-0.5 bg-slate-500/40 rounded"></div>
                    <div className="flex justify-between gap-1">
                      <div className="h-1.5 w-1/2 bg-slate-900/30 rounded"></div>
                      <div className="h-1.5 w-1/2 bg-slate-900/40 rounded"></div>
                    </div>
                    <div className="h-0.5 bg-slate-900/60 rounded"></div>
                  </div>
                )}

                {/* Floor Corridor Center Dot Indicator (papan puzzle edukasi) */}
                {!isWallTile && !isVoidTile && !target && !box && !isPlayer && (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-700/35 pointer-events-none" />
                )}

                {/* Target Slot (Soal Matematika) */}
                {target && !isWallTile && (
                  <button
                    onClick={() => onTargetClick(target.question)}
                    title={`Klik untuk lihat soal: ${target.question.prompt}`}
                    className={`absolute inset-1 sm:inset-1.5 md:inset-2 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-0.5 transition-all cursor-pointer group z-0 ${
                      isTargetMatched
                        ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-400/50'
                        : isTargetMismatched
                        ? 'bg-rose-500/20 border-2 border-rose-400 animate-pulse'
                        : 'bg-indigo-950/70 border-2 border-dashed border-indigo-400/80 hover:border-indigo-300 hover:bg-indigo-900/50 shadow-inner'
                    }`}
                  >
                    {/* Glowing Target Ring */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-dashed transition-all ${
                          isTargetMatched
                            ? 'border-emerald-400 bg-emerald-400/20'
                            : 'border-indigo-400/50'
                        }`}
                      />
                    </div>

                    {/* Question Prompt Tooltip Pill */}
                    <div className="z-10 flex flex-col items-center">
                      <span className="text-[9px] sm:text-[11px] font-mono font-bold text-amber-300 px-1.5 py-0.5 rounded-md bg-slate-950/90 border border-amber-500/30 line-clamp-1 max-w-[92%] text-center shadow-sm">
                        {target.question.prompt.split(',')[0]}
                      </span>
                      <span className="text-[8px] text-indigo-300/80 hidden sm:inline-block mt-0.5">
                        Klik info
                      </span>
                    </div>

                    {/* Match Icon */}
                    {isTargetMatched && (
                      <span className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                )}

                {/* Sokoban Box (Kotak Jawaban Matematika) */}
                {box && (
                  <div
                    className={`absolute inset-1 sm:inset-1.5 md:inset-2 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-lg transition-transform duration-100 z-10 ${
                      box.isCorrect ||
                      (target && target.question.answer === box.value)
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-700 border-2 sm:border-[2.5px] border-emerald-300 shadow-emerald-600/30'
                        : target && target.question.answer !== box.value
                        ? 'bg-gradient-to-br from-rose-500 to-red-700 border-2 sm:border-[2.5px] border-rose-300 shadow-rose-600/30'
                        : 'bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-700 border-2 sm:border-[2.5px] border-amber-300/90 shadow-amber-950/50'
                    }`}
                  >
                    {/* Crate corner metallic accents */}
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-amber-200/60 rounded-xs"></div>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-200/60 rounded-xs"></div>
                    <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-amber-200/60 rounded-xs"></div>
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-amber-200/60 rounded-xs"></div>

                    {/* Box Value Badge */}
                    <span className="font-extrabold text-xs sm:text-base md:text-lg text-slate-950 bg-white/95 px-2 py-0.5 rounded-md shadow-sm tracking-tight font-mono">
                      {box.value}
                    </span>

                    {/* Corner Deadlock Warning Badge */}
                    {isDeadlocked && (
                      <div
                        className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 rounded-full p-0.5 shadow-md flex items-center justify-center animate-bounce"
                        title="Perhatian: Kotak terjebak di sudut dinding! Gunakan Undo jika tidak dapat didorong."
                      >
                        <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-900" />
                      </div>
                    )}
                  </div>
                )}

                {/* Player Character */}
                {isPlayer && (
                  <div className="absolute inset-0 z-20 pointer-events-none p-1 sm:p-1.5 flex items-center justify-center filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                    <PlayerSprite
                      facing={playerFacing}
                      avatar={avatar}
                      isMoving={isMoving}
                    />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Quick Board Sub-header / Legend */}
      <div className="w-full flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400 px-1">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500 border border-amber-300 inline-block shadow-sm"></span>
            Kotak Jawaban
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-2 border-dashed border-indigo-400 bg-indigo-950/60 inline-block"></span>
            Titik Soal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500 border border-emerald-300 inline-block shadow-sm"></span>
            Cocok
          </span>
        </div>
        <div className="text-slate-400 hidden sm:flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
          <span>Klik titik soal untuk melihat detail soal matematika</span>
        </div>
      </div>
    </div>
  );
};
