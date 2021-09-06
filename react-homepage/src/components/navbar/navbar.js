import React, { useState } from "react";
import "./navbar.scss";
import gritzo from "../assets/gritzo.png";
import Navlink from "../navlinks/navlinks";
import Navbarlink from "../navbar-link/navbarLink";

function Navbar(props) {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={gritzo} width="150px" alt=""></img>
      </div>
      <Navbarlink />
      {open && (
        <ul className="nav-links">
          <Navlink
            closeSideBar={() => {
              setOpen(false);
            }}
          />
        </ul>
      )}
      <div className="Users">
        <i class="fas fa-shopping-cart"></i>
        <i class="far fa-user"></i>
        <i onClick={() => setOpen(true)} class="fas fa-bars burger"></i>
      </div>
    </nav>
  );
}

export default Navbar;
