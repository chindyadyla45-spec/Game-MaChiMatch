import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw, Undo2 } from 'lucide-react';
import { Direction } from '../types';

interface OnScreenControlsProps {
  onMove: (dir: Direction) => void;
  onUndo: () => void;
  onRestart: () => void;
  canUndo: boolean;
}

export const OnScreenControls: React.FC<OnScreenControlsProps> = ({
  onMove,
  onUndo,
  onRestart,
  canUndo,
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 p-3 bg-slate-950/80 rounded-xl border border-slate-800 backdrop-blur-md">
      {/* Keyboard Shortcuts Hint */}
      <div className="hidden md:flex flex-col gap-1 text-xs text-slate-400">
        <span className="font-semibold text-slate-300">Kontrol Keyboard:</span>
        <div className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-mono">
            W
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-mono">
            A
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-mono">
            S
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-mono">
            D
          </kbd>
          <span className="text-slate-500">atau</span>
          <span className="text-slate-300">Tombol Panah (↑ ← ↓ →)</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-slate-400">
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-700 font-mono">
            Z
          </kbd>
          <span>Batal Langkah (Undo)</span>
          <span className="text-slate-600">•</span>
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded border border-slate-700 font-mono">
            R
          </kbd>
          <span>Restart Level</span>
        </div>
      </div>

      {/* Virtual D-Pad for Mouse / Touch */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-1.5 w-36 h-36 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-inner">
          <div />
          <button
            id="btn-move-up"
            onClick={() => onMove('up')}
            className="flex items-center justify-center bg-slate-800 hover:bg-indigo-600 active:bg-indigo-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 shadow transition-all active:scale-95"
            aria-label="Gerak ke Atas"
          >
            <ArrowUp className="w-6 h-6 stroke-[2.5]" />
          </button>
          <div />

          <button
            id="btn-move-left"
            onClick={() => onMove('left')}
            className="flex items-center justify-center bg-slate-800 hover:bg-indigo-600 active:bg-indigo-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 shadow transition-all active:scale-95"
            aria-label="Gerak ke Kiri"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <button
            id="btn-move-down"
            onClick={() => onMove('down')}
            className="flex items-center justify-center bg-slate-800 hover:bg-indigo-600 active:bg-indigo-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 shadow transition-all active:scale-95"
            aria-label="Gerak ke Bawah"
          >
            <ArrowDown className="w-6 h-6 stroke-[2.5]" />
          </button>
          <button
            id="btn-move-right"
            onClick={() => onMove('right')}
            className="flex items-center justify-center bg-slate-800 hover:bg-indigo-600 active:bg-indigo-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 shadow transition-all active:scale-95"
            aria-label="Gerak ke Kanan"
          >
            <ArrowRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Action Buttons: Undo & Restart */}
      <div className="flex sm:flex-col gap-2">
        <button
          id="btn-undo-move"
          onClick={onUndo}
          disabled={!canUndo}
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
            canUndo
              ? 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border-amber-500/40 hover:border-amber-400 active:scale-95 cursor-pointer'
              : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
          }`}
          title="Batalkan langkah terakhir (Shortcut: Z)"
        >
          <Undo2 className="w-4 h-4" />
          <span>Undo Langkah</span>
        </button>

        <button
          id="btn-restart-level"
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 hover:border-slate-600 active:scale-95 transition-all cursor-pointer"
          title="Ulangi posisi awal level ini (Shortcut: R)"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restart Level</span>
        </button>
      </div>
    </div>
  );
};
