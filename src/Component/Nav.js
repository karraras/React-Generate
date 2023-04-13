import React from "react";
import troll from "../images/troll-face.png";

export default function Nav() {
  return (
    <nav className="navbar my-nav">
      <div className="d-flex align-items-center">
        <img
          src={troll}
          alt=""
          className="navbar-brand"
          style={{ width: "50px" }}
        />
        <h4>Meme Generator</h4>
      </div>
      <h6>React Course - Project 3</h6>
    </nav>
  );
}
