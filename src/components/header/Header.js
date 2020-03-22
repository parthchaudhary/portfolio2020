import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <header className="dd-header">
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Logo />
          <Menu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
