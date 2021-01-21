import React from "react"
import "./questContent.scss";
import boxPurple from "../../../img/box-purple.svg";
import boxDarkPurple from "../../../img/box-dark-purple.svg";
function questContent(props) {
  return (
    <div className="ques">
      <div className="ques__icon">
        <img src={boxPurple} alt="" className="" />
      </div>
      <div className="ques__text">
        <p className="ques__text--head">{props.name}</p>
        <p className="ques__text--para">{props.ques}</p>
        <div className="ques__text--read">
          <p className="ques__text--read--text">Read more</p>
          <img src={boxDarkPurple} alt="" className="ques__text--read--icon" />
        </div>
      </div>
    </div>
  );
}

export default questContent;
