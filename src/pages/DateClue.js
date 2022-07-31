import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { withFirebase } from "vtr-react-components/dist/Firebase";
import React from "react";
import { Button } from "react-bootstrap";

const DateClueBase = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "decrypt") {
    return ( <Decryption changeLocalConfig={ changeLocalConfig }/> )
  } else {
    return ( <ClueMonologue changeLocalConfig={ changeLocalConfig }/> )
  }
};

const Decryption = ({ changeLocalConfig }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh" } }>
    <h1>DECRYPT THE MESSAGE</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      TEMP
    </h3>
  </Container>
  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localStage", "reading") }>
      <h3>Go Back to Prompt</h3>
    </Button>
  </Container>

  <Footer/>
</> );

const ClueMonologue = ({ changeLocalConfig }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      The Secretary has been able to intercept the following message from an unknown associate to Operative 10001:
    </h3>
    <h3 style={ { paddingTop: "5%" } }>
      <strong>10001:</strong> Is it done?
    </h3>
    <h3 style={ { paddingTop: "1%" } }>
      <strong>UNKNOWN:</strong> It’s all as you said…
    </h3>
    <h3 style={ { paddingTop: "1%" } }>
      <strong>10001:</strong> So it’ll be ready in time?
    </h3>
    <h3 style={ { paddingTop: "1%" } }>
      <strong>UNKNOWN:</strong> Yes, on the **** ** *********.
    </h3>
  </Container>
  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localStage", "decrypt") }>
      <h3>Decrypt</h3>
    </Button>
  </Container>

  <Footer/>
</> );


const DateClue = withFirebase(DateClueBase);

export default DateClue;