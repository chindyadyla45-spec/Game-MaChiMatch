import React from 'react';
import { Play, RotateCcw, Home, Volume2, VolumeX, Pause, Sparkles } from 'lucide-react';
import { LevelData } from '../types';

interface PauseModalProps {
  level: LevelData;
  levelIndex: number;
  timeLeft: number;
  score: number;
  moves: number;
  isMuted: boolean;
  onResume: () => void;
  onRestart: () => void;
  onToggleMute: () => void;
  onBackToMenu: () => void;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  level,
  levelIndex,
  timeLeft,
  score,
  moves,
  isMuted,
  onResume,
  onRestart,
  onToggleMute,
  onBackToMenu,
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(Math.max(0, secs) / 60);
    const s = Math.max(0, secs) % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        id="pause-modal"
        className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Glow accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 shadow-inner">
          <Pause className="w-7 h-7" />
        </div>

        {/* Title */}
        <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-1 flex items-center gap-1 font-mono">
          <Sparkles className="w-3 h-3 text-amber-400" />
          MaChiMath
        </span>
        <h2 className="text-2xl font-black text-white tracking-tight mb-1">
          Permainan Dijeda
        </h2>
        <p className="text-xs text-slate-400 mb-4 font-mono">
          Level {levelIndex + 1}: {level.name}
        </p>

        {/* Live snapshot stats */}
        <div className="w-full grid grid-cols-3 gap-2 bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80 mb-5 text-xs">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500">Waktu</span>
            <span className="font-mono font-bold text-cyan-400">{formatTime(timeLeft)}</span>
          </div>
          <div className="flex flex-col items-center border-x border-slate-800">
            <span className="text-[10px] text-slate-500">Langkah</span>
            <span className="font-mono font-bold text-slate-200">{moves}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500">Skor</span>
            <span className="font-mono font-bold text-amber-400">{score}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-2.5">
          {/* Resume */}
          <button
            id="btn-pause-resume"
            onClick={onResume}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer text-sm"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Lanjutkan Bermain</span>
          </button>

          {/* Restart level */}
          <button
            id="btn-pause-restart"
            onClick={onRestart}
            className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-slate-200 font-semibold rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer text-sm"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Ulangi Level Ini</span>
          </button>

          {/* Sound Toggle & Back to menu */}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              id="btn-pause-sound"
              onClick={onToggleMute}
              className="py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 text-xs font-semibold transition-all cursor-pointer"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-rose-400" />
                  <span>Suara: Off</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Suara: On</span>
                </>
              )}
            </button>

            <button
              id="btn-pause-menu"
              onClick={onBackToMenu}
              className="py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 text-xs font-semibold transition-all cursor-pointer"
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span>Menu Utama</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
