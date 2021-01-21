import React from "react";
import boxPurple from "../../img/box-purple.svg";
import boxWhite from "../../img/box-white.svg";
import "./card.scss";

function card(props) {
    return (
        <div className="box">

            <div className="box__1">
                <img src={boxPurple} alt="" className="box__1--img"/>
            </div>

            <p className={"box__2"}>
                {props.name}
            </p>
            <p className={"box__3"}>
                sfrgrtthrh tgrhghjsksjns sxnsk ujujghg jikjhfgfg ggfgdfg dgg
            </p>
            <p className="box__4">
                Read more
                <img src={boxWhite} className="box__4--img"/>
            </p>

        </div>
    );
}

export default card;
