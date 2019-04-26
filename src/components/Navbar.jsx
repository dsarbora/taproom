import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <style jsx>{`
        button {
          background-color: lightgreen;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
        }
        .navBar {
          border-bottom: 1px solid darkgreen;
        }
      `}</style>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/kegs">
        <button>See kegs</button>
      </Link>
    </div>
  );
}

export default Navbar;
