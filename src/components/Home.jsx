import React from "react";
import { Link } from "react-router-dom";

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
        }

        button {
          padding: 10px;
          background-color: lightgreen;
          border-radius: 5px;
        }
      `}</style>
      <div className="header">
        <h1>Welcome to the pub</h1>
        <Link to="/bar">
          <button>Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
