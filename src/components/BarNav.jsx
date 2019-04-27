import React from "react";

function BarNav(props) {
  return (
    <div className="container">
      <style jsx>{`
        .navContainer {
          width: 300px;
        }
        .container {
          text-align: center;
        }
        .left {
          background-color: lightgreen;
        }
        .right {
          background-color: lightgreen;
        }
        .nav {
          text-align: center;
          height: 50px;
          margin: 10px 10px 10px 30px;
          border-radius: 5px;
        }
      `}</style>
      <div className="navContainer">
        <button className="nav left" onClick={() => props.onSelect("kegs")}>
          Show Kegs
        </button>
        <button
          className="nav right"
          onClick={() => props.onSelect("financials")}
        >
          Show Financials
        </button>
      </div>
    </div>
  );
}

export default BarNav;
