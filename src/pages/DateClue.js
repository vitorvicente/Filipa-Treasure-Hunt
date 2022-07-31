import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { withFirebase } from "vtr-react-components/dist/Firebase";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { DateClueText } from "../components/Communications";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Loader from "../components/Loader";

const DateClueBase = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "decrypt") {
    return ( <Decryption localConfig={ localConfig }
                         changeLocalConfig={ changeLocalConfig }
                         changeStage={ changeStage }/> )
  } else if (localConfig["localStage"] === "guessed") {
    return ( <DateClueText changeStage={ changeStage } guessed={true} />)
  } else {
    return ( <DateClueText changeLocalConfig={ changeLocalConfig } guessed={false} /> )
  }
};

const Decryption = ({ localConfig, changeLocalConfig }) => {
  const [ answer, setAnswer ] = useState("");
  const [ error, setError ] = useState(false);
  const [ cantFinish, setCantFinish ] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault();
    setError(false);
    setCantFinish(false);
    const words = localConfig["words"];
    const responseItem = words.find((item) => item["word"].toLowerCase() === answer.toLowerCase());

    if (!!responseItem) {
      if (answer.toUpperCase() === localConfig["finalResponse"].toUpperCase()) {

        const unfinished = words.find((item) => !item["status"]);

        if (!!unfinished && unfinished["tipNumber"] !== 18) {
          console.log(unfinished)
          setCantFinish(true);
        } else {
          const index = words.indexOf(responseItem);
          responseItem["status"] = true;
          words[index] = responseItem;

          changeLocalConfig("words", words);
          changeLocalConfig("localStage", "guessed")
        }
      } else {
        const index = words.indexOf(responseItem);
        responseItem["status"] = true;
        words[index] = responseItem;

        changeLocalConfig("words", words);
      }
    } else {
      setError(true);
    }
  }

  return ( <>
    <Header/>

    <Container style={ { minHeight: "50vh" } }>
      <h1>DECRYPT THE MESSAGE</h1>
      <h3 style={ { paddingTop: "3%" } }>If all the words you can find, then in the remainder you will find your
        key...</h3>

      { error && <h5 style={ { paddingTop: "3%" } }> Incorrect answer! </h5> }
      { cantFinish && <h5 style={ { paddingTop: "3%" } }> Nice try! But you need to guess them all :) </h5> }

      <GameBoard localConfig={ localConfig }/>
      <Row>
        <Form onSubmit={ checkAnswer }>
          <Row>
            <Col>
              <h3 style={ { paddingBottom: "5%" } }>Enter Answer:</h3>
            </Col>
            <Col sm={ 8 }>
              <Form.Group style={ { paddingBottom: "3%" } }
                          className="mb-3"
                          controlId="formBasicAnswer">
                <Form.Control type="text"
                              placeholder="Answer..."
                              defaultValue={ answer }
                              onChange={ (event) => setAnswer(event.target.value) }/>
              </Form.Group>
            </Col>
          </Row>
          <Row style={ { paddingTop: "5%", paddingBottom: "5%" } }>
            <Col>
              <Button variant="danger"
                      type="submit">
                <h3>Check Answer</h3>
              </Button>
            </Col>
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localStage", "reading") }>
                <h3>Go Back to Prompt</h3>
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>

    <Footer/>
  </> );
}

const GameBoard = ({ localConfig }) => {
  const [ board ] = useState([ ...Array(9) ].map(x => Array(12).fill({})));
  const [ tips ] = useState([ [], [] ])
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    localConfig["words"].forEach((word) => {
      word["letters"].forEach((letter) => {
        board[letter["y"]][letter["x"]] = {
          status: word["status"],
          color: word["color"],
          textColor: word["textColor"],
          textTransform: word["textTransform"],
          letter: letter["letter"].toUpperCase()
        };
      });
    });

    localConfig["words"].forEach((word) => {
      const index = ( ( word["tipNumber"] % 2 ) + 1 ) % 2;
      tips[index].push({
                         tipNumber: word["tipNumber"],
                         tip: word["tip"],
                         status: word["status"]
                       });
    });
    setLoading(false)
  }, [ board, tips, localConfig ]);

  if (loading) {
    return ( <Loader opacity={ 100 }/> )
  }

  return (
    <Row style={ { paddingBottom: "5%", paddingTop: "5%" } }>
      <Col>
        <Table bordered
               style={ { textAlign: "center" } }>
          <tbody>
          { board.map((rowEntry, index) => <TableRow key={ index }
                                                     rowData={ rowEntry }/>) }
          </tbody>
        </Table>
      </Col>
      { tips.map((colData, index) => <TipCol colData={ colData }
                                             key={ index }/>) }
    </Row>
  );
};

const TipCol = ({ colData }) => (
  <Col>
    { colData.map((entryData, index) => (
      <p key={ index }
         style={ { textDecoration: entryData["status"] ? "line-through" : "none" } }><strong>Tip
        # { entryData["tipNumber"] }</strong> { entryData["tip"] }</p> )) }
  </Col>
);

const TableRow = ({ rowData }) => (
  <tr>
    { rowData.map((entryData, index) => <TableEntry key={ index }
                                                    entryData={ entryData }/>) }
  </tr>
);

const TableEntry = ({ entryData }) => (
  <th style={ {
    background: entryData["status"] ? entryData["color"] : "#fff",
    color: entryData["status"] ? entryData["textColor"] : "#111",
    textTransform: entryData["status"] ? entryData["textTransform"] : "none"
  } }>{ entryData["letter"] }</th>
);


const DateClue = withFirebase(DateClueBase);

export default DateClue;