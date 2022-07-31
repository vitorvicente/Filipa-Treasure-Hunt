import React from "react";

import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Header from "./Header";


const Error = () => (
	<>
		<Header/>

		<Container style={ { minHeight: "50vh", textAlign: "center" } }>
			<h1> Not entirely sure how you got here... </h1>
			<h3> Please contact Support for further Assistance! </h3>
		</Container>

		<Footer/>
	</>
);

export default Error;
