import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import { Button, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Letter = styled(Container)`
    padding-top: 1%;
    padding-bottom: 1%;
    margin-bottom: 7%;
    max-width: 30%;
    background: #E0C9A6;
    font-family: Brush Script MT;
    border-radius: 5px;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
`;

export const VIPClueTextOne = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      It’s the hour of the wolf, the city is sound asleep, and you creep up the Stour with Darkness as your only
      friend… as you approach the west gate, you see a distant light, reacting quickly, you shelter in a hidden alcove,
      the car drives by without the people inside becoming any the wiser…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      As they drive on, you slowly come out of the darkness, you can see the house across the street now, Number 85,
      approaching it carefully, you find the door barred, not being dismayed, you reach into your pocket, and muttering,
      thank Q again for the mon blanc…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      A few twists, and you’re in, in front of you is an empty hallway, with stairs on one side and doors on the other.
      Making your way up the stairs, you head down a dark corridor, careful not to make any noise…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      At the very end you find it, Apartment 29. Not seeing any light coming through the door, you decide to go in…
      Inside the air is musky, the place is a mess, papers everywhere, the ashtray still has the smoldering remains of
      the evening's puff, you hear a distant snore coming from an adjacent room. Not wanting to waste any time, you get
      to work.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      Most of the papers are useless, bank statements, non-related communications, secret money movements, pieces of
      legal evidence from trials, countless notes left everywhere, one particular post note catches your eyes brown and
      worn, pinned on a Board, three words:
    </h5>
  </Container>
  <Letter>
    <h1> Love, Always,</h1>
    <h2 style={ { textIndent: "75%" } }> Ruby</h2>
  </Letter>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      { hasReadEverything && <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localStage", "decrypt") }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col> }
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "two") }>
          <h3>Next Page</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer/>
</> );

export const VIPClueTextTwo = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      As you stare at the note, you hear another snore, coming out of your daze, you continue your search. In one of the
      desk drawers, you find a small circular object, made up of overlapping paper circles, with numbers and letters,
      almost as if made to be some child's toy…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      As you turn it in your hands you hear a loud creek, your first thought was to the man sleeping in the other room,
      turning, you unholster your handgun, but no one is there, and you realize, it wasn’t the man, it was you, the
      floorboard under your right foot, it’s loose…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      Inside you find several documents, most of the information is redacted, but each of them has a number printed in
      bold at the top, they are clearly personnel files… “this must be it” you think to yourself.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      Grabbing all the files, you put the floorboard, back and silently make your way back outside.
    </h5>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      { hasReadEverything && <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localStage", "decrypt") }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col> }
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "one") }>
          <h3>Previous Page</h3>
        </Button>
      </Col>
      <Col>
        <Button variant="danger"
                onClick={ () => {
                  if (!hasReadEverything) {
                    changeLocalConfig("hasReadEverything", true)
                  }
                  changeLocalConfig("localReadingStage", "three")
                } }>
          <h3>Next Page</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer/>
</> );

export const VIPClueTextThree = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header/>

  <Container style={ { textAlign: "center" } }>
    <h1 style={ { textAlign: "left", paddingBottom: "7%" } }>THE NEXT DAY</h1>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      It’s now morning, sitting in your office, through your window you catch a glimpse of a bluejay between the
      branches of the trees, you can hear the voices of the people outside enjoying their day in the sun. Turning back
      to your desk, you shuffle through the documents…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      It’s been hours, and you’ve yet to make any sense of them, most of the lines are blacked out, of the 5 folders,
      three have been marked with <strong>DEALT WITH</strong>, one of the others says <strong>TRACED</strong> while the
      final one has no markings…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      Your eyes keep going back to those numbers - “those must be some code” - you think… but they seem nonsensical…
    </h5>
  </Container>

  <Container style={ { paddingBottom: "7%" } }>
    <Table>
      <thead>
      <tr>
        <th>CODE</th>
        <th>MARK</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>8814609936378136</th>
        <th>DEALT WITH</th>
      </tr>
      <tr>
        <th>60939698605195941484</th>
        <th>DEALT WITH</th>
      </tr>
      <tr>
        <th>1360028196673778981413</th>
        <th>DEALT WITH</th>
      </tr>
      <tr>
        <th>38609218967896818570</th>
        <th>TRACED</th>
      </tr>
      <tr>
        <th>04236246247423</th>
        <th>NONE</th>
      </tr>
      </tbody>
    </Table>
  </Container>

  <Container style={ { textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      You think back to the previous night, and that’s when it clicks, the circular object, those paper circles, that
      wasn't a toy, it was a cipher, and one you’ve seen… yes, but where…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      As you think back, a flash of a rainy, cold, and wet night in the jungle comes back to you, it was in your youth, by
      La Angostura, the army guys you were deployed to help had a similar object with them…
    </h5>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      { hasReadEverything && <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localStage", "decrypt") }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col> }
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "two") }>
          <h3>Previous Page</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer/>
</> );

export const VIPClueTextFour = ({ changeStage }) => ( <>
  <Header/>
  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      In terror, you realize that, the target is <strong>you</strong>.
    </h1>
    <Button variant="danger"
            onClick={ () => changeStage("three") }>
      <h3>Continue...</h3>
    </Button>
  </Container>
  <Footer/>
</> );


export const DateClueText = ({ changeLocalConfig, guessed, changeStage }) => ( <>
  <Header/>

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

  <Footer/>
</> );

export const StartingText = ({ changeStage, changeLocalConfig }) => ( <>
  <Header/>

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

  <Footer/>
</> );