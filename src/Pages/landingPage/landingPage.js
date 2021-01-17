import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Navigation from "../../components/navigation/navigation";

function LandingPage(props) {
  return (
    <>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPage;
