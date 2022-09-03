import React, { useEffect, useState } from "react";
import {
  LocationClueTextFive,
  LocationClueTextFour,
  LocationClueTextOne,
  LocationClueTextSix,
  LocationClueTextThree,
  LocationClueTextTwo
} from "../assets/prompts/LocationClue";
import Header from "../components/Header";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const LocationClue = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["locked"]) {
    return (
      <>
        <Header />

        <Container style={ { minHeight: "50vh", textAlign: "center" } }>
          <h1> This page is blocked </h1>
          <h3 style={ { paddingTop: "5%", paddingBottom: "5%" } }> The Final Clue must be solved together. </h3>
        </Container>

        <Footer />
      </>
    );
  }

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

const DecryptWordle = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);
  const [ checking, setChecking ] = useState(false);
  const [ alreadyWon, setAlreadyWon ] = useState(false);

  //changeLocalConfig("wordle", WORDLE);

  const checkAnswer = (event) => {
    event.preventDefault();
    setChecking(true);
    setError(false);
    setAlreadyWon(false);

    if (localConfig["wordle"]["won"]) {
      setAlreadyWon(true);
      return;
    }

    const enteredAnswer = [ ...Array(5) ]
    enteredAnswer.forEach((value, index) => enteredAnswer[index] = {
      value: event.target[index].value,
      matchIndex: -1
    });

    let mistake = enteredAnswer.indexOf("") !== -1 || enteredAnswer.indexOf(" ") !== -1;

    enteredAnswer.forEach((item) => {
      mistake = mistake || item.length > 1;
    });

    if (mistake) {
      setError(true);
      return;
    }

    const wordle = localConfig["wordle"];
    const index = wordle["iteration"];
    const board = wordle["board"];
    let won = true;

    enteredAnswer.forEach((val, ind) => {
      const cell = board.find((c) => c["x"] === index && c["y"] === ind);
      cell["value"] = val["value"].toUpperCase();
      const answers = wordle["finalAnswer"].filter((v) => val["value"].toUpperCase() === v["value"].toUpperCase());

      let matches = false;
      if (!!answers) {
        answers.forEach((option) => {
          if (option["x"] === ind) {
            enteredAnswer[ind]["matchIndex"] = option["x"];
            option["guessed"] = true;
            matches = true;
          } else if (!option["guessed"] && ( enteredAnswer[ind]["matchIndex"] === -1 )) {
            enteredAnswer[ind]["matchIndex"] = option["x"];
            option["guessed"] = true;
          }
        });
      }

      cell["color"] = (
        matches ? wordle["correctPlaceColor"] : (
          ( enteredAnswer[ind]["matchIndex"] !== -1 ) ? wordle["correctLetterColor"] : wordle["notFoundColor"]
        )
      );

      won = won && matches;
    });

    wordle["finalAnswer"].forEach((option) => option["guessed"] = false);


    for (let cursor = index + 1; cursor < 6 && won; cursor++) {
      enteredAnswer.forEach((val, ind) => {
        const cell = board.find((c) => c["x"] === cursor && c["y"] === ind);
        cell["color"] = wordle["notFoundColor"];
      });
    }

    wordle["iteration"] = index + 1;
    wordle["won"] = won;

    setChecking(false);
    changeLocalConfig("wordle", wordle);
  };

  return (
    <>
      <Container style={ { paddingTop: "5%" } }>
        <h1>HACK THE DEVICE</h1>

        { alreadyWon &&
          <h5 style={ { paddingTop: "3%", fontStyle: "italic" } }> You already won! Click Continue to continue!</h5> }

        { error &&
          <h5 style={ { paddingTop: "3%", fontStyle: "italic" } }> Please fill all available spots with a Single
                                                                   Letter! </h5> }

        <GameBoard localConfig={ localConfig } />
        <Row>
          <Form onSubmit={ checkAnswer }>
            <Row style={ { paddingBottom: "5%" } }>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="answerOne">
                  <Form.Control type="text"
                                placeholder="..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="answerTwo">
                  <Form.Control type="text"
                                placeholder="..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="answerThree">
                  <Form.Control type="text"
                                placeholder="..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="answerFour">
                  <Form.Control type="text"
                                placeholder="..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="answerFive">
                  <Form.Control type="text"
                                placeholder="..." />
                </Form.Group>
              </Col>
            </Row>
            <Row style={ { paddingBottom: "5%" } }>
              <Col>
                <Button variant="danger"
                        disabled={ checking }
                        type="submit">
                  <h3>Check Answer</h3>
                </Button>
              </Col>
              {
                localConfig["wordle"]["won"] &&
                <Col>
                  <Button variant="danger"
                          onClick={ () => {
                            const hasMovedOn = localConfig["hasMovedOn"];
                            hasMovedOn[1] = true;
                            changeLocalConfig("hasMovedOn", hasMovedOn);
                            changeLocalConfig("localReadingStage", "five");
                            changeLocalConfig("localStage", "reading");
                          } }>
                    <h3>Continue...</h3>
                  </Button>
                </Col>
              }
            </Row>
          </Form>
        </Row>
      </Container>

      <Container>
        <p><em><strong>HINT:</strong> You're playing Wordle. </em></p>
      </Container>
    </>
  );
};

const GameBoard = ({ localConfig }) => {
  const [ board ] = useState([ ...Array(6) ].map(x => Array(5).fill({})));
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    localConfig["wordle"]["board"].forEach((entry) => {
      board[entry["x"]][entry["y"]] = {
        value: entry["value"],
        color: entry["color"]
      };
    })

    setLoading(false)
  }, [ board, localConfig ]);

  if (loading) {
    return ( <Loader opacity={ 100 } /> )
  }

  return (
    <Row style={ { paddingBottom: "3%", paddingTop: "3%" } }>
      <Col>
        <Table bordered
               style={ { textAlign: "center" } }>
          <tbody>
          { board.map((rowEntry, index) => <TableRow key={ index }
                                                     rowData={ rowEntry } />) }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

const TableRow = ({ rowData }) => (
  <tr
    style={ { height: "25px" } }
  >
    { rowData.map((entryData, index) => <TableEntry key={ index }
                                                    entryData={ entryData } />) }
  </tr>
);

const TableEntry = ({ entryData }) => (
  <th style={ {
    background: entryData["color"],
    width: "25px",
    height: "25px"
  } }> { entryData["value"] } </th>
);

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