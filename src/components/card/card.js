import React from "react";
import boxPurple from "../../img/box-purple.svg";
import boxWhite from "../../img/box-white.svg";

function card(props) {
  return (
    <div
      className={props.name != "Engage on the go" ? "box" : "box box--active"}
    >
      {props.name != "Engage on the go" && (
        <div className="box__1">
          <img src={boxPurple} className="box__1--img" />
        </div>
      )}
      <p className={props.name != "Engage on the go" ? "box__2" : "box__5"}>
        {props.name}
      </p>
      <p className={props.name != "Engage on the go" ? "box__3" : "box__6"}>
        sfrgrtthrh tgrhghjsksjns sxnsk ujujghg jikjhfgfg ggfgdfg dgg
      </p>
      {props.name == "Engage on the go" && (
        <p className="box__4">
          Read more
          <img src={boxWhite} className="box__4--img" />
        </p>
      )}
    </div>
  );
}

export default card;
