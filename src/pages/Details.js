import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { withFirebase } from "vtr-react-components/dist/Firebase";
import React from "react";

const DetailsBase = () => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1>Temporary HTML for the Details Page!</h1>
  </Container>

  <Footer/>
</> );


const Details = withFirebase(DetailsBase);

export default Details;