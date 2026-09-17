import { LevelData } from "../types";

export const LEVELS: LevelData[] = [
  {
    "id": 1,
    "name": "Level 1: Aljabar & Operasi Campuran",
    "topic": "Persamaan Linear & Eksponen",
    "description": "Pecahkan persamaan linear dan hitung operasi kombinasi untuk menyelesaikan level pertama!",
    "difficulty": "Sedang",
    "gridWidth": 7,
    "gridHeight": 7,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 3,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 18,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 23,
        "x": 4,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q1",
          "prompt": "Jika 2x + 5 = 17, kemudian nilai x dikalikan 3, berapakah hasilnya?",
          "topic": "Aljabar & Persamaan Linear",
          "answer": 18,
          "hint": "Kurangkan 17 dengan 5: 2x = 12 ➜ x = 6. Lalu kalikan 6 dengan 3.",
          "explanation": "2x = 17 - 5 ➜ 2x = 12 ➜ x = 6. Hasil akhir = 6 × 3 = 18.",
          "badge": "Aljabar"
        }
      },
      {
        "id": "t2",
        "x": 5,
        "y": 2,
        "question": {
          "id": "q2",
          "prompt": "Hitung nilai dari: 4² + (15 ÷ 3) × 2 - 3 = ?",
          "topic": "Operasi Bilangan & Eksponen",
          "answer": 23,
          "hint": "Hitung 4² = 16, lalu selesaikan perkalian (5 × 2 = 10), lalu jumlah dan kurangkan.",
          "explanation": "16 + (5 × 2) - 3 = 16 + 10 - 3 = 23.",
          "badge": "Aritmatika"
        }
      }
    ],
    "parSteps": 22,
    "timeLimit": 120
  },
  {
    "id": 2,
    "name": "Level 2: Pecahan, Persen & Diskon",
    "topic": "Persen & Nilai Pecahan",
    "description": "Terapkan konsep persentase dan nilai pecahan bertingkat untuk memecahkan puzzle ini.",
    "difficulty": "Sedang",
    "gridWidth": 8,
    "gridHeight": 8,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 36,
        "x": 2,
        "y": 5
      },
      {
        "id": "b2",
        "value": 45,
        "x": 5,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q3",
          "prompt": "Barang seharga Rp 180.000 diskon 20%. Berapa ribu rupiah potongan harganya?",
          "topic": "Aritmatika Sosial & Persen",
          "answer": 36,
          "hint": "Diskon = 20% × 180.000 = (20/100) × 180.000.",
          "explanation": "0,20 × 180.000 = 36.000 rupiah = 36 ribu.",
          "badge": "Persentase"
        }
      },
      {
        "id": "t2",
        "x": 6,
        "y": 2,
        "question": {
          "id": "q4",
          "prompt": "Jika 3/5 dari sebuah bilangan adalah 27, berapakah bilangan tersebut?",
          "topic": "Operasi Pecahan Aljabar",
          "answer": 45,
          "hint": "Kalikan 27 dengan kebalikan pecahan tersebut (5/3).",
          "explanation": "Bilangan = 27 × (5/3) = 9 × 5 = 45.",
          "badge": "Pecahan"
        }
      }
    ],
    "parSteps": 26,
    "timeLimit": 120
  },
  {
    "id": 3,
    "name": "Level 3: Perbandingan Rasio & Proporsi",
    "topic": "Perbandingan & Proporsi Nilai",
    "description": "Gunakan konsep perbandingan bertingkat dan proporsi nilai untuk menemukan jawaban.",
    "difficulty": "Sedang",
    "gridWidth": 8,
    "gridHeight": 8,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 3,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 24,
        "x": 2,
        "y": 3
      },
      {
        "id": "b2",
        "value": 18,
        "x": 5,
        "y": 3
      },
      {
        "id": "b3",
        "value": 35,
        "x": 2,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q5",
          "prompt": "Rasio umur A : B = 4 : 3. Jika jumlah umur keduanya 42 tahun, berapa umur A?",
          "topic": "Perbandingan Nilai",
          "answer": 24,
          "hint": "Total bagian rasio = 4 + 3 = 7. Umur A = (4/7) × 42.",
          "explanation": "Bagian A = (4/7) × 42 = 4 × 6 = 24 tahun.",
          "badge": "Perbandingan"
        }
      },
      {
        "id": "t2",
        "x": 6,
        "y": 2,
        "question": {
          "id": "q6",
          "prompt": "Dari perbandingan umur di atas (4:3 total 42 tahun), berapakah umur B?",
          "topic": "Perbandingan Nilai",
          "answer": 18,
          "hint": "Bagian B = (3/7) × 42 atau 42 - 24.",
          "explanation": "Umur B = (3/7) × 42 = 3 × 6 = 18 tahun.",
          "badge": "Perbandingan"
        }
      },
      {
        "id": "t3",
        "x": 5,
        "y": 5,
        "question": {
          "id": "q7",
          "prompt": "Untuk membuat 4 loyang kue butuh 20 telur. Berapa telur untuk 7 loyang kue?",
          "topic": "Perbandingan Senilai",
          "answer": 35,
          "hint": "Hitung kebutuhan per loyang: 20 ÷ 4 = 5 telur. Lalu kalikan dengan 7.",
          "explanation": "(20 ÷ 4) × 7 = 5 × 7 = 35 butir telur.",
          "badge": "Proporsi"
        }
      }
    ],
    "parSteps": 34,
    "timeLimit": 130
  },
  {
    "id": 4,
    "name": "Level 4: Teorema Pythagoras & Segitiga",
    "topic": "Geometri Bidang Siku-Siku",
    "description": "Pahami hubungan kuadrat sisi-sisi segitiga siku-siku serta keliling dan luasnya.",
    "difficulty": "Menantang",
    "gridWidth": 9,
    "gridHeight": 8,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 12,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 54,
        "x": 6,
        "y": 4
      },
      {
        "id": "b3",
        "value": 36,
        "x": 4,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q8",
          "prompt": "Segitiga siku-siku punya alas 9 cm dan sisi miring 15 cm. Berapa cm sisi tegaknya?",
          "topic": "Teorema Pythagoras",
          "answer": 12,
          "hint": "Gunakan rumus b = √(c² - a²) = √(15² - 9²) = √(225 - 81).",
          "explanation": "b = √(225 - 81) = √144 = 12 cm.",
          "badge": "Pythagoras"
        }
      },
      {
        "id": "t2",
        "x": 7,
        "y": 2,
        "question": {
          "id": "q9",
          "prompt": "Berdasarkan segitiga di atas (alas 9 cm, tinggi 12 cm), berapa cm² luasnya?",
          "topic": "Luas Segitiga",
          "answer": 54,
          "hint": "Luas = 1/2 × alas × tinggi = 1/2 × 9 × 12.",
          "explanation": "Luas = 1/2 × 9 × 12 = 9 × 6 = 54 cm².",
          "badge": "Geometri"
        }
      },
      {
        "id": "t3",
        "x": 4,
        "y": 6,
        "question": {
          "id": "q10",
          "prompt": "Berapakah keliling segitiga tersebut (sisi 9 cm, 12 cm, dan 15 cm)?",
          "topic": "Keliling Bidang Datar",
          "answer": 36,
          "hint": "Jumlahkan seluruh sisi segitiga: 9 + 12 + 15.",
          "explanation": "Keliling = 9 + 12 + 15 = 36 cm.",
          "badge": "Geometri"
        }
      }
    ],
    "parSteps": 38,
    "timeLimit": 130
  },
  {
    "id": 5,
    "name": "Level 5: Pangkat, Akar & Bentuk Eksponen",
    "topic": "Akar Kuadrat & Sifat Eksponen",
    "description": "Selesaikan operasi bentuk akar dan persamaan eksponen bertingkat.",
    "difficulty": "Menantang",
    "gridWidth": 9,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 25,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 32,
        "x": 4,
        "y": 4
      },
      {
        "id": "b3",
        "value": 14,
        "x": 6,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q11",
          "prompt": "Hitunglah nilai dari: √(625) ÷ 5 + 2⁴ + 4 = ?",
          "topic": "Operasi Bentuk Akar & Pangkat",
          "answer": 25,
          "hint": "√625 = 25. Bagi dengan 5 menjadi 5. Tambah 2⁴ (16) dan 4.",
          "explanation": "(25 ÷ 5) + 16 + 4 = 5 + 16 + 4 = 25.",
          "badge": "Eksponen"
        }
      },
      {
        "id": "t2",
        "x": 4,
        "y": 7,
        "question": {
          "id": "q12",
          "prompt": "Jika 2^(x - 1) = 16, berapakah nilai dari 2^x ?",
          "topic": "Persamaan Eksponen",
          "answer": 32,
          "hint": "16 = 2⁴, maka x - 1 = 4 ➜ x = 5. Hitung 2⁵.",
          "explanation": "x - 1 = 4 ➜ x = 5. Nilai 2^x = 2⁵ = 32.",
          "badge": "Eksponen"
        }
      },
      {
        "id": "t3",
        "x": 7,
        "y": 2,
        "question": {
          "id": "q13",
          "prompt": "Tentukan hasil dari: 3² + √(169) - 2³ = ?",
          "topic": "Operasi Campuran Bilangan",
          "answer": 14,
          "hint": "3² = 9, √169 = 13, 2³ = 8. Hitung 9 + 13 - 8.",
          "explanation": "9 + 13 - 8 = 22 - 8 = 14.",
          "badge": "Aritmatika"
        }
      }
    ],
    "parSteps": 40,
    "timeLimit": 140
  },
  {
    "id": 6,
    "name": "Level 6: SPLDV & Eliminasi Dua Variabel",
    "topic": "Sistem Persamaan Linear",
    "description": "Selesaikan sistem persamaan dengan metode eliminasi dan substitusi.",
    "difficulty": "Menantang",
    "gridWidth": 9,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 7,
        "x": 2,
        "y": 5
      },
      {
        "id": "b2",
        "value": 4,
        "x": 6,
        "y": 5
      },
      {
        "id": "b3",
        "value": 31,
        "x": 4,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q14",
          "prompt": "Dari sistem 3x + 2y = 29 dan x + 2y = 15, berapakah nilai x?",
          "topic": "Eliminasi SPLDV",
          "answer": 7,
          "hint": "Kurangkan kedua persamaan: (3x - x) = 29 - 15 ➜ 2x = 14.",
          "explanation": "2x = 14 ➜ x = 7.",
          "badge": "SPLDV"
        }
      },
      {
        "id": "t2",
        "x": 7,
        "y": 2,
        "question": {
          "id": "q15",
          "prompt": "Dari sistem di atas (x = 7), berapakah nilai y?",
          "topic": "Substitusi SPLDV",
          "answer": 4,
          "hint": "Substitusi x = 7 ke x + 2y = 15 ➜ 7 + 2y = 15 ➜ 2y = 8.",
          "explanation": "2y = 15 - 7 = 8 ➜ y = 4.",
          "badge": "SPLDV"
        }
      },
      {
        "id": "t3",
        "x": 4,
        "y": 2,
        "question": {
          "id": "q16",
          "prompt": "Jika x = 7 dan y = 4, berapakah nilai dari 3x + 2(y + 1)?",
          "topic": "Substitusi Aljabar",
          "answer": 31,
          "hint": "Hitung 3(7) + 2(4 + 1) = 21 + 2(5).",
          "explanation": "21 + 10 = 31.",
          "badge": "Aljabar"
        }
      }
    ],
    "parSteps": 42,
    "timeLimit": 140
  },
  {
    "id": 7,
    "name": "Level 7: Fungsi Komposisi & Nilai Fungsi",
    "topic": "Relasi, Fungsi & Aljabar",
    "description": "Evaluasi fungsi linier, fungsi kuadrat, dan komposisi nilai fungsi bertahap.",
    "difficulty": "Sulit",
    "gridWidth": 9,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 17,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 26,
        "x": 6,
        "y": 4
      },
      {
        "id": "b3",
        "value": 41,
        "x": 4,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q17",
          "prompt": "Jika f(x) = 4x - 3 dan f(k) = 29, tentukan nilai (2k + 1)!",
          "topic": "Nilai Variabel Fungsi",
          "answer": 17,
          "hint": "4k - 3 = 29 ➜ 4k = 32 ➜ k = 8. Lalu hitung 2(8) + 1.",
          "explanation": "k = 8. Maka 2(8) + 1 = 17.",
          "badge": "Fungsi"
        }
      },
      {
        "id": "t2",
        "x": 7,
        "y": 2,
        "question": {
          "id": "q18",
          "prompt": "Diketahui g(x) = x² + 1. Berapakah nilai dari g(5)?",
          "topic": "Fungsi Kuadrat",
          "answer": 26,
          "hint": "Substitusikan 5: g(5) = 5² + 1 = 25 + 1.",
          "explanation": "25 + 1 = 26.",
          "badge": "Fungsi"
        }
      },
      {
        "id": "t3",
        "x": 4,
        "y": 7,
        "question": {
          "id": "q19",
          "prompt": "Diketahui f(x) = 3x + 8 dan g(x) = x² - 5. Tentukan f(g(4))!",
          "topic": "Komposisi Fungsi",
          "answer": 41,
          "hint": "Hitung g(4) = 4² - 5 = 11. Lalu cari f(11) = 3(11) + 8.",
          "explanation": "g(4) = 11. f(11) = 3(11) + 8 = 33 + 8 = 41.",
          "badge": "Fungsi"
        }
      }
    ],
    "parSteps": 46,
    "timeLimit": 150
  },
  {
    "id": 8,
    "name": "Level 8: Bangun Ruang Kubus, Balok & Prisma",
    "topic": "Geometri Dimensi Tiga",
    "description": "Hitung volume dan luas permukaan berbagai bangun ruang sisi datar.",
    "difficulty": "Sulit",
    "gridWidth": 9,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 64,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 72,
        "x": 6,
        "y": 4
      },
      {
        "id": "b3",
        "value": 52,
        "x": 4,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 7,
        "y": 1,
        "question": {
          "id": "q20",
          "prompt": "Kubus punya luas permukaan 96 cm². Berapa cm³ volume kubus tersebut?",
          "topic": "Volume Kubus",
          "answer": 64,
          "hint": "6s² = 96 ➜ s² = 16 ➜ s = 4. Volume = s³ = 4³.",
          "explanation": "s = 4 cm. Volume = 4 × 4 × 4 = 64 cm³.",
          "badge": "Bangun Ruang"
        }
      },
      {
        "id": "t2",
        "x": 1,
        "y": 7,
        "question": {
          "id": "q21",
          "prompt": "Prisma segitiga punya luas alas 12 cm² dan tinggi 6 cm. Berapa cm³ volumenya?",
          "topic": "Volume Prisma",
          "answer": 72,
          "hint": "Volume prisma = Luas alas × tinggi = 12 × 6.",
          "explanation": "Volume = 12 × 6 = 72 cm³.",
          "badge": "Bangun Ruang"
        }
      },
      {
        "id": "t3",
        "x": 7,
        "y": 7,
        "question": {
          "id": "q22",
          "prompt": "Balok berukuran 4 cm × 3 cm × 2 cm. Berapa cm² luas permukaan totalnya?",
          "topic": "Luas Permukaan Balok",
          "answer": 52,
          "hint": "L = 2(pl + pt + lt) = 2(12 + 8 + 6) = 2(26).",
          "explanation": "L = 2 × (12 + 8 + 6) = 2 × 26 = 52 cm².",
          "badge": "Bangun Ruang"
        }
      }
    ],
    "parSteps": 48,
    "timeLimit": 150
  },
  {
    "id": 9,
    "name": "Level 9: Barisan & Deret Bilangan",
    "topic": "Aritmatika & Geometri",
    "description": "Tentukan suku ke-n serta jumlah deret bilangan aritmatika dan geometri.",
    "difficulty": "Sulit",
    "gridWidth": 9,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 53,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 96,
        "x": 6,
        "y": 4
      },
      {
        "id": "b3",
        "value": 75,
        "x": 4,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 2,
        "question": {
          "id": "q23",
          "prompt": "Barisan aritmatika suku awal a = 5 dan beda b = 4. Tentukan suku ke-13 (U₁₃)!",
          "topic": "Barisan Aritmatika",
          "answer": 53,
          "hint": "U₁₃ = a + (13 - 1)b = 5 + 12 × 4 = 5 + 48.",
          "explanation": "U₁₃ = 5 + (12 × 4) = 5 + 48 = 53.",
          "badge": "Barisan"
        }
      },
      {
        "id": "t2",
        "x": 7,
        "y": 2,
        "question": {
          "id": "q24",
          "prompt": "Barisan geometri: 3, 6, 12, 24, ... Tentukan nilai suku ke-6 (U₆)!",
          "topic": "Barisan Geometri",
          "answer": 96,
          "hint": "Rasio r = 2. U₆ = a × r⁵ = 3 × 2⁵ = 3 × 32.",
          "explanation": "3 × 32 = 96.",
          "badge": "Geometri"
        }
      },
      {
        "id": "t3",
        "x": 4,
        "y": 7,
        "question": {
          "id": "q25",
          "prompt": "Hitung jumlah 5 suku pertama (S₅) dari deret: 3 + 9 + 15 + 21 + 27 = ?",
          "topic": "Deret Aritmatika",
          "answer": 75,
          "hint": "Gunakan S₅ = (5/2) × (awal + akhir) = 2,5 × (3 + 27) = 2,5 × 30.",
          "explanation": "S₅ = (5/2) × (3 + 27) = 5 × 15 = 75.",
          "badge": "Deret"
        }
      }
    ],
    "parSteps": 50,
    "timeLimit": 150
  },
  {
    "id": 10,
    "name": "Level 10: Lingkaran, Juring & Luas Bidang",
    "topic": "Geometri Lingkaran & Bidang Datar",
    "description": "Uji pemahaman tentang keliling, jari-jari, diameter, dan luas bangun datar.",
    "difficulty": "Sulit",
    "gridWidth": 9,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 77,
        "x": 2,
        "y": 5
      },
      {
        "id": "b2",
        "value": 88,
        "x": 6,
        "y": 5
      },
      {
        "id": "b3",
        "value": 150,
        "x": 4,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 4,
        "y": 1,
        "question": {
          "id": "q26",
          "prompt": "Lingkaran dengan r = 7 cm (π = 22/7). Berapa cm² luas setengah lingkaran tersebut?",
          "topic": "Luas Lingkaran",
          "answer": 77,
          "hint": "Luas penuh = (22/7) × 7 × 7 = 154 cm². Setengah lingkaran = 154 ÷ 2.",
          "explanation": "1/2 × 154 = 77 cm².",
          "badge": "Lingkaran"
        }
      },
      {
        "id": "t2",
        "x": 1,
        "y": 7,
        "question": {
          "id": "q27",
          "prompt": "Roda berdiameter d = 28 cm (π = 22/7). Berapa cm keliling putarannya?",
          "topic": "Keliling Lingkaran",
          "answer": 88,
          "hint": "K = π × d = (22/7) × 28 = 22 × 4.",
          "explanation": "K = 22 × 4 = 88 cm.",
          "badge": "Lingkaran"
        }
      },
      {
        "id": "t3",
        "x": 7,
        "y": 7,
        "question": {
          "id": "q28",
          "prompt": "Taman persegi panjang berukuran panjang 15 m dan lebar 10 m. Berapa m² luasnya?",
          "topic": "Luas Persegi Panjang",
          "answer": 150,
          "hint": "Luas = panjang × lebar = 15 × 10.",
          "explanation": "15 × 10 = 150 m².",
          "badge": "Geometri"
        }
      }
    ],
    "parSteps": 52,
    "timeLimit": 160
  },
  {
    "id": 11,
    "name": "Level 11: Persamaan Kuadrat & Diskriminan",
    "topic": "Aljabar Lanjutan & Akar Kuadrat",
    "description": "Faktorisasi persamaan kuadrat dan hitung nilai diskriminan dengan presisi.",
    "difficulty": "Master",
    "gridWidth": 10,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 9,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 49,
        "x": 7,
        "y": 4
      },
      {
        "id": "b3",
        "value": 21,
        "x": 4,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 8,
        "y": 1,
        "question": {
          "id": "q29",
          "prompt": "Persamaan x² - 12x + 27 = 0 punya dua akar positif. Berapakah nilai akar terbesarnya?",
          "topic": "Akar Persamaan Kuadrat",
          "answer": 9,
          "hint": "Faktorkan menjadi (x - 9)(x - 3) = 0. Akar-akarnya x = 9 dan x = 3. Terbesar = 9.",
          "explanation": "(x - 9)(x - 3) = 0 ➜ akar terbesar adalah 9.",
          "badge": "Kuadrat"
        }
      },
      {
        "id": "t2",
        "x": 1,
        "y": 7,
        "question": {
          "id": "q30",
          "prompt": "Tentukan nilai diskriminan (D = b² - 4ac) dari persamaan x² - 9x + 8 = 0!",
          "topic": "Diskriminan Persamaan Kuadrat",
          "answer": 49,
          "hint": "a = 1, b = -9, c = 8. D = (-9)² - 4(1)(8) = 81 - 32.",
          "explanation": "D = 81 - 32 = 49.",
          "badge": "Diskriminan"
        }
      },
      {
        "id": "t3",
        "x": 8,
        "y": 7,
        "question": {
          "id": "q31",
          "prompt": "Jika x + y = 10 dan x² - y² = 70, berapakah nilai dari 3(x - y)?",
          "topic": "Aljabar Selisih Kuadrat",
          "answer": 21,
          "hint": "x² - y² = (x+y)(x-y) ➜ 70 = 10(x-y) ➜ x - y = 7. Kalikan 7 dengan 3.",
          "explanation": "x - y = 7. Maka 3(x - y) = 3 × 7 = 21.",
          "badge": "Aljabar"
        }
      }
    ],
    "parSteps": 54,
    "timeLimit": 160
  },
  {
    "id": 12,
    "name": "Level 12: Kombinatorika, Peluang & Ruang Sampel",
    "topic": "Pencacahan & Teori Peluang",
    "description": "Pecahkan persoalan kombinasi dan ruang sampel pada pelemparan objek acak.",
    "difficulty": "Master",
    "gridWidth": 10,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 5,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 15,
        "x": 2,
        "y": 5
      },
      {
        "id": "b2",
        "value": 36,
        "x": 7,
        "y": 5
      },
      {
        "id": "b3",
        "value": 48,
        "x": 5,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 1,
        "question": {
          "id": "q32",
          "prompt": "Dari 6 orang siswa, akan dipilih 2 perwakilan. Berapa banyak kombinasi C(6, 2)?",
          "topic": "Kombinasi",
          "answer": 15,
          "hint": "C(6, 2) = (6 × 5) ÷ (2 × 1) = 30 ÷ 2 = 15.",
          "explanation": "30 ÷ 2 = 15 kombinasi.",
          "badge": "Kombinatorika"
        }
      },
      {
        "id": "t2",
        "x": 8,
        "y": 1,
        "question": {
          "id": "q33",
          "prompt": "Dua dadu 6 sisi dilempar bersamaan. Berapa banyak seluruh kemungkinan titik sampel?",
          "topic": "Ruang Sampel Peluang",
          "answer": 36,
          "hint": "Banyak titik sampel = 6 × 6.",
          "explanation": "6 × 6 = 36 titik sampel.",
          "badge": "Peluang"
        }
      },
      {
        "id": "t3",
        "x": 5,
        "y": 7,
        "question": {
          "id": "q34",
          "prompt": "Banyak cara menyusun 4 huruf berbeda kata MATH kemudian dikalikan 2 adalah ?",
          "topic": "Permutasi & Pencacahan",
          "answer": 48,
          "hint": "Susunan huruf = 4! = 4 × 3 × 2 × 1 = 24. Lalu kalikan 2.",
          "explanation": "4! × 2 = 24 × 2 = 48.",
          "badge": "Permutasi"
        }
      }
    ],
    "parSteps": 56,
    "timeLimit": 170
  },
  {
    "id": 13,
    "name": "Level 13: Statistika Mean, Median & Jangkauan",
    "topic": "Ukuran Pemusatan & Penyebaran Data",
    "description": "Analisis sekumpulan data untuk menemukan rata-rata, nilai tengah, dan selisih rentang.",
    "difficulty": "Master",
    "gridWidth": 10,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 16,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 30,
        "x": 7,
        "y": 4
      },
      {
        "id": "b3",
        "value": 11,
        "x": 4,
        "y": 5
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 8,
        "y": 1,
        "question": {
          "id": "q35",
          "prompt": "Data nilai terurut: 12, 14, 15, 16, 18, 19, 22. Berapakah Median (nilai tengahnya)?",
          "topic": "Median Data",
          "answer": 16,
          "hint": "Ada 7 data ganjil. Median adalah suku ke-4, yaitu 16.",
          "explanation": "Nilai tengah (urutan ke-4) = 16.",
          "badge": "Statistika"
        }
      },
      {
        "id": "t2",
        "x": 1,
        "y": 7,
        "question": {
          "id": "q36",
          "prompt": "Rata-rata 4 siswa adalah 25. Ditambah 1 anak baru, rata-rata jadi 26. Berapa nilai anak baru?",
          "topic": "Rata-Rata Gabungan",
          "answer": 30,
          "hint": "Total awal = 4 × 25 = 100. Total baru = 5 × 26 = 130. Selisih = 130 - 100.",
          "explanation": "Nilai = 130 - 100 = 30.",
          "badge": "Statistika"
        }
      },
      {
        "id": "t3",
        "x": 8,
        "y": 7,
        "question": {
          "id": "q37",
          "prompt": "Berapakah Jangkauan (Nilai Terbesar - Terkecil) dari: 23, 15, 26, 17, 19, 21, 15 ?",
          "topic": "Jangkauan / Range Data",
          "answer": 11,
          "hint": "Nilai maksimum = 26, minimum = 15. Hitung 26 - 15.",
          "explanation": "Range = 26 - 15 = 11.",
          "badge": "Statistika"
        }
      }
    ],
    "parSteps": 58,
    "timeLimit": 170
  },
  {
    "id": 14,
    "name": "Level 14: Gradien & Persamaan Garis Koordinat",
    "topic": "Geometri Analitik & Koordinat Kartesius",
    "description": "Hitung kemiringan gradien garis lurus, titik potong sumbu, dan jarak antartitik.",
    "difficulty": "Master",
    "gridWidth": 10,
    "gridHeight": 9,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 5,
        "x": 2,
        "y": 5
      },
      {
        "id": "b2",
        "value": 20,
        "x": 7,
        "y": 5
      },
      {
        "id": "b3",
        "value": 25,
        "x": 4,
        "y": 4
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 1,
        "question": {
          "id": "q38",
          "prompt": "Gradien garis melalui titik A(2, 3) dan B(6, 23) adalah m = ?",
          "topic": "Gradien Dua Titik",
          "answer": 5,
          "hint": "m = (y₂ - y₁) ÷ (x₂ - x₁) = (23 - 3) ÷ (6 - 2) = 20 ÷ 4.",
          "explanation": "m = 20 ÷ 4 = 5.",
          "badge": "Gradien"
        }
      },
      {
        "id": "t2",
        "x": 8,
        "y": 1,
        "question": {
          "id": "q39",
          "prompt": "Garis 4x - 2y + 10 = 0 memotong sumbu-y di (0, c). Berapakah nilai 4c?",
          "topic": "Titik Potong Sumbu Garis",
          "answer": 20,
          "hint": "Masukkan x = 0 ➜ -2y + 10 = 0 ➜ 2y = 10 ➜ y = c = 5. Nilai 4c = 4 × 5.",
          "explanation": "c = 5. Maka 4c = 4 × 5 = 20.",
          "badge": "Persamaan Garis"
        }
      },
      {
        "id": "t3",
        "x": 5,
        "y": 7,
        "question": {
          "id": "q40",
          "prompt": "Jarak antara titik asal (0, 0) ke titik (7, 24) pada bidang kartesius adalah ?",
          "topic": "Jarak Dua Titik Kartesius",
          "answer": 25,
          "hint": "Gunakan d = √(7² + 24²) = √(49 + 576) = √625.",
          "explanation": "d = √625 = 25.",
          "badge": "Koordinat"
        }
      }
    ],
    "parSteps": 62,
    "timeLimit": 180
  },
  {
    "id": 15,
    "name": "Level 15: Grand Master Tantangan Matematika Terpadu",
    "topic": "Aljabar Terpadu & Pemecahan Masalah Kompleks",
    "description": "Uji kemampuan strategi tertinggi: 4 kotak jawaban dengan kombinasi aljabar, persen, dan geometri!",
    "difficulty": "Master",
    "gridWidth": 10,
    "gridHeight": 10,
    "map": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "playerStart": {
      "x": 4,
      "y": 1
    },
    "boxes": [
      {
        "id": "b1",
        "value": 50,
        "x": 2,
        "y": 4
      },
      {
        "id": "b2",
        "value": 28,
        "x": 7,
        "y": 4
      },
      {
        "id": "b3",
        "value": 40,
        "x": 2,
        "y": 6
      },
      {
        "id": "b4",
        "value": 100,
        "x": 7,
        "y": 6
      }
    ],
    "targets": [
      {
        "id": "t1",
        "x": 1,
        "y": 1,
        "question": {
          "id": "q41",
          "prompt": "Membeli 10 kotak seharga Rp 400.000. Ingin untung total 25%, berapa ribu rupiah harga jual per kotak?",
          "topic": "Aritmatika Sosial Lanjutan",
          "answer": 50,
          "hint": "Total jual = 400.000 + 25%(400.000) = 500.000. Bagi 10 kotak = 50.000 = 50 ribu.",
          "explanation": "500.000 ÷ 10 = 50.000 rupiah = 50 ribu.",
          "badge": "Aritmatika"
        }
      },
      {
        "id": "t2",
        "x": 8,
        "y": 1,
        "question": {
          "id": "q42",
          "prompt": "Keliling persegi panjang 80 cm. Panjang 12 cm lebih dari lebar. Berapa cm panjangnya?",
          "topic": "Persamaan Linear Geometri",
          "answer": 28,
          "hint": "2(p + l) = 80 ➜ p + l = 40. p = l + 12 ➜ (l + 12) + l = 40 ➜ 2l = 28 ➜ l = 14 cm. p = 14 + 12 = 28.",
          "explanation": "Panjang = 14 + 12 = 28 cm.",
          "badge": "Aljabar"
        }
      },
      {
        "id": "t3",
        "x": 1,
        "y": 8,
        "question": {
          "id": "q43",
          "prompt": "Jika 5y - 8 = 3y + 12, berapakah nilai dari 4y ?",
          "topic": "Aljabar Dua Ruas",
          "answer": 40,
          "hint": "5y - 3y = 12 + 8 ➜ 2y = 20 ➜ y = 10. Nilai 4y = 4 × 10.",
          "explanation": "2y = 20 ➜ y = 10. Maka 4y = 40.",
          "badge": "Aljabar"
        }
      },
      {
        "id": "t4",
        "x": 8,
        "y": 8,
        "question": {
          "id": "q44",
          "prompt": "Berapakah hasil dari operasi bilangan: (2³ × 5² ÷ 2) = ?",
          "topic": "Operasi Eksponen Campuran",
          "answer": 100,
          "hint": "2³ = 8 dan 5² = 25. Kalikan 8 × 25 = 200. Lalu bagi 2.",
          "explanation": "(8 × 25) ÷ 2 = 200 ÷ 2 = 100.",
          "badge": "Eksponen"
        }
      }
    ],
    "parSteps": 70,
    "timeLimit": 200
  }
];
