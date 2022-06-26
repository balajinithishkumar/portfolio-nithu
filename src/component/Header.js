import React from "react";
import "../style/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="border_b">
        <div className="option1">
          <logo>
            Nithish<span>.</span>
          </logo>
        </div>
        <div className="option2">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Certificates</p>
        </div>
        <div className="option3">
          <button>Let's chat</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
