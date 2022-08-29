import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/Footer";
import Header from "../components/Header";


const MissionStart = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "rejected") {
    return ( <RejectedPrompt changeLocalConfig={ changeLocalConfig } /> )
  } else {
    return ( <StartingText changeLocalConfig={ changeLocalConfig }
                           changeStage={ changeStage } /> )
  }
};

export const StartingText = ({ changeStage, changeLocalConfig }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      We have recently received a tip that a revolutionary operative codenamed 10001 intends to kidnap one of our VIPs
      and
      take them to a blacksmith in an unknown location, we have yet to discover which of our VIPs is their target, or
      what their intentions are.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "1%" } }>
      Your mission, should you choose to accept it, the true identity of the Operative, who the target is, and where
      they are taking them, as well as what their final purpose is…
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "1%" } }>
      As always, in the event that you or any of the agents on your team are caught or killed, the Secretary will
      disavow any knowledge of your actions.
    </h3>
    <h3 style={ { paddingTop: "3%" } }>
      This message will self-destruct in 60 seconds. Good luck.
    </h3>
  </Container>
  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      <Col>
        <Button variant="danger"
                onClick={ () => changeStage("one") }>
          <h3>Accept</h3>
        </Button>
      </Col>
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localStage", "rejected") }>
          <h3>Reject</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer />
</> );

const RejectedPrompt = ({ changeLocalConfig }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1 style={ { paddingBottom: "5%" } }> Nice try, but no xD </h1>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localStage", "reading") }>
      <h3>Back</h3>
    </Button>
  </Container>

  <Footer />
</> );

export default MissionStart;
