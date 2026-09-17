import React from 'react';
import { Direction, CharacterAvatar } from '../types';

interface PlayerSpriteProps {
  facing: Direction;
  avatar: CharacterAvatar;
  isMoving: boolean;
}

export const PlayerSprite: React.FC<PlayerSpriteProps> = ({ facing, avatar, isMoving }) => {
  // Determine rotation or flip based on direction
  const isFlippedX = facing === 'left';
  const isBack = facing === 'up';

  return (
    <div
      className={`w-full h-full flex items-center justify-center transition-transform duration-150 ${
        isMoving ? 'scale-105' : 'scale-100'
      }`}
      style={{
        transform: isFlippedX ? 'scaleX(-1)' : 'none',
      }}
    >
      {avatar === 'student_boy' && (
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="32" cy="58" rx="16" ry="4" fill="rgba(0,0,0,0.35)" />

          {/* Legs & Shoes */}
          <rect x="23" y="44" width="7" height="13" rx="3" fill="#334155" />
          <rect x="34" y="44" width="7" height="13" rx="3" fill="#334155" />
          <ellipse cx="26" cy="57" rx="5" ry="3" fill="#0f172a" />
          <ellipse cx="38" cy="57" rx="5" ry="3" fill="#0f172a" />

          {/* School Backpack */}
          {!isBack ? (
            <rect x="19" y="24" width="6" height="16" rx="3" fill="#2563eb" />
          ) : (
            <rect x="22" y="22" width="20" height="20" rx="4" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
          )}

          {/* Body / Shirt (Student White Uniform) */}
          <rect x="22" y="24" width="20" height="22" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Tie or Badge */}
          {!isBack && (
            <>
              <polygon points="32,27 34,36 32,41 30,36" fill="#991b1b" />
              <rect x="24" y="27" width="5" height="4" rx="1" fill="#93c5fd" />
            </>
          )}

          {/* Head & Hair */}
          <circle cx="32" cy="18" r="11" fill="#fbcfe8" />
          {/* Hair */}
          <path
            d="M 21 16 Q 32 7 43 16 Q 41 9 32 10 Q 24 10 21 16 Z"
            fill="#1e293b"
          />
          <path
            d="M 21 16 Q 20 20 23 21 Q 23 15 32 12 Q 41 15 41 21 Q 44 20 43 16 Z"
            fill="#1e293b"
          />

          {/* Face Elements */}
          {!isBack && (
            <>
              {/* Eyes */}
              <ellipse cx={facing === 'right' ? 36 : 28} cy="18" rx="1.5" ry="2.2" fill="#0f172a" />
              <ellipse cx={facing === 'right' ? 41 : 33} cy="18" rx="1.5" ry="2.2" fill="#0f172a" />
              {/* Smile */}
              <path
                d={`M ${facing === 'right' ? 36 : 29} 22 Q ${facing === 'right' ? 39 : 31} 24 ${facing === 'right' ? 42 : 33} 22`}
                stroke="#0f172a"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Blush */}
              <circle cx={facing === 'right' ? 34 : 26} cy="21" r="1.5" fill="#f43f5e" opacity="0.4" />
            </>
          )}
        </svg>
      )}

      {avatar === 'student_girl' && (
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="32" cy="58" rx="16" ry="4" fill="rgba(0,0,0,0.35)" />

          {/* Skirt & Legs */}
          <polygon points="23,43 41,43 45,51 19,51" fill="#475569" />
          <rect x="25" y="50" width="5" height="7" rx="2" fill="#fed7aa" />
          <rect x="34" y="50" width="5" height="7" rx="2" fill="#fed7aa" />
          <ellipse cx="27" cy="57" rx="4.5" ry="2.5" fill="#0f172a" />
          <ellipse cx="37" cy="57" rx="4.5" ry="2.5" fill="#0f172a" />

          {/* Uniform */}
          <rect x="23" y="24" width="18" height="20" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          {!isBack && (
            <>
              <polygon points="32,27 34,35 32,39 30,35" fill="#dc2626" />
              <circle cx="27" cy="30" r="1.5" fill="#3b82f6" />
            </>
          )}

          {/* Head */}
          <circle cx="32" cy="18" r="11" fill="#fed7aa" />
          {/* Long Hair with Ponytail / Ribbon */}
          <path
            d="M 20 18 Q 32 8 44 18 Q 45 30 43 32 Q 41 22 41 18 Q 32 12 23 18 Q 23 22 21 32 Z"
            fill="#451a03"
          />
          {/* Red Ribbon */}
          <rect x="40" y="14" width="5" height="5" rx="1.5" fill="#e11d48" />

          {/* Face */}
          {!isBack && (
            <>
              <ellipse cx={facing === 'right' ? 36 : 28} cy="18" rx="1.5" ry="2.2" fill="#1c1917" />
              <ellipse cx={facing === 'right' ? 41 : 33} cy="18" rx="1.5" ry="2.2" fill="#1c1917" />
              <path
                d={`M ${facing === 'right' ? 36 : 29} 22 Q ${facing === 'right' ? 39 : 31} 24 ${facing === 'right' ? 42 : 33} 22`}
                stroke="#1c1917"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx={facing === 'right' ? 34 : 26} cy="21" r="1.8" fill="#fb7185" opacity="0.6" />
            </>
          )}
        </svg>
      )}

      {avatar === 'robot_tutor' && (
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="32" cy="58" rx="16" ry="4" fill="rgba(0,0,0,0.35)" />

          {/* Robot Tracks / Wheel */}
          <rect x="22" y="48" width="20" height="9" rx="4.5" fill="#334155" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx="27" cy="52.5" r="2.5" fill="#64748b" />
          <circle cx="32" cy="52.5" r="2.5" fill="#64748b" />
          <circle cx="37" cy="52.5" r="2.5" fill="#64748b" />

          {/* Body */}
          <rect x="20" y="26" width="24" height="21" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          {/* Screen on chest */}
          <rect x="24" y="30" width="16" height="12" rx="2" fill="#0f172a" />
          <text x="32" y="39" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
            f(x)
          </text>

          {/* Antenna */}
          <line x1="32" y1="12" x2="32" y2="6" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="32" cy="5" r="3" fill="#f59e0b" />

          {/* Head */}
          <rect x="22" y="11" width="20" height="15" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
          {/* Robot Visor / Eyes */}
          <rect x="25" y="15" width="14" height="6" rx="3" fill="#0f172a" />
          <circle cx={facing === 'right' ? 35 : 29} cy="18" r="1.5" fill="#22c55e" />
          <circle cx={facing === 'right' ? 39 : 33} cy="18" r="1.5" fill="#22c55e" />
        </svg>
      )}
    </div>
  );
};
