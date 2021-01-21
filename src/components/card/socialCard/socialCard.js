import React from "react";
import "./socialCard.scss";

function SocialCard(props) {
  return (
    <div  className={"boxSocial__content"}>
      <p className={"boxSocial__content--head"}>
        {props.name}
      </p>
      <p className={"boxSocial__content--text boxSocial__content--text2"}>
        sfrgrtthrh tgrhgh ujujghg jikjhfgfg ggfgdfg dgg ascasdas asdsaddad
      </p>
    </div>
  );
}

export default SocialCard;
