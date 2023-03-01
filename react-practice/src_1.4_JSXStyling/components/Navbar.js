import React from "react";
import "../styles/Navbar.css";

const styles = {
  backgroundColor: "green",
  display: "flex",
  justifyContent: "flex-end"
};

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar" style={styles}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
