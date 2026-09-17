import React from 'react';
import { Play, Star, Trophy, Sparkles, Volume2, VolumeX, Clock } from 'lucide-react';
import { LevelData, CharacterAvatar } from '../types';
import { PlayerSprite } from './PlayerSprite';
import { sound } from '../utils/audio';

interface MainMenuProps {
  levels: LevelData[];
  unlockedLevels: number;
  levelStars: Record<number, number>;
  selectedAvatar: CharacterAvatar;
  isMuted: boolean;
  onSelectAvatar: (avatar: CharacterAvatar) => void;
  onSelectLevel: (levelIndex: number) => void;
  onStartGame: () => void;
  onToggleMute: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  levels,
  unlockedLevels,
  levelStars,
  selectedAvatar,
  isMuted,
  onSelectAvatar,
  onSelectLevel,
  onStartGame,
  onToggleMute,
}) => {
  const totalStars = (Object.values(levelStars) as number[]).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 flex flex-col items-center">
      {/* Top Bar with Stars & Audio Toggle */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 text-xs text-amber-400 font-mono">
          <Trophy className="w-3.5 h-3.5" />
          <span>{totalStars} / {levels.length * 3} Bintang Dikumpulkan</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-sound-toggle-menu"
            onClick={() => {
              sound.playClick();
              onToggleMute();
            }}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white rounded-xl border border-slate-700 text-xs font-bold transition-all cursor-pointer shadow-md"
            title={isMuted ? 'Nyalakan Suara (Sound On)' : 'Bisukan Suara (Mute)'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-rose-300">Suara: Mati (Mute)</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300">Suara: Nyala (On)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hero Branding Section */}
      <div className="text-center my-4 sm:my-6 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Game Edukasi Logika & Matematika</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-amber-300 tracking-tight font-mono drop-shadow-md">
          MaChiMath
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-2 leading-relaxed">
          Pecahkan soal matematika dan gunakan strategi untuk mencocokkan setiap jawaban dengan soal yang tepat! Cocokkan semua jawaban dengan benar untuk membuka level berikutnya.
        </p>
      </div>

      {/* Character Selector & Play CTA Card */}
      <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-md mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Avatar Selection */}
        <div className="md:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Pilih Karakter:
          </span>

          <div className="flex items-center gap-3">
            {[
              { id: 'student_boy' as CharacterAvatar, label: 'Rian' },
              { id: 'student_girl' as CharacterAvatar, label: 'Siti' },
              { id: 'robot_tutor' as CharacterAvatar, label: 'Byte (Robot Edu)' },
            ].map((char) => {
              const isSelected = selectedAvatar === char.id;
              return (
                <button
                  key={char.id}
                  onClick={() => {
                    sound.playClick();
                    onSelectAvatar(char.id);
                  }}
                  className={`flex flex-col items-center p-2.5 rounded-2xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-400 ring-2 ring-indigo-400/40 shadow-lg scale-105'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-14 h-14 relative flex items-center justify-center">
                    <PlayerSprite
                      facing="down"
                      avatar={char.id}
                      isMoving={false}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 mt-1">
                    {char.label.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Play / Start Game CTA Button */}
        <div className="md:col-span-6 flex flex-col items-center md:items-end justify-center">
          <button
            id="btn-start-game"
            onClick={() => {
              sound.playClick();
              onStartGame();
            }}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 active:scale-95 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 transition-all cursor-pointer border border-indigo-400/30 group"
          >
            <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
            <span>Mulai Tantangan</span>
          </button>
          <span className="text-xs text-slate-400 mt-2 font-mono">
            Level terbuka: {unlockedLevels} / {levels.length}
          </span>
        </div>
      </div>

      {/* Level Selector Grid */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono">
            PILIH LEVEL
          </h3>
          <span className="text-xs text-slate-500">
            Selesaikan level berurutan untuk membuka level baru
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {levels.map((lvl, index) => {
            const isUnlocked = index < unlockedLevels;
            const stars = levelStars[lvl.id] || 0;

            return (
              <button
                key={lvl.id}
                disabled={!isUnlocked}
                onClick={() => {
                  sound.playClick();
                  onSelectLevel(index);
                }}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 hover:shadow-lg cursor-pointer group active:scale-[0.98]'
                    : 'bg-slate-950/40 border-slate-900 opacity-40 cursor-not-allowed'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-400 border border-slate-700">
                      Level {index + 1}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800/80 text-amber-400 border border-slate-700/60">
                      {lvl.difficulty}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-100 text-sm mb-1 group-hover:text-indigo-300 transition-colors">
                    {lvl.name}
                  </h4>
                  <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                    {lvl.topic}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  {/* Star rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= stars
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Clock className="w-3 h-3" />
                      {lvl.timeLimit}s
                    </span>
                    <span>•</span>
                    <span>{lvl.targets.length} Soal</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rules / Tutorial Card */}
      <div className="w-full mt-8 p-4 sm:p-5 bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-300 leading-relaxed">
        <h4 className="font-bold text-slate-100 mb-1.5 flex items-center gap-1.5">
          <span>🎮 Aturan Main, Batas Waktu & Sistem Soal:</span>
        </h4>
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li><strong>Mekanik Sokoban:</strong> Karakter hanya bisa mendorong 1 kotak ke depan jika petak di baliknya kosong (tidak bisa ditarik).</li>
          <li><strong>Kerjakan Soal Mandiri:</strong> Hitung soal sendiri tanpa bocoran kunci. Dorong kotak berangka tepat ke slot soal matematika.</li>
          <li><strong>Popup Soal & Jeda Waktu:</strong> Saat kotak didorong ke slot soal, popup soal akan muncul. Timer dijeda otomatis agar kamu bisa membaca dengan tenang.</li>
          <li><strong>Batas Waktu:</strong> Selesaikan level sebelum timer 00:00, atau gunakan "Coba Lagi" jika waktu habis!</li>
        </ul>
      </div>
    </div>
  );
};
