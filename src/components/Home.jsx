import React from "react";

function Intro() {
  return (
    <div className="container">
      <style jsx>{`
        h1 {
          font-size: 45px;
          color: #700;
        }

        .header {
          text-align: center;
          background-color: #222;
        }
      `}</style>
      <div className="header">
        <h1>Welcome to the pub</h1>
        <Link to="/game">
          <button>Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
