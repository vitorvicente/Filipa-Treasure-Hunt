import React, { useEffect, useState } from "react";
import {
  OperativeClueHelperText,
  OperativeClueTextOne,
  OperativeClueTextThree,
  OperativeClueTextTwo
} from "../assets/prompts/OperativeClue";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../components/Loader";
import { populateHeader } from "../assets/data/LogicPuzzle";

const OperativeClue = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "decrypt") {
    return ( <DecryptBase changeLocalConfig={ changeLocalConfig }
                          localConfig={ localConfig } /> );
  } else {
    if (localConfig["localReadingStage"] === "guessed") {
      return ( <OperativeClueTextThree changeStage={ changeStage } /> )
    } else if (localConfig["localReadingStage"] === "two") {
      return ( <OperativeClueTextTwo changeLocalConfig={ changeLocalConfig }
                                     hasReadEverything={ localConfig["hasReadEverything"] } /> )
    } else {
      return ( <OperativeClueTextOne changeLocalConfig={ changeLocalConfig }
                                     hasReadEverything={ localConfig["hasReadEverything"] } /> )
    }
  }
};

const DecryptBase = ({ localConfig, changeLocalConfig }) => {

  let Display = () => <DecryptLogicPuzzle localConfig={ localConfig }
                                          changeLocalConfig={ changeLocalConfig } />;
  if (localConfig["localEncryptStage"] === "two") {
    Display = () => <DecryptCombinationForm localConfig={ localConfig }
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

const DecryptLogicPuzzle = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);

  //changeLocalConfig("board", LOGIC_PUZZLE_ALL);
  //changeLocalConfig("totalGuesses", 0);

  const checkAnswer = (event) => {
    event.preventDefault();
    setError(false);

    const id = event.target[0].value;
    const items = localConfig["board"];
    const item = items.find((item) => item["id"].toUpperCase() === id.toUpperCase());

    if (!item || !item["guesseable"] || item["status"]) {
      setError(true);
    } else {
      const index = items.indexOf(item);
      item["status"] = true;
      items[index] = item;


      item["alsoColor"].forEach((itmId) => {
        const itm = items.find((it) => it["id"].toUpperCase() === itmId.toUpperCase());
        const i = items.indexOf(itm);
        itm["status"] = true;
        items[i] = itm;
      });

      changeLocalConfig("totalGuesses", localConfig["totalGuesses"] + 1)
      changeLocalConfig("board", items);
    }
  }

  return (
    <>
      <Container style={ { paddingTop: "5%" } }>
        <h1>DECRYPT THE MESSAGE</h1>
        <h3 style={ { paddingTop: "3%" } }>Use the previous facts to deduce which VIP is being targeted by each
                                           Operative.</h3>

        { error &&
          <h5 style={ { paddingTop: "3%", fontStyle: "italic" } }> You have either selected an invalid cell, or a cell
                                                                   that is not a right
                                                                   match. </h5> }

        <GameBoard localConfig={ localConfig } />
        <Row>
          <Form onSubmit={ checkAnswer }>
            <Row>
              <Col>
                <h3 style={ { paddingBottom: "3%" } }>Enter Cell ID:</h3>
              </Col>
              <Col sm={ 8 }>
                <Form.Group style={ { paddingBottom: "3%" } }
                            className="mb-3"
                            controlId="formBasicAnswer">
                  <Form.Control type="text"
                                placeholder="..." />
                </Form.Group>
              </Col>
            </Row>
            <Row style={ { paddingBottom: "5%" } }>
              <Col>
                <Button variant="danger"
                        type="submit">
                  <h3>Check Answer</h3>
                </Button>
              </Col>
              { localConfig["totalGuesses"] >= 24 &&
                <Col>
                  <Button variant="danger"
                          onClick={ () => changeLocalConfig("localEncryptStage", "two") }>
                    <h3>Continue...</h3>
                  </Button>
                </Col>
              }
            </Row>
          </Form>
        </Row>
      </Container>
      <Container>
        <p><em><strong>HINT #1:</strong> A Cell's ID is the Character+Digit of the Column of the Cell, together with the
                                         Character+Digit of the Row. So to match Agent Centurion with Operative ID
                                         11000, you'd enter "X2B3".</em></p>
      </Container>
    </>
  );
}

const GameBoard = ({ localConfig }) => {
  const [ board ] = useState([ ...Array(12) ].map(x => Array(12).fill({})));
  const sideHeader = populateHeader();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    localConfig["board"].forEach((entry) => {
      board[entry["x"]][entry["y"]] = {
        id: entry["id"],
        color: entry["color"],
        status: entry["status"],
        guesseable: entry["guesseable"],
        alsoColor: entry["alsoColor"]
      }
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
          <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th colSpan={ 4 }>Operative</th>
            <th colSpan={ 4 }>Time of Strike</th>
            <th colSpan={ 4 }>Operative ID</th>
          </tr>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th>X1</th>
            <th>X2</th>
            <th>X3</th>
            <th>X4</th>
            <th>A1</th>
            <th>A2</th>
            <th>A3</th>
            <th>A4</th>
            <th>B1</th>
            <th>B2</th>
            <th>B3</th>
            <th>B4</th>
          </tr>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th style={ { writingMode: "vertical-lr" } }>The Prowling Cobra</th>
            <th style={ { writingMode: "vertical-lr" } }>Agent Centurion</th>
            <th style={ { writingMode: "vertical-lr" } }>Nighthawk</th>
            <th style={ { writingMode: "vertical-lr" } }>The Glass Witch</th>
            <th style={ { writingMode: "vertical-lr" } }>February 10th</th>
            <th style={ { writingMode: "vertical-lr" } }>February 28th</th>
            <th style={ { writingMode: "vertical-lr" } }>March 3rd</th>
            <th style={ { writingMode: "vertical-lr" } }>March 10th</th>
            <th style={ { writingMode: "vertical-lr" } }>101001</th>
            <th style={ { writingMode: "vertical-lr" } }>100100</th>
            <th style={ { writingMode: "vertical-lr" } }>11000</th>
            <th style={ { writingMode: "vertical-lr" } }>10001</th>
          </tr>
          </thead>
          <tbody>
          { board.map((rowEntry, index) => <TableRow key={ index }
                                                     rowData={ rowEntry }
                                                     sideHeader={ sideHeader[index] } />) }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

const TableRow = ({ rowData, sideHeader }) => {
  return (
    <tr
      style={ { height: "25px" } }
    >
      { sideHeader.hasOwnProperty("rowSpan") &&
        <th rowSpan={ sideHeader["rowSpan"] }
            style={ {
              writingMode: "vertical-lr",
              transform: "rotate(-180deg)",
              width: "10px"
            } }>{ sideHeader["main"] }</th> }
      <th style={ { width: "10px" } }>{ sideHeader["secondary"] }</th>
      <th style={ { width: "100px" } }>{ sideHeader["tertiary"] }</th>
      { rowData.map((entryData, index) => <TableEntry key={ index }
                                                      entryData={ entryData } />) }
    </tr>
  );
}

const TableEntry = ({ entryData }) => (
  <th style={ {
    background: entryData["status"] ? entryData["color"] : "#fff",
    width: "25px",
    height: "25px"
  } }> </th>
);

const DecryptCombinationForm = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault();
    setError(false);

    const keys = [
      [ "one", "operative" ],
      [ "one", "vip" ],
      [ "one", "date" ],
      [ "one", "id" ],
      [ "two", "operative" ],
      [ "two", "vip" ],
      [ "two", "date" ],
      [ "two", "id" ],
      [ "three", "operative" ],
      [ "three", "vip" ],
      [ "three", "date" ],
      [ "three", "id" ],
      [ "four", "operative" ],
      [ "four", "vip" ],
      [ "four", "date" ],
      [ "four", "id" ]
    ];

    let checker = true;
    for (let i = 0; i < 16; i++) {
      checker = checker &&
                ( event.target[i].value === localConfig["combinations"][`${ keys[i][0] }`][`${ keys[i][1] }`] );
    }

    if (checker) {
      changeLocalConfig("localEncryptStage", "three");
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
            </Col>
            <Col>
              <h5 style={ { paddingBottom: "5%" } }>Operative</h5>
            </Col>
            <Col>
              <h5 style={ { paddingBottom: "5%" } }>VIP</h5>
            </Col>
            <Col>
              <h5 style={ { paddingBottom: "5%" } }>Date</h5>
            </Col>
            <Col>
              <h5 style={ { paddingBottom: "5%" } }>Operative ID</h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Combination #1</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="operativeOne">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="vipOne">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="dateOne">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="idOne">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Combination #2</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="operativeTwo">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="vipTwo">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="dateTwo">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="idTwo">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Combination #3</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="operativeThree">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="vipThree">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="dateThree">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="idThree">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Combination #4</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="operativeFour">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="vipFour">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="dateFour">
                <Form.Control type="text"
                              placeholder="..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="idFour">
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
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localEncryptStage", "one") }>
                <h3>Back to Encryption</h3>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <p><em><strong>HINT #1:</strong> Order the Operatives by the Order they show up on the Board.</em></p>
        <p><em><strong>HINT #2:</strong> Values are Case Sensitive as they appear on the Board.</em></p>
      </Container>
    </>
  );
}

const DecryptFinalForm = ({ localConfig, changeLocalConfig }) => {
  const [ error, setError ] = useState(false);
  const [ show, setShow ] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault();
    setError(false);

    if (event.target[0].value.toUpperCase() === localConfig["finalAnswer"].toUpperCase()) {
      changeLocalConfig("localReadingStage", "guessed");
      changeLocalConfig("localStage", "reading")
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Container style={ { paddingTop: "5%" } }>
        <h1 style={ { paddingBottom: "3%" } }>SECURE TRANSMISSION TERMINAL</h1>

        <Modal
          show={ show }
          onHide={ () => setShow(false) }>
          <Modal.Header>
            <Modal.Title>Decrypted Data</Modal.Title>
          </Modal.Header>
          <Modal.Body style={ { overflowX: "auto" } }>
            <OperativeClueHelperText />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger"
                    onClick={ () => setShow(false) }>Close</Button>
          </Modal.Footer>
        </Modal>

        { error &&
          <h5 style={ { paddingBottom: "3%", fontStyle: "italic" } }>Whoops! It seems like you entered an incorrect
                                                                     Answer! Please try
                                                                     again.</h5> }

        <Form onSubmit={ checkAnswer }>
          <Row>
            <Col>
              <h5>What is the Name of the Operative Targeting you?</h5>
            </Col>
            <Col>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="operative">
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
            <Col>
              <Button variant="danger"
                      onClick={ () => setShow(true) }>
                <h3>Display Decrypted Data</h3>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <p><em><strong>HINT:</strong> There are a lot of hidden codes in the values you matched together. You may use
                                      google to your advantage.</em></p>
      </Container>
    </>
  );
}

export default OperativeClue;