import React from 'react';
import { X, BookMarked, HelpCircle } from 'lucide-react';
import { MathQuestion } from '../types';

interface QuestionDetailModalProps {
  question: MathQuestion | null;
  onClose: () => void;
}

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({
  question,
  onClose,
}) => {
  if (!question) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-slate-900 border-2 border-indigo-500/50 rounded-2xl p-5 shadow-2xl relative text-slate-100">
        {/* Tombol X untuk menutup popup */}
        <button
          id="btn-close-question-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          aria-label="Tutup Soal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Label / Kategori Materi */}
        <div className="flex items-center justify-between gap-2 mb-3 pr-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wide">
              <BookMarked className="w-3.5 h-3.5" />
              {question.badge || 'Matematika'}
            </span>
            <span className="text-xs font-medium text-slate-400 truncate">
              {question.topic}
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800 hidden sm:inline">
            MaChiMath
          </span>
        </div>

        {/* Header Soal */}
        <div className="flex items-center gap-2 mb-2 text-indigo-400 text-xs font-semibold">
          <HelpCircle className="w-4 h-4" />
          <span>Soal Matematika Slot Ini:</span>
        </div>

        {/* Soal Matematika Utama (HANYA SOAL MATEMATIKA) */}
        <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 shadow-inner my-2">
          <p className="text-base sm:text-lg font-mono font-bold text-amber-300 leading-relaxed text-center break-words">
            {question.prompt}
          </p>
        </div>

        <p className="text-[11px] text-slate-400 text-center italic mt-2">
          Hitung jawabannya sendiri, lalu dorong kotak angka yang sesuai ke slot ini!
        </p>

        {/* Tombol "Saya Paham, Lanjut Main!" */}
        <button
          id="btn-understand-resume"
          onClick={onClose}
          className="mt-5 w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 active:scale-98 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Saya Paham, Lanjut Main!</span>
        </button>
      </div>
    </div>
  );
};
