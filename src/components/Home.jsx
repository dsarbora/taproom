import React from "react";
import background from "./../img/kegroom.jpg";
import { Link } from "react-router-dom";

function Intro(props) {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          height: 500px;
        }
        h1 {
          font-size: 45px;
          color: white;
        }

        .header {
          text-align: center;
        }

        button {
          padding: 10px;
          background-color: lightgreen;
          border-radius: 5px;
        }
        h3 {
          color: black;
        }
        .menu {
          background-color: rgba(240, 240, 240, 0.8);

          border-radius: 20px;
          padding: 15px;
          display: inline-block;
        }
      `}</style>
      <div className="header">
        <h1>Welcome to the pub</h1>
        <Link to="/bar">
          <button>Enter</button>
        </Link>
        <br />
        <div className="menu">
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
