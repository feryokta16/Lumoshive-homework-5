import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Question from "./components/Question";
import Result from "./components/Result";

const App = () => {
  const [questions] = useState([
    {
      question: "Apa itu React?",
      options: [
        "Framework CSS",
        "Library JavaScript",
        "Database",
        "Bahasa Pemrograman",
      ],
      answer: "Library JavaScript",
    },
    {
      question: "Siapa yang mengembangkan React?",
      options: ["Microsoft", "Twitter", "Google", "Facebook"],
      answer: "Facebook",
    },
    {
      question: "Apa yang digunakan untuk mengelola state di React?",
      options: ["Bootstrap", "Redux", "JQuery", "PHP"],
      answer: "Redux",
    },
    {
      question: "Apa fungsi utama dari JSX?",
      options: [
        "Menggunakan CSS dalam JavaScript",
        "Menggunakan HTML dalam JavaScript",
        "Mengelola database",
        "Menambahkan animasi",
      ],
      answer: "Menggunakan HTML dalam JavaScript",
    },
    {
      question: "Komponen apa yang dapat me-render UI di React?",
      options: ["App", "Component", "Render", "UI"],
      answer: "Component",
    },
    {
      question: "Apa kegunaan useState di React?",
      options: [
        "Membuat state lokal",
        "Mengakses API",
        "Menghubungkan database",
        "Menjalankan animasi",
      ],
      answer: "Membuat state lokal",
    },
    {
      question: "Hook mana yang digunakan untuk efek samping?",
      options: ["useContext", "useState", "useReducer", "useEffect"],
      answer: "useEffect",
    },
    {
      question: "React bekerja dengan prinsip apa?",
      options: [
        "Two-way data binding",
        "One-way data binding",
        "Four-way data binding",
        "No data binding",
      ],
      answer: "One-way data binding",
    },
    {
      question: "React adalah library berbasis...",
      options: ["Fungsi", "Objek", "Class", "Komponen"],
      answer: "Komponen",
    },
    {
      question: "Untuk apa useRef digunakan di React?",
      options: [
        "Referensi DOM",
        "Membuat state",
        "Mengakses API",
        "Menghubungkan database",
      ],
      answer: "Referensi DOM",
    },
    {
      question: "Apa fungsi dari useContext?",
      options: [
        "Mengakses API",
        "Membagi state antar komponen",
        "Menambahkan animasi",
        "Mengelola layout",
      ],
      answer: "Membagi state antar komponen",
    },
    {
      question: "Di mana file JSX biasa disimpan dalam proyek React?",
      options: ["public", "assets", "config", "src"],
      answer: "src",
    },
    {
      question: "Apa itu Virtual DOM?",
      options: [
        "Browser alternatif",
        "Representasi DOM di memori",
        "Framework baru",
        "Bahasa pemrograman",
      ],
      answer: "Representasi DOM di memori",
    },
    {
      question: "Apa nama Hook yang digunakan untuk memoization di React?",
      options: ["useState", "useEffect", "useMemo", "useCallback"],
      answer: "useMemo",
    },
    {
      question: "Apa yang dilakukan oleh React Router?",
      options: [
        "Navigasi halaman",
        "Menambahkan animasi",
        "Mengelola state",
        "Membuat layout",
      ],
      answer: "Navigasi halaman",
    },
    {
      question: "Apa tujuan dari prop drilling?",
      options: [
        "Mengoper data melalui komponen",
        "Menambahkan animasi",
        "Mengelola layout",
        "Menjalankan logika",
      ],
      answer: "Mengoper data melalui komponen",
    },
    {
      question: "Apa yang dilakukan oleh props di React?",
      options: [
        "Menjalankan server",
        "Mengelola state lokal",
        "Membuat animasi",
        "Mengirim data ke komponen",
      ],
      answer: "Mengirim data ke komponen",
    },
    {
      question: "Kapan harus menggunakan useReducer?",
      options: [
        "Untuk routing",
        "Untuk validasi",
        "Ketika state kompleks",
        "Untuk memoization",
      ],
      answer: "Ketika state kompleks",
    },
    {
      question: "Apa fungsi dari React StrictMode?",
      options: [
        "Menambahkan keamanan",
        "Mengidentifikasi masalah potensial",
        "Mengelola layout",
        "Menambahkan animasi",
      ],
      answer: "Mengidentifikasi masalah potensial",
    },
    {
      question: "Apa yang digunakan untuk menentukan tipe props di React?",
      options: ["Redux", "useState", "PropTypes", "useEffect"],
      answer: "PropTypes",
    },
  ]);

  return (
    <Router>
      <div className="container text-center mt-5">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="/question"
            element={<Question questions={questions} />}
          />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
