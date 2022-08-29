import styled from "styled-components";
import Container from "react-bootstrap/Container";

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