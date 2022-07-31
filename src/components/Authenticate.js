import Header from "./Header";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Authenticate = ({ config }) => {
  const [ error, setError ] = useState(false);

  const authenticate = (event) => {
    console.log(event.target[0].value)

    if (event.target[0].value === config["password"]) {
      localStorage.setItem("authenticated", true.toString());
      window.location.reload(false);
    } else {
      event.preventDefault();
      setError(true)
    }
  }

  return ( <>
    <Header/>

    <Container style={ { minHeight: "50vh", textAlign: "center" } }>
      <h1 style={ { paddingBottom: "5%" } }>Please enter the Password!</h1>

      { error &&
        <h3 style={ { paddingBottom: "2%" } }>Whoops! It seems like you entered the incorrect Password! Please try
          again</h3> }

      <Form onSubmit={ authenticate }>
        <Form.Group style={ { paddingBottom: "3%" } }
                    className="mb-3"
                    controlId="formBasicPassword">
          <Form.Control type="password"
                        placeholder="Password"/>
        </Form.Group>
        <Button variant="danger"
                type="submit">
          <h3>Authenticate</h3>
        </Button>
      </Form>
    </Container>

    <Footer/>
  </> )
};

export default Authenticate;