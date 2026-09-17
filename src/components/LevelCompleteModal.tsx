import React from 'react';
import { Star, Award, ArrowRight, RotateCcw, Clock, Trophy } from 'lucide-react';
import { LevelData } from '../types';

interface LevelCompleteModalProps {
  level: LevelData;
  moves: number;
  pushes: number;
  scoreGained: number;
  timeLeft: number;
  isLastLevel: boolean;
  onNextLevel: () => void;
  onReplayLevel: () => void;
  onBackToMenu: () => void;
}

export const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({
  level,
  moves,
  pushes,
  scoreGained,
  timeLeft,
  isLastLevel,
  onNextLevel,
  onReplayLevel,
  onBackToMenu,
}) => {
  // Format remaining time MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(Math.max(0, secs) / 60);
    const s = Math.max(0, secs) % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Compute star rating
  let stars = 1;
  if (moves <= level.parSteps && timeLeft >= Math.round(level.timeLimit * 0.25)) {
    stars = 3;
  } else if (moves <= Math.round(level.parSteps * 1.4)) {
    stars = 2;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-slate-900 border-2 border-emerald-500/70 rounded-3xl p-6 shadow-2xl relative text-slate-100 flex flex-col items-center text-center">
        {/* Decorative Trophy Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-3 shadow-lg shadow-emerald-500/30 flex items-center justify-center -mt-12 mb-3 border-2 border-emerald-200">
          <Trophy className="w-9 h-9 text-slate-950 stroke-[2.2]" />
        </div>

        {/* Title (Sesuai instruksi: Level Berhasil!) */}
        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
          MaChiMath
        </span>
        <h2 className="text-2xl font-black text-white tracking-tight">
          {isLastLevel ? 'Level Berhasil! (Semua Level Selesai)' : 'Level Berhasil!'}
        </h2>
        <p className="text-xs sm:text-sm text-emerald-300 mt-0.5">
          {level.name} - {level.topic}
        </p>

        {/* Stars Display */}
        <div className="flex items-center justify-center gap-3 my-3">
          {[1, 2, 3].map((starIndex) => {
            const isEarned = starIndex <= stars;
            return (
              <div
                key={starIndex}
                className={`p-2 rounded-2xl transition-all transform ${
                  isEarned
                    ? 'text-amber-400 scale-110 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                    : 'text-slate-700 scale-90'
                }`}
              >
                <Star className={`w-8 h-8 ${isEarned ? 'fill-amber-400' : 'fill-slate-800'}`} />
              </div>
            );
          })}
        </div>

        {/* Performance Statistics Card (Termasuk Sisa Waktu & Skor) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-xs my-2">
          {/* Sisa Waktu */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-indigo-400" />
              Sisa Waktu
            </span>
            <span className="font-mono font-bold text-sm sm:text-base text-emerald-400">
              {formatTime(timeLeft)}
            </span>
            <span className="text-[10px] text-slate-500">Maks: {formatTime(level.timeLimit)}</span>
          </div>

          {/* Skor */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-400" />
              Skor
            </span>
            <span className="font-mono font-bold text-sm sm:text-base text-amber-400">
              +{scoreGained}
            </span>
            <span className="text-[10px] text-emerald-400">Termasuk Bonus</span>
          </div>

          {/* Langkah */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px]">Langkah</span>
            <span className="font-mono font-bold text-sm sm:text-base text-slate-100">
              {moves}
            </span>
            <span className="text-[10px] text-slate-500">Par: {level.parSteps}</span>
          </div>

          {/* Dorongan */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px]">Dorongan</span>
            <span className="font-mono font-bold text-sm sm:text-base text-slate-100">
              {pushes}
            </span>
            <span className="text-[10px] text-slate-500">Efisiensi</span>
          </div>
        </div>

        {/* Ringkasan Soal yang Berhasil Diselesaikan */}
        <div className="w-full text-left bg-slate-950/50 p-3 rounded-2xl border border-slate-800/80 my-2 max-h-36 overflow-y-auto pr-1">
          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
            Soal Terselesaikan dengan Benar:
          </span>
          <div className="space-y-1.5">
            {level.targets.map((target) => (
              <div
                key={target.id}
                className="text-xs bg-slate-900/90 p-2 rounded-xl border border-slate-800 flex items-center justify-between"
              >
                <span className="font-mono text-slate-200 font-bold">
                  {target.question.prompt}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-extrabold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                  = {target.question.answer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Dengan tombol "Level Berikutnya") */}
        <div className="w-full flex flex-col sm:flex-row gap-2 mt-3">
          <button
            id="btn-replay-level"
            onClick={onReplayLevel}
            className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Ulang</span>
          </button>

          {!isLastLevel ? (
            <button
              id="btn-next-level"
              onClick={onNextLevel}
              className="flex-1 py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <span>Level Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              id="btn-back-menu"
              onClick={onBackToMenu}
              className="flex-1 py-2.5 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/30 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <Trophy className="w-4 h-4" />
              <span>Kembali ke Menu Utama</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
