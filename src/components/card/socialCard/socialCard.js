import React from "react";

function SocialCard(props) {
  return (
    <div
      className={
        props.name === "Badges"
          ? "boxSocial__content boxSocial__content-active"
          : "boxSocial__content"
      }
    >
      <p
        className={
          props.name === "Badges"
            ? "boxSocial__content--head1"
            : "boxSocial__content--head"
        }
      >
        {props.name}
      </p>
      <p
        className={
          props.name === "Badges"
            ? "boxSocial__content--text1"
            : "boxSocial__content--text boxSocial__content--text2"
        }
      >
        sfrgrtthrh tgrhgh ujujghg jikjhfgfg ggfgdfg dgg ascasdas asdsaddad
      </p>
    </div>
  );
}

export default SocialCard;
