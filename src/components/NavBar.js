import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/" exact activeStyles={{background: "darkblue"}}>Home</NavLink>
    <NavLink to="/movies" activeStyles={{background: "darkblue"}}> Movies</NavLink>
    <NavLink to="/directors" activeStyles={{background: "darkblue"}}> Directors</NavLink>
    <NavLink to="/actors" activeStyles={{background: "darkblue"}}> Actors</NavLink>
  </div>
  );
}

export default NavBar;
