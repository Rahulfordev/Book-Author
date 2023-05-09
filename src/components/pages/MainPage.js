import React from "react";
import Header from '../global/Header'
import Hero from '../hero'
import Achieve from '../achieve'

const MainPage = ({ header }) => { 

  return (
    <>
      <Header header={header} />
      <Hero isBg='yes' />
      <Achieve isBg='' />
    </>  
  );
}

export default MainPage;
