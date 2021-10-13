import React from "react";
import ChangeTitle from "../../hooks/ChangeTitle";
import Banner from "./Banner/Banner";
import Exparts from "./Exparts/Exparts";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <ChangeTitle pageTitle="Home" />
      <Banner />
      <Services />
      <Exparts />
    </>
  );
};

export default Home;
