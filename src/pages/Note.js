import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";

const Note = ({ localConfig, changeLocalConfig }) => {

  let Display = () => <PageOne changeLocalConfig={ changeLocalConfig } />;
  if (localConfig["localStage"] === "two") {
    Display = () => <PageTwo changeLocalConfig={ changeLocalConfig } />;
  } else if (localConfig["localStage"] === "end") {
    Display = () => <End />;
  }

  return (
    <>
      <Header />

      <Display />

      <Footer />
    </>
  );
};

const PageOne = ({ changeLocalConfig }) => (
  <>
    <Container style={ { minHeight: "50vh", paddingBottom: "5%" } }>
      <h1><strong><em> TEMP TITLE </em></strong></h1>
      <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
        TEMP TEXT
      </h3>
    </Container>

    <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
      <Row>
        <Col>
          <Button variant="danger"
                  onClick={ () => changeLocalConfig("localStage", "two") }>
            <h3>Next Page</h3>
          </Button>
        </Col>
      </Row>
    </Container>
  </>
);

const PageTwo = ({ changeLocalConfig }) => (
  <>
    <Container style={ { minHeight: "50vh", paddingBottom: "5%" } }>
      <h1><strong><em> TEMP TITLE </em></strong></h1>
      <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
        TEMP TEXT
      </h3>
    </Container>

    <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
      <Row>
        <Col>
          <Button variant="danger"
                  onClick={ () => changeLocalConfig("localStage", "one") }>
            <h3>Previous Page</h3>
          </Button>
        </Col>
        <Col>
          <Button variant="danger"
                  onClick={ () => changeLocalConfig("localStage", "end") }>
            <h3>Continue...</h3>
          </Button>
        </Col>
      </Row>
    </Container>
  </>
);

const End = () => (
  <Container style={ { minHeight: "50vh", lineHeight: "50vh", paddingBottom: "5%", textAlign: "center" } }>
    <h1 style={ { fontSize: "100px", verticalAlign: "center", display: "inline-block", lineHeight: "normal" } }>
      <strong><em> The End... </em></strong>
    </h1>
  </Container>
);

export default Note;