import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { withFirebase } from "vtr-react-components/dist/Firebase";
import React from "react";

const LocationClueBase = ({ localConfig, changeStage, changeLocalConfig }) => ( <>
  <Header/>

  <Container style={ { minHeight: "50vh", textAlign: "center" } }>
    <h1>Temporary HTML for the Final Clue!</h1>
  </Container>

  <Footer/>
</> );


const LocationClue = withFirebase(LocationClueBase);

export default LocationClue;