import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Letter } from "../Styles";

const moveEncryptStage = (curStage, changeLocalConfig) => {
  switch (curStage) {
    case "one":
      changeLocalConfig("localEncryptStage", "two");
      break;
    case "two":
      changeLocalConfig("localEncryptStage", "three");
      break;
    default:
      changeLocalConfig("localEncryptStage", "one");
      break;
  }

  changeLocalConfig("localStage", "decrypt");
}

export const LocationClueTextOne = ({ changeLocalConfig, hasReadEverything, curStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1 style={ { textAlign: "left", paddingBottom: "5%" } }>A WEEK LATER</h1>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      It’s been almost a year since this mess started, since that faithful, cold, December afternoon when the Secretary
      first assigned you this mission. But you're almost there, you can feel it in your bones...
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      You've decrypted messages, broken into safe houses, hacked bank accounts, and sifted through mountains of
      intelligence documents. But you've managed to figure out most of the plot.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      You know that you're the target, that the attack will take place in February, that the true name of the Operative
      targeting you, Nighthawk, is Vitor Vicente. You've even figured out that he intends to stop over in Qatar before
      taking you onto the final blacksite...
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      But right now, all that seems useless, how are you supposed to know what the final destination is??? You're
      sitting at your desk, wishing you had more to work with...
    </h5>
    <h5 style={ { fontStyle: "italic" } }>
      That's when you get a call...
    </h5>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      { hasReadEverything && <Col>
        <Button variant="danger"
                onClick={ () => moveEncryptStage(curStage, changeLocalConfig) }>
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

  <Footer />
</> );

export const LocationClueTextTwo = ({ changeLocalConfig, hasReadEverything, curStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      The Secretary has finally managed to find Operative Nighthawk, he is currently at Heathrow Airport, waiting to
      board a flight to Lisbon. His intentions in visiting Portugal are still unknown to us at this time.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Nevertheless, Q has learnt that he has made a crucial mistake, he checked in 4 hours before his flight, and worst,
      he has checked two pieces of luggage. This could be your chance to finally get to the bottom of this mystery, but
      we only have a limited amount of time, if his luggage is not in Lisbon when he arrives, he might become suspicious.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      You need to get to Heathrow, and search his bags for anything that might be of use.
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "one") }>
          <h3>Previous Page</h3>
        </Button>
      </Col>
      { hasReadEverything && <Col>
        <Button variant="danger"
                onClick={ () => moveEncryptStage(curStage, changeLocalConfig) }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col> }
      <Col>
        <Button variant="danger"
                onClick={ () => {
                  changeLocalConfig("hasReadEverything", true);
                  changeLocalConfig("localReadingStage", "three");
                } }>
          <h3>Next Page</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer />
</> );

export const LocationClueTextThree = ({ changeLocalConfig, hasReadEverything, hasMovedOn, curStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      You grab your keys, holster your Baretta, and speed your way down to the Airport. There, you are met by an
      informant who gives you a spare pair of workers clothes, and leads you to where Nighthawk's bags are being held
      while awaiting the arrival of TAP's aircraft.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      In front of you are two huge bags, both about a meter tall, black, with blue outlines. One has a electric blue
      belt around it, the other one a similar, navy colored, belt. Both are locked by small 4 digit padlocks. Each with
      a matching color to the belt of the bag they lock.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      You bring out your kit, and your notepad, looking down at it you see, scribbled in your rushed, messy,
      handwriting: the codes Q had given you.
    </h5>


    <Letter>
      <h1> N: 0397</h1>
      <h1> E: 7350</h1>
    </Letter>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "two") }>
          <h3>Previous Page</h3>
        </Button>
      </Col>
      { hasReadEverything && <Col>
        <Button variant="danger"
                onClick={ () => moveEncryptStage(curStage, changeLocalConfig) }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col> }
      { hasMovedOn && <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "four") }>
          <h3>Next Page</h3>
        </Button>
      </Col> }
    </Row>
  </Container>

  <Footer />
</> );

export const LocationClueTextFour = ({ changeLocalConfig, hasMovedOn, curStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      Both locks come open, and you get to work.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      Most of the space in the bags is filled up with clothes. Although you do see a few curious items: Snorkeling Gear,
      a Straw Hat, and a full tube of SPF 100 Sunscreen. You also find cables, dongles, and other miscellaneous
      electronics, most of which are useless.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      Realizing you are running out of time, you begin to slowly, and carefully, putting everything back the way it was.
      And that is when a small smartphone drops out of one of the folded sweaters.
    </h5>
    <h5 style={ { fontStyle: "italic" } }>
      Finally, you think, as you reach for the phone. It's an old iPhone 3GS, it seems to still be working, so you plug
      it into your laptop, and start breaking through it's locks.
    </h5>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "three") }>
          <h3>Previous Page</h3>
        </Button>
      </Col>
      <Col>
        <Button variant="danger"
                onClick={ () => moveEncryptStage(curStage, changeLocalConfig) }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col>
      { hasMovedOn && <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "five") }>
          <h3>Next Page</h3>
        </Button>
      </Col> }
    </Row>
  </Container>

  <Footer />
</> );

export const LocationClueTextFive = ({ changeLocalConfig, curStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      Searching through the phone you quickly become frustrated, it has nothing in it. No apps besides the default ones
      that came with the phone, and even most of those are either uninstalled or disabled. It has no contacts, no
      messages, emails, photos, or documents.
    </h5>
    <h5 style={ { fontStyle: "italic", paddingBottom: "7%" } }>
      It's almost as if this phone had never been used, but then, why would he keep it wrapped up in a sweater, at the
      bottom of his luggage? That's when you notice, the phone's background, it's not the default Apple Background, it's
      a phrase:
    </h5>

    <h1 style={ { paddingBottom: "7%", fontStyle: "italic" } }>The Key is in the Keys</h1>

    <h5 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      For a bit you just sit there, trying to make sense of it, but then you hear it, a lound beeping sound. The
      conveyor belt is re-starting, your time is up. Quickly, you re-lock the phone, put it back in the sweater, place
      the sweater in the bag, and close it up.
    </h5>
    <h5 style={ { fontStyle: "italic" } }>
      Back in your car, you start thinking of what it could mean...
    </h5>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      <Col>
        <Button variant="danger"
                onClick={ () => changeLocalConfig("localReadingStage", "four") }>
          <h3>Previous Page</h3>
        </Button>
      </Col>
      <Col>
        <Button variant="danger"
                onClick={ () => moveEncryptStage(curStage, changeLocalConfig) }>
          <h3>Attempt to Decrypt</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer />
</> );

export const LocationClueTextSix = ({ changeStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Congratulations Agent, your lead was successful. Thanks to your discovery the British SAS have been able to find,
      and raid the blacksite. We've arrested two of the enemy Operatives, alongside with other members of their
      organization that were present.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Our agents abroad are moving in on the remaining agents as we speak. Their plan is thwarted, and the VIPs are
      safe. The Secretary appreciates your effort.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      We will soon contact you with your next assignment.
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Row>
      <Col>
        <Button variant="danger"
                onClick={ () => changeStage("details") }>
          <h3>Continue...</h3>
        </Button>
      </Col>
    </Row>
  </Container>

  <Footer />
</> );