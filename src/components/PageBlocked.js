import React from "react";

import { Button, Container} from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

const PageBlocked = ({ date }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1>It seems like you have progressed faster than expected!</h1>
    <h3 style={ { paddingTop: "5%", paddingBottom: "5%" } }>
      This page will unblock on <strong>{ date.toUTCString() }</strong>.
    </h3>
    <Button variant="danger"
            onClick={ () => window.open("https://greenwichmeantime.com/time-zone/") }>
      <h3>Check Time Conversion</h3>
    </Button>
  </Container>

  <Footer/>
</> );

export default PageBlocked;