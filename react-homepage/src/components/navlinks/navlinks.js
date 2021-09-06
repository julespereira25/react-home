import React from "react";
import "./navlinks.scss";
import gritzo from "../assets/gritzo.png";
import { link } from "./data";

function Navlink(props) {
  return (
    <div className="nav__list">
      <i onClick={props.closeSideBar} className="fas fa-times close"></i>
      <ul className="list">
        <img className="gritzo" src={gritzo} width="80px" alt="gritzo"></img>
        {link.map((item) => (
          <li className="sidebarList">
            <a key={item.linkKey} className="sidebarLink">
              {item.linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navlink;
