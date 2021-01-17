import React from "react";
import boxPurple from "../../../img/box-purple.svg";
import boxPink from "../../../img/box-pink.svg";

function PriceCard(props) {
  return (
    <div className="boxPrice">
      <div className="boxPrice__basic">
        <p className="boxPrice__basic--1">{props.name}</p>
        {props.card == "first" && (
          <button className="boxPrice__basic--btn">Best Choise</button>
        )}
      </div>
      <div className="boxPrice__line"></div>
      <div className="boxPrice__price">
        <p className="boxPrice__price--1">{props.price}$</p>
        <p className="boxPrice__price--2">Per</p>
      </div>
      <div className="boxPrice__menu">
        <div className="boxPrice__menu--text">
          <img src={boxPurple} className="boxPrice__menu--text--1--icon" />

          <p className="boxPrice__menu--text--2">Free updates</p>
        </div>
        <div className="boxPrice__menu--text">
          <img src={boxPurple} className="boxPrice__menu--text--1--icon" />

          <p className="boxPrice__menu--text--2">Support</p>
        </div>
        <div className="boxPrice__menu--text">
          <img src={boxPurple} className="boxPrice__menu--text--1--icon" />

          <p className="boxPrice__menu--text--2">Outstanding support</p>
        </div>
        <div className="boxPrice__menu--text">
          <img
            src={props.card == "first" ? boxPink : boxPurple}
            className="boxPrice__menu--text--1--icon"
          />

          <p className="boxPrice__menu--text--2 boxPrice__menu--text--opac ">
            Unlimited
          </p>
        </div>
        <div className="boxPrice__menu--text">
          <img
            src={props.card == "third" ? boxPurple : boxPink}
            className="boxPrice__menu--text--1--icon"
          />

          <p className="boxPrice__menu--text--2 boxPrice__menu--text--opac">
            Build responsive
          </p>
        </div>
      </div>
      <div className="button">
        <button className="button__btn">Getting Started</button>
      </div>
    </div>
  );
}

export default PriceCard;
