export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Position {
  x: number;
  y: number;
}

export interface MathQuestion {
  id: string;
  prompt: string;
  topic: string;
  answer: number;
  hint: string;
  explanation: string;
  badge?: string;
}

export interface TargetSlot {
  id: string;
  x: number;
  y: number;
  question: MathQuestion;
}

export interface MathBox {
  id: string;
  value: number;
  x: number;
  y: number;
  isCorrect?: boolean;
}

export interface LevelData {
  id: number;
  name: string;
  topic: string;
  description: string;
  difficulty: 'Sedang' | 'Menantang' | 'Sulit' | 'Master';
  gridWidth: number;
  gridHeight: number;
  // 0 = Empty floor, 1 = Wall, 9 = Void (outside room)
  map: number[][];
  playerStart: Position;
  boxes: {
    id: string;
    value: number;
    x: number;
    y: number;
  }[];
  targets: {
    id: string;
    x: number;
    y: number;
    question: MathQuestion;
  }[];
  parSteps: number;
  timeLimit: number;
}

export interface HistoryStep {
  playerPos: Position;
  playerFacing: Direction;
  boxes: { id: string; x: number; y: number }[];
  moves: number;
  pushes: number;
}

export type CharacterAvatar = 'student_boy' | 'student_girl' | 'robot_tutor';
