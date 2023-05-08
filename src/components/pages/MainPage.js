import React from "react";
import Header from '../global/Header'
import Hero from '../hero'

const MainPage = ({ header }) => { 

  return (
    <>
      <Header header={header} />
      <Hero isBg='yes' />
    </>  
  );
}

export default MainPage;
