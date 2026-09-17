import React from 'react';
import { X, BookOpen, CheckCircle2, Circle } from 'lucide-react';
import { TargetSlot, MathBox } from '../types';

interface FormulaBookModalProps {
  targets: TargetSlot[];
  boxes: MathBox[];
  onClose: () => void;
}

export const FormulaBookModal: React.FC<FormulaBookModalProps> = ({
  targets,
  boxes,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl relative text-slate-100 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <div>
              <span className="text-[10px] font-bold text-indigo-400 font-mono uppercase tracking-wider block leading-none mb-0.5">
                MaChiMath
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                Daftar Soal Matematika Level Ini
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto py-3 space-y-3 flex-1 pr-1">
          {targets.map((target, idx) => {
            const isSolved = boxes.some(
              (b) => b.x === target.x && b.y === target.y && b.value === target.question.answer
            );

            return (
              <div
                key={target.id}
                className={`p-3.5 rounded-xl border transition-all ${
                  isSolved
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-slate-950/60 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-indigo-300">
                      {target.question.topic}
                    </span>
                  </div>

                  {isSolved ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Terjawab Tepat
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                      <Circle className="w-3 h-3 text-slate-500" />
                      Belum Terisi Tepat
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs sm:text-sm text-amber-300 font-bold bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  {target.question.prompt}
                </p>
                <p className="text-[11px] text-slate-400 mt-1.5 italic">
                  Kategori: <span className="text-slate-300 font-medium">{target.question.badge || target.question.topic}</span>. Hitung dan dorong kotak bernilai tepat ke slot ini.
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
          >
            Tutup Daftar Soal
          </button>
        </div>
      </div>
    </div>
  );
};
