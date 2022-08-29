import React, { useState } from "react";
import {
  LocationClueTextFive,
  LocationClueTextFour,
  LocationClueTextOne,
  LocationClueTextSix,
  LocationClueTextThree,
  LocationClueTextTwo
} from "../assets/prompts/LocationClue";
import Header from "../components/Header";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../components/Footer";

const LocationClue = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "decrypt") {
    return ( <DecryptBase changeLocalConfig={ changeLocalConfig }
                          localConfig={ localConfig } /> );
  } else {
    switch (localConfig["localReadingStage"]) {
      case "guessed":
        return ( <LocationClueTextSix changeStage={ changeStage } /> );
      case "five":
        return ( <LocationClueTextFive changeLocalConfig={ changeLocalConfig }
                                       curStage={ localConfig["localEncryptStage"] } /> );
      case "four":
        return ( <LocationClueTextFour changeLocalConfig={ changeLocalConfig }
                                       curStage={ localConfig["localEncryptStage"] }
                                       hasMovedOn={ localConfig["hasMovedOn"][1] } /> );
      case "three":
        return ( <LocationClueTextThree changeLocalConfig={ changeLocalConfig }
                                        curStage={ localConfig["localEncryptStage"] }
                                        hasMovedOn={ localConfig["hasMovedOn"][0] }
                                        hasReadEverything={ localConfig["hasReadEverything"] } /> );
      case "two":
        return ( <LocationClueTextTwo changeLocalConfig={ changeLocalConfig }
                                      curStage={ localConfig["localEncryptStage"] }
                                      hasReadEverything={ localConfig["hasReadEverything"] } /> );
      default:
        return ( <LocationClueTextOne changeLocalConfig={ changeLocalConfig }
                                      curStage={ localConfig["localEncryptStage"] }
                                      hasReadEverything={ localConfig["hasReadEverything"] } /> );
    }
  }
};

const DecryptBase = ({ localConfig, changeLocalConfig }) => {

  let Display = () => <DecryptPadlocks localConfig={ localConfig }
                                       changeLocalConfig={ changeLocalConfig } />;
  if (localConfig["localEncryptStage"] === "two") {
    Display = () => <DecryptWordle localConfig={ localConfig }
                                   changeLocalConfig={ changeLocalConfig } />;
  } else if (localConfig["localEncryptStage"] === "three") {
    Display = () => <DecryptFinalForm localConfig={ localConfig }
                                      changeLocalConfig={ changeLocalConfig } />;
  }

  return ( <>
    <Header />
    <Container className="clearfix"
               style={ { minHeight: "50vh", textAlign: "center" } }>
      <div style={ { textAlign: "left" } }>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localStage", "reading") }>
          <h3>Go Back to Text</h3>
        </Button>
      </div>
      <Display />
    </Container>
    <Footer />
  </> );
}

const DecryptPadlocks = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault();
    setError(false);

    if (event.target[0].value === localConfig["padlocks"][0] && event.target[1].value === localConfig["padlocks"][1]) {
      const hasMovedOn = localConfig["hasMovedOn"];
      hasMovedOn[0] = true;
      changeLocalConfig("hasMovedOn", hasMovedOn);
      changeLocalConfig("localReadingStage", "four");
      changeLocalConfig("localStage", "reading");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Container style={ { paddingTop: "5%" } }>
        <h1 style={ { paddingBottom: "3%" } }>LUGGAGE PADLOCKS</h1>

        { error &&
          <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>Whoops! It seems like you entered an incorrect
                                                                     Answer! Please try
                                                                     again.</h5> }

        <Form onSubmit={ checkAnswer }>
          <Row>
            <Col>
              <h5>Electric Blue Padlock:</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="blueLock">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Navy Padlock:</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="navyLock">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
          </Row>
          <Row style={ { paddingTop: "5%", paddingBottom: "5%" } }>
            <Col>
              <Button variant="danger"
                      type="submit">
                <h3>Attempt to Unlock</h3>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

const DecryptWordle = ({ localConfig, changeLocalConfig }) => ( <h1>WORDLE</h1> );

const DecryptFinalForm = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault();
    setError(false);

    if (event.target[0].value === localConfig["finalAnswer"]) {
      changeLocalConfig("localReadingStage", "guessed");
      changeLocalConfig("localStage", "reading");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Container style={ { paddingTop: "5%" } }>
        <h1 style={ { paddingBottom: "3%" } }>SECURE TRANSMISSION TERMINAL</h1>

        { error &&
          <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>Whoops! It seems like you entered an incorrect
                                                                     Answer! Please try
                                                                     again.</h5> }

        <Form onSubmit={ checkAnswer }>
          <Row>
            <Col>
              <h5>What Country is the Blacksite Located In?</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="country">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
          </Row>
          <Row style={ { paddingTop: "5%", paddingBottom: "5%" } }>
            <Col>
              <Button variant="danger"
                      type="submit">
                <h3>Transmit Findings</h3>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LocationClue;