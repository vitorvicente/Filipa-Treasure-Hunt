import React, { useState } from "react";

import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { FlightsClueTextOne, FlightsClueTextThree, FlightsClueTextTwo } from "../assets/prompts/FlightsClue";

import boe from "../assets/imgs/boe.png";


const FlightsClue = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "decrypt") {
    return ( <DecryptBase localConfig={ localConfig }
                          changeLocalConfig={ changeLocalConfig } /> );
  } else {
    if (localConfig["localReadingStage"] === "guessed") {
      return ( <FlightsClueTextThree changeStage={ changeStage } /> )
    } else {
      return ( <FlightsClueTextOne changeLocalConfig={ changeLocalConfig }
                                   accountId={ localConfig["login"]["account"] } /> )
    }
  }
};

const DecryptBase = ({ localConfig, changeLocalConfig }) => {
  let Display = () => <DecryptLoginForm localConfig={ localConfig }
                                        changeLocalConfig={ changeLocalConfig } />;
  if (localConfig["localEncryptStage"] === "two") {
    Display = () => <DecryptRecoverPassword localConfig={ localConfig }
                                            changeLocalConfig={ changeLocalConfig } />;
  } else if (localConfig["localEncryptStage"] === "three") {
    Display = () => <FlightsClueTextTwo changeLocalConfig={ changeLocalConfig }
                                        accountId={ localConfig["login"]["account"] } />;
  } else if (localConfig["localEncryptStage"] === "four") {
    Display = () => <DecryptSendInformation localConfig={ localConfig }
                                            changeLocalConfig={ changeLocalConfig } />;
  }

  return ( <>
    <Header />
    <Container style={ { minHeight: "50vh", textAlign: "center" } }>
      <div style={ { textAlign: "left" } }>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localStage", "reading") }>
          <h3>Go Back to Text</h3>
        </Button>
      </div>
      { localConfig["localEncryptStage"] !== "four" &&
        <>
          <Image src={ boe }
                 style={ { maxWidth: "250px", paddingBottom: "3%" } } />
          <h1> Bank of England </h1>
        </>
      }
      <Display />
    </Container>
    <Footer />
  </> );
}

const DecryptLoginForm = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);
  const [ tries, setTries ] = useState(0);

  const authenticate = (event) => {
    event.preventDefault();
    setError(false);

    if (event.target[0].value ===
        localConfig["login"]["account"] &&
        event.target[1].value.toUpperCase() ===
        localConfig["login"]["password"].toUpperCase()) {
      changeLocalConfig("localEncryptStage", "three");
    } else {
      setError(true);
      setTries(tries + 1);
    }
  }

  return (
    <Container style={ { paddingTop: "5%", paddingBottom: "5%" } }>
      { error && tries < 10 &&
        <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>Whoops! It seems like you entered the incorrect
                                                                   Password! Please try
                                                                   again.</h5> }

      { tries >= 10 &&
        <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>It seems like you have forgotten your password,
                                                                   please try resetting it. </h5> }

      <Form onSubmit={ authenticate }>
        <Form.Group style={ { paddingBottom: "3%" } }
                    className="mb-3"
                    controlId="formBasicAccountId">
          <Row style={ { maxWidth: "50%", margin: "0 auto" } }>
            <Col>
              <Form.Label><h3>Account ID</h3></Form.Label>
            </Col>
            <Col>
              <Form.Control type="text"
                            placeholder="Account Id" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group style={ { paddingBottom: "3%" } }
                    className="mb-3"
                    controlId="formBasicPassword">
          <Row style={ { maxWidth: "50%", margin: "0 auto" } }>
            <Col>
              <Form.Label><h3>Password</h3></Form.Label>
            </Col>
            <Col>
              <Form.Control type="password"
                            placeholder="Password" />
            </Col>
          </Row>
        </Form.Group>
        <Row style={ { maxWidth: "80%", margin: "0 auto" } }>
          <Col>
            <Button variant="danger"
                    type="submit">
              <h3>Authenticate</h3>
            </Button>
          </Col>
          <Col>
            <Button variant="danger"
                    onClick={ () => changeLocalConfig("localEncryptStage", "two") }>
              <h3>Forgot Password</h3>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const DecryptRecoverPassword = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);

  const authenticate = (event) => {
    event.preventDefault();
    setError(false);

    if (event.target[0].value.toUpperCase() ===
        localConfig["questions"]["q1"].toUpperCase() &&
        event.target[1].value.toUpperCase() ===
        localConfig["questions"]["q2"].toUpperCase() &&
        event.target[2].value.toUpperCase() ===
        localConfig["questions"]["q3"].toUpperCase()) {
      changeLocalConfig("localEncryptStage", "three");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Container style={ { paddingTop: "5%", paddingBottom: "5%" } }>
        { error &&
          <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>Whoops! It seems like you entered an incorrect
                                                                     Answer! Please try
                                                                     again.</h5> }

        <Form onSubmit={ authenticate }>
          <Form.Group style={ { paddingBottom: "3%" } }
                      className="mb-3"
                      controlId="formBasicQOne">
            <Form.Label><h3>Where did we use to grab lunch before Fulbright?</h3></Form.Label>
            <Form.Control type="text"
                          placeholder="....." />
          </Form.Group>
          <Form.Group style={ { paddingBottom: "3%" } }
                      className="mb-3"
                      controlId="formBasicQTwo">
            <Form.Label><h3>Which Boston Museum had not so good art, but an amazing view?</h3></Form.Label>
            <Form.Control type="text"
                          placeholder="....." />
          </Form.Group>
          <Form.Group style={ { paddingBottom: "3%" } }
                      className="mb-3"
                      controlId="formBasicQThree">
            <Form.Label><h3>Where did we have a nice dinner together in the UK, and you got an Espresso Martini?</h3>
            </Form.Label>
            <Form.Control type="text"
                          placeholder="....." />
          </Form.Group>
          <Row style={ { maxWidth: "80%", margin: "0 auto" } }>
            <Col>
              <Button variant="danger"
                      type="submit">
                <h3>Authenticate</h3>
              </Button>
            </Col>
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localEncryptStage", "one") }>
                <h3>Back to Login</h3>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <p><em><strong>HINT:</strong> If absolutely needed, you may use Google.</em></p>
      </Container>
    </>
  );
};

const DecryptSendInformation = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);

  const authenticate = (event) => {
    event.preventDefault();
    setError(false);

    if (event.target[0].value.toUpperCase() ===
        localConfig["finalDestination"].toUpperCase()) {
      changeLocalConfig("localReadingStage", "guessed");
      changeLocalConfig("localStage", "reading")
    } else {
      setError(true);
    }
  }

  return (
    <Container style={ { paddingBottom: "5%" } }>
      <h1 style={ { paddingBottom: "5%" } }>SECURE TRANSMISSION TERMINAL</h1>

      { error &&
        <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>Whoops! It seems like you entered an incorrect
                                                                   Answer! Please try
                                                                   again.</h5> }

      <Form onSubmit={ authenticate }>
        <Form.Group style={ { paddingBottom: "3%" } }
                    className="mb-3"
                    controlId="formBasicQOne">
          <Form.Label><h3>Where are they taking the VIP next?</h3></Form.Label>
          <Form.Control type="text"
                        placeholder="....." />
        </Form.Group>
        <Row style={ { maxWidth: "80%", margin: "0 auto" } }>
          <Col>
            <Button variant="danger"
                    type="submit">
              <h3>Transmit Information</h3>
            </Button>
          </Col>
          <Col>
            <Button variant="danger"
                    onClick={ () => changeLocalConfig("localEncryptStage", "three") }>
              <h3>Back to Bank Statement</h3>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FlightsClue;