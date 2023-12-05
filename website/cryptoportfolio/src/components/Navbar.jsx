import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav id="nav-bar" className="flex-column">
        <ul className="flex-column">
          <li>
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active-page" : "none")}
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active-page" : "none")}
            >
              <span>My Portfolio</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
