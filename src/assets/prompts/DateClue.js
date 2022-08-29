import React from "react";

import { Button, Container } from "react-bootstrap";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


export const DateClueText = ({ changeLocalConfig, guessed, changeStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    { guessed && <h1 style={ { paddingBottom: "5%" } }>!!!MESSAGED DECRYPTED!!!</h1> }
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
    { guessed
      ?
      <h3 style={ { paddingTop: "1%" } }>
        <strong>UNKNOWN:</strong> Yes, on the Ides of Solmonath.
      </h3>
      :
      <h3 style={ { paddingTop: "1%" } }>
        <strong>UNKNOWN:</strong> Yes, on the **** ** *********.
      </h3>
    }

  </Container>
  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    { guessed
      ?
      <Button variant="danger"
              onClick={ () => changeStage("two") }>
        <h3>Move to Next Stage</h3>
      </Button>
      :
      <Button variant="danger"
              onClick={ () => changeLocalConfig("localStage", "decrypt") }>
        <h3>Decrypt</h3>
      </Button>
    }
  </Container>

  <Footer />
</> );