import React from "react";
import "./navigation.scss";
import logo from "../../img/logo.png";
import { Link, useHistory } from "react-router-dom";

function Navigation(props) {
  let history = useHistory();
  return (
    <div className="navigation">
      <div className="navigation__logo-box">
        <img src={logo} alt="Logo" className="navigation__logo" />
      </div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link active"> Home </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link">About Us</Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link">Features</Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link">Pricing</Link>
          </li>
          <li className="navigation__item">
            <Link href="#" className="navigation__link">
              Support
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link">My Account</Link>
          </li>
        </ul>
      </nav>

      <div className="navigation__button">
        <button
          onClick={() => {
            history.push("/signIn");
          }}
          className="navigation__button--0 cursor"
        >
          Login
        </button>
        <p className="navigation__button--or">or</p>
        <button
          onClick={() => {
            history.push("/signUp");
          }}
          className="navigation__button--0 cursor"
        >
          Create account
        </button>
      </div>
    </div>
  );
}

export default Navigation;
