import React from "react";
import "./header.scss";
import connect from "../../img/connect.svg";

function header() {
  return (
    <header className="header sec-margin">
      <div className="header__heading">
        <div className="header__heading--content">
          <p className="header__heading--content--1 header__heading--content--0">
            Share,
          </p>
          <p className="header__heading--content--2 header__heading--content--0">
            Connect,
          </p>
          <p className="header__heading--content--3 header__heading--content--0">
            Collaborate
          </p>
          <p className="header__heading--content--small">
            lorem isum ij9as9djoasdpa juadshiashdiuahdiasdiaidhaiu
            asdhauidasdaodmoajsduhunmkmom
          </p>
        </div>
        <div className="header__heading--img">
          <img
            src={connect}
            alt="Connect"
            className="header__heading--img--image"
          />
        </div>
      </div>
      <div className="header__button">
        <button className="header__button--btn">
          <span className="header__button--btn--icon">&#8595;</span>
        </button>
      </div>
    </header>
  );
}

export default header;
