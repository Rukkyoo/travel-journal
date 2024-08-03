import React from "react";
import globeLogo from "./assets/Globe-logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="nav-bar">
        <img src={globeLogo} />
        My travel journal.
      </div>
    </div>
  );
};

export default Navbar;
