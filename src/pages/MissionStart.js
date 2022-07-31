import React from "react";

import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { StartingText } from "../components/Communications";

const MissionStart = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "rejected") {
    return ( <RejectedPrompt changeLocalConfig={ changeLocalConfig }/> )
  } else {
    return ( <StartingText changeLocalConfig={ changeLocalConfig }
                           changeStage={ changeStage }/> )
  }
};

const RejectedPrompt = ({ changeLocalConfig }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1 style={ { paddingBottom: "5%" } }> Nice try, but no xD </h1>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localStage", "reading") }>
      <h3>Back</h3>
    </Button>
  </Container>

  <Footer/>
</> );

export default MissionStart;
