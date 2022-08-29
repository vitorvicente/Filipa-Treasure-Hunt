import styled from "styled-components";

import Container from "react-bootstrap/Container";

import Background from "./imgs/main-background.jpg";


export const Letter = styled(Container)`
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

export const Card = styled(Container)`
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

export const CardTwo = styled(Container)`
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

export const FooterDiv = styled.div`
	background-color: #1a252f;
	font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
	font-size: 25px;
	color: #fff;
	align-items: center;
	justify-content: center;
	text-align: center;
	display: flex;
	flex-direction: row;
	padding: 30px;
	position:relative;
	left:0;
	bottom:0;
	right:0;
`;

export const MastHead = styled.div`
	margin-bottom:50px;
	background:no-repeat center center;
	background-color:#868e96;
	background-attachment:scroll;
	position:relative;
	background-size:cover;
	background-image: url(${ Background });
`;

export const Overlay = styled.div`
	position:absolute;
	top:0;
	left:0;
	right:0;
	height:100%;
	width:100%;
	background-color:#212529;
	opacity:.2
`;

export const SiteHeading = styled.div`
	padding:200px 0 150px;
	color:#fff;
	text-align: center;
	justify-content: center;
	& h1 {
		font-size:50px;
		margin-top:0
	}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${ (props) => props.opacity };
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`;