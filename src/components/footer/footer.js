import React from "react";
import boxWhite from "../../img/box-white.svg";
import boxDarkPurple from "../../img/box-dark-purple.svg";

function footer() {
  return (
    <footer className="footer">
      <div className="base">
        <div className="base__contact">
          <p className="base__contact--head">Contacts</p>
          <div className="base__contact--div1">
            <img src={boxWhite} className="base__contact--div1--icon" />

            <div className="base__contact--div1--num">
              <p className="base__contact--div1--num--1">Have questions?</p>
              <p className="base__contact--div1--num--2">+919966908431</p>
            </div>
          </div>
          <div className="base__contact--div2">
            <p className="base__contact--div2--text1">
              Address: 21 Ananya Chaitanya Layout, seegehali Kadugodi Post,
              Banglore
            </p>
            <p className="base__contact--div2--text1">
              E-mail: info@grafitti.com
            </p>
          </div>
        </div>

        <div className="base__contact">
          <p className="base__contact--head1">Links</p>
          <div className="base__contact--text">
            <p className="base__contact--text--1">About company</p>

            <p className="base__contact--text--1">Pricing plans</p>
          </div>
          <div className="base__contact--text">
            <p className="base__contact--text--1">Terms and Conditions</p>
            <p className="base__contact--text--1">Contact</p>
          </div>
          <div className="base__contact--text">
            <p className="base__contact--text--1">Privacy Policy</p>
          </div>
        </div>

        <div className="base__contact">
          <p className="base__contact--head1">Subscribe</p>
          <div className="base__contact--input">
            <input
              type="email"
              placeholder="Enter your email"
              className="base__contact--input--field"
            />
            <img src={boxDarkPurple} className="base__contact--input--icon" />
          </div>
          <div className="base__contact--sub">
            <p className="base__contact--sub--text">
              Keep up to date with all new themes and updates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
