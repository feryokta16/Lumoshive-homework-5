import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Start = () => {
  const [inputScore, setInputScore] = useState(1);

  const handleIncrease = () => {
    setInputScore((prevScore) => prevScore + 1);
  };
  const handleDecrease = () => {
    if (inputScore > 0) {
      setInputScore((prevScore) => prevScore - 1);
    }
  };

  return (
    <div>
      <h1>Selamat Datang di Kuis Interaktif</h1>
      <p className="lead">Uji pengetahuanmu dengan menjawab pertanyaan!</p>
      <div className="mt-4">
        <label>Set minimal skor benar untuk menyelesaikan kuis:</label>
        <div className="mt-2 d-flex justify-content-center">
          <div
            className="input-group justify-content-center mt-2"
            style={{ maxWidth: "200px" }}
          >
            <button
              onClick={handleDecrease}
              className="btn btn-outline-secondary"
            >
              <i className="bi bi-dash"></i>
            </button>
            <input
              type="number"
              className="form-control text-center"
              value={inputScore}
              readOnly
            />
            <button
              onClick={handleIncrease}
              className="btn btn-outline-secondary"
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <Link to="/question" state={{ minimumScore: inputScore }}>
        <button className="btn btn-primary mt-3">
          <i className="bi bi-play-circle-fill"></i> Mulai Kuis
        </button>
      </Link>
    </div>
  );
};

Start.protoTypes = {
  inputScore: PropTypes.number.isRequired,
};
export default Start;
