import React from "react";
import "./NavBar.css";
import myLogo from "../assets/petSitterNew_processed.png";

export default function Navbar() {
  return (
    <div>
      <header className="header">
        <img src={myLogo} alt="logo for site" />
        <h1 //</header>>
        >
          The Pet Sitter
        </h1>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/components/pages/AboutMe">About</a>
          <a href="/services">Info</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}
