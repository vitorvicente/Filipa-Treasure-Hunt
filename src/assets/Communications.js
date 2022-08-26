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
const Card = styled(Container)`
    padding: 2% 2% 2% 2%;
    margin-bottom: 7%;
    max-width: 40%;
    background: #E0C9A6;
    border-radius: 5px;
    font-style: italic;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
`;
const CardTwo = styled(Container)`
    text-align: left;
    padding: 2% 2% 2% 2%;
    margin-bottom: 7%;
    max-width: 90%;
    background: #E0C9A6;
    border-radius: 5px;
    font-style: italic;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
`;

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
    <h3 style={ { textIndent: "10%", paddingTop: "5%"} }>
      Furthermore, we now have almost all the information regarding the coming attack on you, the only thing left to discover is
      where the final Blacksite is located. Although we're officially on a time crunch, the Secretary trusts that you'll be able to figure
      it out before it's too late...
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeStage("finale") }>
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

export const FlightsClueTextOne = ({ changeLocalConfig, accountId }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Q has gone through all the documents you obtained during your last raid. Sad to say, he confirmed your prior
      discovery, it seems that you are the target. Yet not all is bad, Q has also been able to find another piece of
      information that might be useful, one of the folders includes references to a bank account with the Bank of
      England, with account ID <strong>{ accountId }</strong>.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      We believe this account has been used to arrange transportation for the enemy Operative and their team. However,
      we have, so far, been unable to hack our way into the account. So we leave this task to you.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      After accessing the account you should look for any suspicious activity that might point to any travel
      arrangements made.
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localStage", "decrypt") }>
      <h3>Hack Account</h3>
    </Button>
  </Container>

  <Footer />
</> );

export const FlightsClueTextTwo = ({ changeLocalConfig, accountId }) => ( <>
  <Container style={ { minHeight: "50vh", textAlign: "left", } }>
    <h2 style={ { fontWeight: "bold", paddingBottom: "2%" } }>Account { accountId }</h2>
    <h3 style={ { fontStyle: "italic" } }>Transactions</h3>
    <Table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th> </th>
        <th>Value ($)</th>
        <th>Balance ($)</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th> 2022-07-19</th>
        <th colSpan={ 2 }> Q**** *******: QR **</th>
        <th> -2685</th>
        <th> 991475</th>
      </tr>
      <tr>
        <th> 2022-07-07</th>
        <th colSpan={ 2 }> S**** National ****: A10314</th>
        <th> 4310</th>
        <th> 994160</th>
      </tr>
      <tr>
        <th> 2022-07-03</th>
        <th colSpan={ 2 }> **********</th>
        <th> 9199</th>
        <th> 989850</th>
      </tr>
      <tr>
        <th> 2022-06-26</th>
        <th colSpan={ 2 }> Click & **at</th>
        <th> -9299</th>
        <th> 980651</th>
      </tr>
      <tr>
        <th> 2022-05-28</th>
        <th colSpan={ 2 }> ATM</th>
        <th> -1789</th>
        <th> 989950</th>
      </tr>
      <tr>
        <th> 2022-05-02</th>
        <th colSpan={ 2 }> Q**** *******: QR 2</th>
        <th> -1476</th>
        <th> 991739</th>
      </tr>
      <tr>
        <th> 2022-04-21</th>
        <th colSpan={ 2 }> Paypal: R281209</th>
        <th> 1332</th>
        <th> 993215</th>
      </tr>
      <tr>
        <th> 2022-04-08</th>
        <th colSpan={ 2 }> BoC: Y381941</th>
        <th> 4381</th>
        <th> 991883</th>
      </tr>
      <tr>
        <th> 2022-03-31</th>
        <th colSpan={ 2 }> Dividends</th>
        <th> 834</th>
        <th> 987502</th>
      </tr>
      <tr>
        <th> 2022-03-20</th>
        <th colSpan={ 2 }> BDS: U3123628</th>
        <th> 4267</th>
        <th> 986668</th>
      </tr>
      <tr>
        <th> 2022-02-16</th>
        <th colSpan={ 2 }> Atlas Hel********</th>
        <th> -7780</th>
        <th> 982401</th>
      </tr>
      <tr>
        <th> 2022-02-09</th>
        <th colSpan={ 2 }> **********</th>
        <th> -3738</th>
        <th> 990181</th>
      </tr>
      <tr>
        <th> 2022-01-07</th>
        <th colSpan={ 2 }> Europ*** UK</th>
        <th> -4176</th>
        <th> 993919</th>
      </tr>
      <tr>
        <th> 2022-01-02</th>
        <th colSpan={ 2 }> Swiss Credit: X892146</th>
        <th> 9521</th>
        <th> 998095</th>
      </tr>
      <tr>
        <th> 2021-12-21</th>
        <th colSpan={ 2 }> Amazon.com Inc.</th>
        <th> -4266</th>
        <th> 988574</th>
      </tr>
      <tr>
        <th> 2021-11-23</th>
        <th colSpan={ 2 }> Blacks Cantebury</th>
        <th> -6413</th>
        <th> 992840</th>
      </tr>
      <tr>
        <th> 2021-11-15</th>
        <th colSpan={ 2 }> B**: 1241234052</th>
        <th> 2782</th>
        <th> 999253</th>
      </tr>
      <tr>
        <th> 2021-09-30</th>
        <th colSpan={ 2 }> **********</th>
        <th> 1312</th>
        <th> 996471</th>
      </tr>
      <tr>
        <th> 2021-09-20</th>
        <th colSpan={ 2 }> Canterbury Mot***** Wo***</th>
        <th> -5063</th>
        <th> 995159</th>
      </tr>
      <tr>
        <th> 2021-08-26</th>
        <th colSpan={ 2 }> Dividends</th>
        <th> 222</th>
        <th> 1000222</th>
      </tr>
      </tbody>
    </Table>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localEncryptStage", "four") }>
      <h3>Transmit Information</h3>
    </Button>
  </Container>

  <Container>
    <p><em><strong>HINT:</strong> Read the Entries carefully, you may use Google to your advantage.</em></p>
  </Container>
  <Container>
    <p>
      <em>
        <strong>Legal Waiver:</strong> All but two of the entries on this table are false and
                                       have no connection to real life. The same applies to <strong>all</strong> values
                                       and balances.
      </em>
    </p>
  </Container>
</> );

export const FlightsClueTextThree = ({ changeStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      The Secretary has received your transmission, it is clear that the foe intends to use Qatar Airways as their
      choice of carrier, yet both Q and the other intelligence specialists doubt that Qatar is their true final
      destination, as the country has too many connections with the West.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Qatar Airways flies to over 160 destinations as of August 2022, Q and his team are hard at work trying to figure
      out which of these is the actual location of the blacksite. With that said, the Secretary Leadership believes you
      should re-focus your efforts into determining who the enemy Operative is.
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeStage("four") }>
      <h3>Continue...</h3>
    </Button>
  </Container>

  <Footer />
</> );

export const VIPClueTextOne = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header />

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

  <Footer />
</> );

export const VIPClueTextTwo = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header />

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

  <Footer />
</> );

export const VIPClueTextThree = ({ changeLocalConfig, hasReadEverything }) => ( <>
  <Header />

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
      As you think back, a flash of a rainy, cold, and wet night in the jungle comes back to you, it was in your youth,
      by
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

  <Footer />
</> );

export const VIPClueTextFour = ({ changeStage }) => ( <>
  <Header />
  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1 style={ { fontStyle: "italic", paddingBottom: "5%" } }>
      In terror, you realize that, the target is <strong>you</strong>.
    </h1>
    <Button variant="danger"
            onClick={ () => changeStage("three") }>
      <h3>Continue...</h3>
    </Button>
  </Container>
  <Footer />
</> );


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

export const StartingText = ({ changeStage, changeLocalConfig }) => ( <>
  <Header />

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

  <Footer />
</> );