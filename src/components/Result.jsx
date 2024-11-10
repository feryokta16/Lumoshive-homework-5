import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { score, minimumScore } = location.state || {
    score: 0,
    minimumScore: 0,
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h2 className="card-title">Hasil Kuis</h2>
        <p className="lead text-success">
          Selamat! Kamu telah menyelesaikan kuis. {score}
        </p>
        <p>minimum score yang diperlukan : {minimumScore}</p>
        {(() => {
          if (score >= minimumScore) {
            return <p>lolos</p>;
          } else {
            <p>banyak belajar</p>;
          }
        })()}
        <Link to="/">
          <button className="btn btn-secondary mt-3">
            <i className="bi bi-arrow-repeat"></i> Coba Lagi
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
