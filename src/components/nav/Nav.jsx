import React from "react";
import logo from "../../logo.svg";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <img className="logo" src={logo} />
      <div className="navTags">
        <Link className="linkTags" to="/">
          Main
        </Link>
        <Link className="linkTags" to="/products">
          Products
        </Link>
        <Link className="linkTags" to="/signInPage">
          SignIn
        </Link>
      </div>
    </div>
  );
}

export default Nav;
