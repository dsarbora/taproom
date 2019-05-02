import React from "react";
import { Link } from "react-router-dom";

function Intro(props) {
  return (
    <div className="container">
      <style jsx>{`
        h1 {
          font-size: 45px;
          color: forestgreen;
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
        <div>
          {props.kegs.map(keg => (
            <h3 className="beer">
              {keg.name} {keg.price}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Intro;
