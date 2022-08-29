import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Table } from "react-bootstrap";
import Footer from "../../components/Footer";
import React from "react";
import { Card, CardTwo } from "../Styles";

export const OperativeClueTextOne = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      You’ve been at this for almost 50 hours, your desk is littered with documentation, receipts, call logs, hacked
      records, and every other piece of information that Q, the Secretary, and you have managed to get your hands on.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      The exhaustion is getting to you, but you can’t quit now, you’re so close, you look back at your notes: you’ve
      found records of <strong>4 different Operatives</strong>:
    </h5>
    <Card>
      <h4>Agent Centurion</h4>
      <h4>The Prowling Cobra</h4>
      <h4>Nighthawk</h4>
      <h4>The Glass Witch</h4>
    </Card>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      You’ve figured out that each of these Operatives is currently making arrangements to make their moves on their
      specific VIPs, on a specific date. Furthermore, you’ve managed to decipher enough communications to figure out
      that each of them is identified by a specific Agent ID by their Shadow Organization.
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
                onClick={ () => {
                  if (!hasReadEverything) {
                    changeLocalConfig("hasReadEverything", true)
                  }
                  changeLocalConfig("localReadingStage", "two")
                } }>
          <h3>Next Page</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer />
</> );

export const OperativeClueTextTwo = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      You’ve already informed the other members of your team about this discovery, but the other Agents are too busy to
      attempt to decipher who is whose target… So it’s up to you to figure it out and transmit the information back to
      the Secretary. Yet part of you can’t seem to forget that you yourself are somewhere on that list of VIPs…
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      Most of what you have is useless, but you’ve managed to compile a small list of undoubtable facts that Q has
      corroborated and confirmed based on the Secretary’s own records:
    </h5>
    <CardTwo>
      <h5>
        Facts:
      </h5>
      <h6>
        <ol>
          <li style={ { paddingBottom: "2%" } }>
            Agent Centurion is not known as Operative 11000, since Operative 11000 is set to start his Operation on the
            28th.
          </li>
          <li style={ { paddingBottom: "2%" } }>
            The Glass Witch is also known as Operative 100100, and will likely strike on the 3rd.
          </li>
          <li style={ { paddingBottom: "2%" } }>
            81211501148459477456’s routine leaves him the most vulnerable at the beginning of March.
          </li>
          <li style={ { paddingBottom: "2%" } }>
            Operative 10001, The Nighthawk, is expected to make their move on the 10th of February.
          </li>
          <li style={ { paddingBottom: "2%" } }>
            It’s expected that 38609218967896818570 will leave the country on February 25th, while 58449550188153273562
            is
            expected to return to the UK a week later.
          </li>
        </ol>
      </h6>
    </CardTwo>
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
    </Row>
  </Container>

  <Footer />
</> );

export const OperativeClueTextThree = ({ changeStage }) => ( <>
  <Header />
  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Good work on parsing through those documents and decrypting their information. Thanks to you, our agents now know
      where, and who, will target each VIP. This will allow us to be better prepared for when the time comes.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Furthermore, we now have almost all the information regarding the coming attack on you, the only thing left to
      discover is where the final Blacksite is located. Although we're officially on a time crunch, the Secretary trusts
      that you'll be able to figure it out before it's too late...
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeStage("review") }>
      <h3>Continue...</h3>
    </Button>
  </Container>
  <Footer />
</> );

export const OperativeClueHelperText = () => (
  <Table>
    <thead>
    <tr>
      <th>Operative</th>
      <th>VIP</th>
      <th>Date</th>
      <th>ID</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th>The Prowling Cobra</th>
      <th>4378987829331356</th>
      <th>February 28th</th>
      <th>11000</th>
    </tr>
    <tr>
      <th>Agent Centurion</th>
      <th>58449550188153273562</th>
      <th>March 12th</th>
      <th>101001</th>
    </tr>
    <tr>
      <th>Nighthawk</th>
      <th>38609218967896818570</th>
      <th>February 10th</th>
      <th>10001</th>
    </tr>
    <tr>
      <th>The Glass Witch</th>
      <th>81211501148459477456</th>
      <th>March 3rd</th>
      <th>100100</th>
    </tr>
    </tbody>
  </Table>
);