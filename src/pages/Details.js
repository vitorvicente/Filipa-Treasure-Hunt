import React from "react";

import { Button, Image, Col, Row, Container } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";

import Header from "../components/Header";
import Footer from "../components/Footer";

import roomLondon from "../assets/imgs/roomLondon.jpg";
import { slideshow } from "../assets/imgs/slideshow";

const Details = ({ localConfig, changeStage, changeLocalConfig }) => {
  let Display = () => <PageOne changeLocalConfig={ changeLocalConfig } />;
  if (localConfig["localStage"] === "two") {
    if (!localConfig["hasVisited"]["two"]) {
      const hasVisited = localConfig["hasVisited"];
      hasVisited["two"] = true;
      changeLocalConfig("hasVisited", hasVisited)
    }
    Display = () => <PageTwo changeLocalConfig={ changeLocalConfig } />;
  } else if (localConfig["localStage"] === "three") {
    if (!localConfig["hasVisited"]["three"]) {
      const hasVisited = localConfig["hasVisited"];
      hasVisited["three"] = true;
      changeLocalConfig("hasVisited", hasVisited)
    }
    Display = () => <PageThree changeLocalConfig={ changeLocalConfig } />;
  } else if (localConfig["localStage"] === "four") {
    if (!localConfig["hasVisited"]["four"]) {
      const hasVisited = localConfig["hasVisited"];
      hasVisited["four"] = true;
      changeLocalConfig("hasVisited", hasVisited)
    }
    Display = () => <PageFour />;
  }

  const hasSeenEverything = localConfig["hasVisited"]["two"] &&
                            localConfig["hasVisited"]["three"] &&
                            localConfig["hasVisited"]["four"];

  return (
    <>
      <Header />

      <Container style={ { textAlign: "center", paddingBottom: "5%" } }>
        { hasSeenEverything &&
          <Button variant="danger"
                  onClick={ () => changeStage("note") }>
            <h1><strong><em> Shall We? </em></strong></h1>
          </Button>
        }
      </Container>


      <Display />

      <Container style={ { textAlign: "center" } }>
        <Row style={ { paddingTop: "5%", paddingBottom: "5%" } }>
          { localConfig["localStage"] !== "one" &&
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localStage", "one") }>
                <h3> Overview </h3>
              </Button>
            </Col>
          }

          { localConfig["localStage"] !== "two" &&
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localStage", "two") }>
                <h3> Flights </h3>
              </Button>
            </Col>
          }

          { localConfig["localStage"] !== "three" &&
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localStage", "three") }>
                <h3> Accommodations </h3>
              </Button>
            </Col>
          }

          { localConfig["localStage"] !== "four" &&
            <Col>
              <Button variant="danger"
                      onClick={ () => changeLocalConfig("localStage", "four") }>
                <h3> Activities </h3>
              </Button>
            </Col>
          }
        </Row>
      </Container>

      <Footer />
    </>
  );
}

const PageOne = () => (
  <Container style={ { minHeight: "50vh", paddingBottom: "5%" } }>
    <h1><strong><em> Overall Trip Plan </em></strong></h1>
    <h3 style={ { textAlign: "center", paddingTop: "5%", fontStyle: "italic" } }>
      <strong> [MASSIVE PREFACE ABOUT THE TRIP] </strong>
    </h3>

    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      With that said, the idea is for us to take a week or so in the Maldives, away from everything and everyone, in
      an overwater bungalow. We'd leave London on the 24th of February, and leave Male on the 4th of March. Since it
      takes about a day for travel each way, it would give us a full week there.
    </h3>

    <h2 style={ { paddingTop: "5%" } }> Dates: </h2>
    <h3 style={ { textIndent: "10%" } }> - Leaving Seattle: 23th of February </h3>
    <h3 style={ { textIndent: "10%" } }> - Arriving in London: 24th of February </h3>
    <h3 style={ { textIndent: "10%" } }> - Leaving London: 24th of February </h3>
    <h3 style={ { textIndent: "10%" } }> - Arriving in Male: 25th of February </h3>
    <h3 style={ { textIndent: "10%" } }> - Leaving Male: 4th of May </h3>
    <h3 style={ { textIndent: "10%" } }> - Arriving in London: 5th of March </h3>
    <h3 style={ { textIndent: "10%" } }> - Leaving London: 6th of March </h3>
    <h3 style={ { textIndent: "10%" } }> - Arriving in Seattle: 6th of March </h3>
  </Container>
);

const PageTwo = () => (
  <Container style={ { minHeight: "50vh", paddingBottom: "5%" } }>
    <h1><strong><em> Flights </em></strong></h1>

    <h3 style={ { textIndent: "10%", paddingTop: "5%", paddingBottom: "5%" } }>
      We are doing 4 flights together, I'll be doing three more. The idea is to go from Heathrow to Male. To get there
      we'll make a stop in Doha half way through. Mostly we'll be traveling in Qatar Airways because I can redeem a
      bunch of Miles with them (and because they're a really good airline).
    </h3>

    <Row>
      <Col>
        <h2><strong><em> Departing Flights </em></strong></h2>
      </Col>
      <Col style={ { textAlign: "right" } }>
        <h2><strong><em> Returning Flights </em></strong></h2>
      </Col>
    </Row>

    <h2 style={ { textAlign: "center" } }> London to Male Sector </h2>

    <Row>
      <Col>
        <h3 style={ { paddingTop: "5%" } }> London - Doha (24/02/2023) </h3>
        <h6 style={ { textIndent: "10%" } }> London Heathrow (LHR) - Hamad International Airport (DOH) </h6>
        <h6 style={ { textIndent: "10%" } }> 20:30 (GMT) - 06:20 (GMT+3) - Travel Time: 6h50 </h6>
        <h6 style={ { textIndent: "10%" } }> Qatar Airways B777 QR 2 </h6>

        <h3 style={ { paddingTop: "5%" } }> Doha - Male (25/02/2023) </h3>
        <h6 style={ { textIndent: "10%" } }> Hamad International Airport (DOH) - Velana International Airport
                                             (MLE) </h6>
        <h6 style={ { textIndent: "10%" } }> 08:20 (GMT+3) - 15:00 (GMT+5) - Travel Time: 4h40 </h6>
        <h6 style={ { textIndent: "10%" } }> Qatar Airways B777 QR 672 </h6>
      </Col>
      <Col style={ { textAlign: "right" } }>
        <h3 style={ { paddingTop: "5%", direction: "rtl" } }> Male - Doha (04/03/2023) </h3>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> Velana International Airport (MLE) - Hamad
                                                               International
                                                               Airport
                                                               (DOH) </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> 23:20 (GMT+5) - 02:10 (GMT+3) - Travel Time: 4h50 </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> Qatar Airways B777 QR 673 </h6>

        <h3 style={ { paddingTop: "5%", direction: "rtl" } }> Doha - London (05/03/2023) </h3>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> Hamad International Airport (DOH) - London Heathrow
                                                               (LHR) </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> 08:50 (GMT+3) - 13:20 (GMT) - Travel Time: 7h30 </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> Qatar Airways B777 QR 7 </h6>
      </Col>
    </Row>

    <h2 style={ { textAlign: "center" } }> London to Seattle Sector </h2>

    <Row>
      <Col>
        <h3 style={ { paddingTop: "5%" } }> Seattle - London (23/02/2023) </h3>
        <h6 style={ { textIndent: "10%" } }> Seattle-Tacoma International (SEA) - London Heathrow (LHR) </h6>
        <h6 style={ { textIndent: "10%" } }> 14:10 (GMT-8) - 07:35 (GMT) - Travel Time: 9h25 </h6>
        <h6 style={ { textIndent: "10%" } }> Virgin Atlantic B787 VS 106 </h6>
      </Col>
      <Col style={ { textAlign: "right" } }>
        <h3 style={ { paddingTop: "5%", direction: "rtl" } }> London - Amsterdam (06/03/2023) </h3>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> London Heathrow (LHR) - Amsterdam Schiphol (AMS) </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> 06:30 (GMT) - 09:99 (GMT+1) - Travel Time: 1:30 </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> KLM B737 KL 1000 </h6>

        <h3 style={ { paddingTop: "5%", direction: "rtl" } }> Amsterdam - Seattle (06/03/2023) </h3>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> Amsterdam Schiphol (AMS) - Seattle-Tacoma
                                                               International </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> 10:15 (GMT+1) - 11:40 (GMT-8) - Travel Time:
                                                               10:25 </h6>
        <h6 style={ { textIndent: "10%", direction: "rtl" } }> Delta Airbus A330-900neo DL 143 </h6>
      </Col>
    </Row>
  </Container>
);

const PageThree = () => (
  <Container style={ { minHeight: "50vh", paddingBottom: "5%" } }>
    <h1><strong><em> Accommodations </em></strong></h1>

    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      As mentioned before, we'll be staying in a lovely overwater bungalow in a nice hotel with all meals included,
      and
      a Private Pool. I'll also be staying at a Hotel for a night after we come back as I transit through Heathrow
      (flights sadly just don't line up time wise).
    </h3>

    <h2 style={ { paddingTop: "5%", paddingBottom: "2%" } }><strong><em> Male - 7 Nights </em></strong></h2>
    <Row>
      <Col>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }><em>Hotel:</em> Anantara Dhigu Maldives Resort </h4>

        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }><em>Check-In:</em> 25/02/2023 </h4>
        <h4 style={ { textIndent: "5%" } }><em>Check-Out:</em> 04/03/2023 </h4>

        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }><em>Room:</em> Sunset Over Water Pool Suite </h4>
        <h4 style={ { textIndent: "5%" } }><em>Included</em></h4>
        <h5 style={ { textIndent: "10%" } }> - In-Room Breakfast </h5>
        <h5 style={ { textIndent: "10%" } }> - Lunch & Dinner at Hotel Restaurants </h5>
        <h5 style={ { textIndent: "10%" } }> - Transfer from the Airport to Hotel & Back </h5>
        <h5 style={ { textIndent: "10%" } }> - WiFi </h5>
        <h5 style={ { textIndent: "10%" } }> - Private Pool </h5>
        <h5 style={ { textIndent: "10%" } }> . . . . . . </h5>
      </Col>
      <Col>
        <SimpleImageSlider
          width={700}
          height={400}
          images={slideshow}
          showBullets={true}
          showNavs={true}
          slideDuration={2}
          loop={true}
          autoPlay={true}
        />
      </Col>
    </Row>

    <h2 style={ { paddingTop: "5%", textAlign: "right", paddingBottom: "2%" } }><strong><em> Heathrow - 1
                                                                                             Night </em></strong></h2>
    <Row>
      <Col>
        <Image style={ { borderRadius: "10px", maxWidth: "100%" } }
               src={ roomLondon } />
      </Col>
      <Col style={ {} }>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }><em>Hotel:</em> Hilton London Heathrow Airport </h4>

        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }><em>Check-In:</em> 05/03/2023 </h4>
        <h4 style={ { textIndent: "5%" } }><em>Check-Out:</em> 06/03/2023 </h4>

        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }><em>Room:</em> King Guest Room Semi-Flex </h4>
        <h4 style={ { textIndent: "5%" } }><em>Included</em></h4>
        <h5 style={ { textIndent: "10%" } }> - Breakfast </h5>
        <h5 style={ { textIndent: "10%" } }> - WiFi </h5>
      </Col>
    </Row>
  </Container>
);

const PageFour = () => (
  <Container style={ { minHeight: "50vh", paddingBottom: "5%" } }>
    <h1><strong><em> Activities </em></strong></h1>

    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Although the main goal of this holiday is for us to relax, catch some sun, read some books, and just enjoy
      paradise, there are still quite a few things we <em>could</em> do while there. From Water-Sports, to Snorkeling,
      to Sunset Cruises.
    </h3>

    <Row style={ { paddingTop: "5%" } }>
      <Col>
        <h2 style={ { paddingBottom: "2%" } }><strong><em> Under Water </em></strong></h2>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }> SEA BOB </h4>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }> Snorkeling: </h4>
        <h5 style={ { textIndent: "10%" } }> - Nurse Sharks </h5>
        <h5 style={ { textIndent: "10%" } }> - Whale Sharks </h5>
        <h5 style={ { textIndent: "10%" } }> - Dolphins </h5>
        <h5 style={ { textIndent: "10%" } }> - Turtles </h5>
        <h5 style={ { textIndent: "10%" } }> - Manta/Sting Rays </h5>
        <h5 style={ { textIndent: "10%" } }> - Reef/Coral Garden </h5>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }> Diving: </h4>
        <h5 style={ { textIndent: "10%" } }> - Lagoon Dive </h5>
        <h5 style={ { textIndent: "10%" } }> - Reef Diving </h5>
        <h5 style={ { textIndent: "10%" } }> - Nurse Shark Night Dive </h5>
      </Col>
      <Col>
        <h2 style={ { paddingBottom: "2%" } }><strong><em> Above Water </em></strong></h2>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }> Glass Kayaking </h4>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }> Trips: </h4>
        <h5 style={ { textIndent: "10%" } }> - Sunset Cruise </h5>
        <h5 style={ { textIndent: "10%" } }> - Lucky Dolphin Cruise </h5>
        <h5 style={ { textIndent: "10%" } }> - Glass Bottom Boat Trip </h5>
        <h5 style={ { textIndent: "10%" } }> - Tea Time Local Island Trip </h5>
        <h4 style={ { textIndent: "5%", paddingTop: "2%" } }> Water Sports: </h4>
        <h5 style={ { textIndent: "10%" } }> - Glass Kayaking </h5>
        <h5 style={ { textIndent: "10%" } }> - Parasailing </h5>
        <h5 style={ { textIndent: "10%" } }> - Fun Rides </h5>
        <h5 style={ { textIndent: "10%" } }> - Flyboard </h5>
        <h5 style={ { textIndent: "10%" } }> - Jetski </h5>
      </Col>
    </Row>
  </Container>
);

export default Details;