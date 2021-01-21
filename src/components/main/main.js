import React from "react";
import Card from "../card/card";
import imgWork from "../../img/img-work.svg";
import triangleRight from "../../img/triangle-right.svg";
import imgFollow from "../../img/img-follow.svg";
import SocialCard from "../card/socialCard/socialCard";
import PriceCard from "../card/priceCard/priceCard";
import QuesContent from "../content/questContent/questContent";
import "./main.scss";

function main(props) {
  return (
    <main>
      <section className="section-collab ">
        <Card name="Collaborate" />
        <Card name="Work Anywhere" />
        <Card name="Engage on the go" />
      </section>

      <section className="section-work ">
        <div className="work">
          <img src={imgWork} alt="" className="work__img" />
          <div className="work__cont">
            <div className="work__cont--text">
              <p className="work__cont--text--1">Work Together</p>
              <p className="work__cont--text--2">
                sfrgrtthrh tgrhgh ujujghg jikjhfgfg ggfgdfg dgg ascasdas
                asdsaddad
              </p>
            </div>
            <div className="button">
              <button className="button__btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-how">
        <div className="how">
          <p className="how--play">
            <img src={triangleRight} alt="" className="how--play--img" />
          </p>
          <p className="how--text1">How it works</p>
          <p className="how--text2">
            sfrgrtthrh tgrhgh ujujghg jikjhfgfg ggfgdfg dgg ascasdas asdsaddad
          </p>
        </div>
      </section>

      <section className="section-work ">
        <div className="follow">
          <div className="follow__cont">
            <div className="follow__cont--text">
              <p className="follow__cont--text--1">
                Engage with your Followers
              </p>
              <p className="follow__cont--text--2">
                sfrgrtthrh tgrhgh ujujghg jikjhfgfg ggfgdfg dgg ascasdas
                asdsaddad
              </p>
            </div>
            <div className="button">
              <button className="button__btn">Get Started</button>
            </div>
          </div>

          <img src={imgFollow} alt="" className="follow__img" />
        </div>
      </section>

      <section className="section-social ">
        <div className="boxSocial boxSocial--up">
          <SocialCard name="The Creator" />
          <SocialCard name="Badges" />
        </div>
        <div class="boxSocial boxSocial-margin">
          <SocialCard name="The Collaborator" />
          <SocialCard name="The Viewer" />
        </div>
        <div className="text">
          <p className="text__para">A Social</p>
          <p className="text__para">Collaboration</p>
          <p className="text__para">Platform</p>
        </div>
      </section>

      <section className="section-contact">
        <div className="contact">
          <p className="contact__text">
            Make work more fun together with Grafitti!
          </p>
          <button className="contact__btn">Contact Us</button>
        </div>
      </section>

      <section className="section-price">
        <PriceCard card="first" name="Basic" price={15} />
        <PriceCard card="second" name="Standard" price={37} />
        <PriceCard card="third" name="Advance" price={42} />
      </section>

      <section className="section-question">
        <QuesContent
          name="View common questions"
          ques="From signup till prices every queries, answered at one place."
        />
        <QuesContent
          name="Looking for support?"
          ques="24x7 support for any problem that you encounter."
        />
      </section>
    </main>
  );
}

export default main;
