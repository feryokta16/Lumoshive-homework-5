# Aplikasi Latihan Kuis Interaktif
Aplikasi Latihan Kuis Interaktif adalah aplikasi berbasis web yang dibangun dengan React dan menggunakan Bootstrap untuk UI. Aplikasi ini menyediakan kuis dengan 10 pertanyaan pilihan ganda dan memungkinkan pengguna untuk menetapkan skor minimum yang harus dicapai untuk menyelesaikan kuis.

## Fitur
- Kuis 10 Pertanyaan: Aplikasi ini menyediakan 10 pertanyaan yang bisa dijawab oleh pengguna.
- Penetapan Skor Minimum: Di halaman utama, pengguna dapat menetapkan jumlah jawaban benar minimum menggunakan tombol plus dan minus. Nilai ini akan menjadi skor minimum yang harus dicapai untuk menyelesaikan kuis.
- Navigasi Dinamis: Menggunakan React Router untuk berpindah antar halaman dengan lancar.

## Teknologi yang Digunakan
- React: Library JavaScript untuk membangun antarmuka pengguna.
- React Router v6: Untuk navigasi antar halaman.
- Bootstrap: Framework CSS untuk desain responsif.
- Bootstrap Icons: Untuk ikon tambahan pada antarmuka.
- PropTypes: Untuk validasi tipe data pada komponen.

## Struktur Proyek

```bash
src/
│
├── components/
│   ├── Start.js           # Halaman untuk memulai kuis dan mengatur skor minimum
│   ├── Question.js        # Halaman pertanyaan kuis
│   └── Result.js          # Halaman hasil kuis
│
├── App.js                 # File utama aplikasi yang mengatur routing dan alur kuis
└── index.js               # Entry point aplikasi
```

## Instalasi dan Penggunaan
Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi di lingkungan lokal:
1. Clone Repository:
```bash
git clone https://github.com/lumoshive-academy/fe-react-exam-5.git
cd fe-react-exam-5
```
2. Instalasi Dependencies: Pastikan Anda berada di direktori proyek, kemudian jalankan:
```bash
npm install
```
3. Jalankan Aplikasi: Mulai aplikasi dengan perintah berikut:
```bash
npm run dev
```
## Cara Kerja Aplikasi
- Set Skor Minimum: Pada halaman utama, pengguna dapat menggunakan tombol plus (+) dan minus (−) untuk mengatur skor minimum yang diinginkan untuk menyelesaikan kuis.
- Mulai Kuis: Klik tombol Mulai Kuis untuk memulai.
- Jawab Pertanyaan: Setiap pertanyaan akan muncul secara berurutan. Pilih jawaban yang benar dari opsi yang tersedia.
- Lihat Hasil: Setelah semua pertanyaan dijawab, hasil akhir akan ditampilkan. Jika skor memenuhi atau melebihi nilai minimum yang ditetapkan, pengguna akan mendapatkan pesan sukses. Jika tidak, pengguna bisa mencoba lagi.