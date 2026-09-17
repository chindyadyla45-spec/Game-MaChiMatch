import React from 'react';
import { TimerOff, RotateCcw, Home, HelpCircle } from 'lucide-react';
import { LevelData } from '../types';

interface GameOverModalProps {
  level: LevelData;
  moves: number;
  pushes: number;
  solvedCount: number;
  totalTargets: number;
  onRetry: () => void;
  onBackToMenu: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  level,
  moves,
  pushes,
  solvedCount,
  totalTargets,
  onRetry,
  onBackToMenu,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-slate-900 border-2 border-rose-500/80 rounded-3xl p-6 shadow-2xl relative text-slate-100 flex flex-col items-center text-center">
        {/* Decorative Time-out Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 p-3 shadow-lg shadow-rose-600/40 flex items-center justify-center -mt-12 mb-3 border-2 border-rose-300 animate-bounce">
          <TimerOff className="w-9 h-9 text-white stroke-[2.2]" />
        </div>

        {/* Title */}
        <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1">
          MaChiMath
        </span>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Game Over / Waktu Habis!
        </h2>
        <p className="text-xs sm:text-sm text-rose-300 mt-1">
          {level.name}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 my-3 leading-relaxed">
          Waktu untuk menyelesaikan soal di level ini telah habis. Jangan patah semangat, analisa kembali soalnya dan coba lagi!
        </p>

        {/* Level progress before timeout */}
        <div className="w-full grid grid-cols-3 gap-2 bg-slate-950/80 p-3 rounded-2xl border border-slate-800 text-xs my-2">
          <div className="flex flex-col items-center">
            <span className="text-slate-400 text-[11px]">Jawaban Tepat</span>
            <span className="font-mono font-bold text-sm text-amber-400">
              {solvedCount} / {totalTargets}
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-slate-800">
            <span className="text-slate-400 text-[11px]">Langkah</span>
            <span className="font-mono font-bold text-sm text-slate-200">
              {moves}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-400 text-[11px]">Dorongan</span>
            <span className="font-mono font-bold text-sm text-slate-200">
              {pushes}
            </span>
          </div>
        </div>

        {/* Helpful Tip */}
        <div className="w-full text-left bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2 my-2">
          <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>Saat popup soal terbuka, timer otomatis berhenti agar kamu bisa membaca dengan tenang.</span>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-2.5 mt-3">
          <button
            id="btn-retry-level"
            onClick={onRetry}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi</span>
          </button>

          <button
            id="btn-gameover-menu"
            onClick={onBackToMenu}
            className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
