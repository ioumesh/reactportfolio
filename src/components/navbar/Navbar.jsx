import React from "react";
import "./navbar.css";
import Toggle from "../toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="left">
        <div className="name">Dev Umesh</div>
        <div>
          <Toggle />
        </div>
      </div>
      <div className="right">
        <div className="navbarList">
          <ul>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="About" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
              >
                PortFolio
              </Link>
            </li>
          </ul>
        </div>
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          <button>Hire Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
