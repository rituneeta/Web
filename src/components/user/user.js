import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../img/logo.png";

function User(props) {
  const history = useHistory();
  return (
    <div class="sign">
      <div class="left">
        <div class="test">
          <div class="left__icon">
            <img src={logo} class="left__icon--img" />
          </div>
          <div class="left__text">
            <p class="left__text--para">
              Lets's create something amazing with Us.
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right__member">
          <p class="right__member--1">
            {props.name === "signUp" ? "Already a member?" : "New user? "}
          </p>
          <p
            class="right__member--2"
            onClick={() => {
              history.push(props.name === "signUp" ? "/signIn" : "/signUp");
            }}
          >
            {props.name === "signUp" ? "signIn" : "create an account"}
          </p>
          <div class="right__member--dot">
            <div class="right__member--dot--1"></div>
            <div class="right__member--dot--1"></div>
            <div class="right__member--dot--1"></div>
          </div>
        </div>

        <div class="form">
          <p class="form__head">{props.name} to Graphitti</p>
          <div class="form__button">
            <button class="form__button--0 form__button--1">
              {props.name} with Google
            </button>
            <button class="form__button--0 form__button--2">
              With Facebook
            </button>
          </div>

          <div class="form__line"></div>

          <p class="form__email">Or {props.name} using your email address</p>

          {props.name === "signUp" && (
            <div class="form__detail">
              <div class="form__detail--name">
                <p class="form__detail--name--1">Name</p>
                <input type="text" class="form__detail--name--input" />
              </div>
              <div class="form__detail--name">
                <p class="form__detail--name--1">Username</p>
                <input type="text" class="form__detail--name--input" />
              </div>
            </div>
          )}

          <div class="form__detail">
            <div class="form__detail--name">
              <p class="form__detail--name--1">Email</p>
              <input type="email" class="form__detail--name--input" />
            </div>
            <div class="form__detail--name">
              <p class="form__detail--name--1">Password</p>
              <input
                type="text"
                placeholder="&+ character"
                class="form__detail--name--input"
              />
            </div>
          </div>

          <div class="form__term">
            <input type="checkbox" class="form__term--check" />
            {props.name == "signUp" ? (
              <p class="form__term--text">
                Creating an account means you’re okay with our{" "}
                <span> Terms of Service, Privacy Policy,</span> and our default{" "}
                <span> Notification Settings.</span>
              </p>
            ) : (
              <p class="form__term--text">
                Remember me &nbsp;
                <span> Forgot Password ? </span>
              </p>
            )}
          </div>

          <div class="form__button">
            <button class="form__button--0 form__button--3">
              {props.name === "signIn" ? "signIn" : "create an account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
