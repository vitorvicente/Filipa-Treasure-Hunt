import React from "react";
import {
  LocationClueTextFive,
  LocationClueTextFour,
  LocationClueTextOne,
  LocationClueTextSix,
  LocationClueTextThree,
  LocationClueTextTwo
} from "../assets/prompts/LocationClue";

const LocationClue = ({ localConfig, changeStage, changeLocalConfig }) => {
  if (localConfig["localStage"] === "decrypt") {
    return ( <DecryptBase changeLocalConfig={ changeLocalConfig }
                          localConfig={ localConfig } /> );
  } else {
    switch (localConfig["localReadingStage"]) {
      case "guessed":
        return ( <LocationClueTextSix changeStage={ changeStage } /> );
      case "five":
        return ( <LocationClueTextFive changeLocalConfig={ changeLocalConfig }
                                       curStage={ localConfig["localEncryptStage"] } /> );
      case "four":
        return ( <LocationClueTextFour changeLocalConfig={ changeLocalConfig }
                                       curStage={ localConfig["localEncryptStage"] }
                                       hasMovedOn={ localConfig["hasMovedOn"][1] } /> );
      case "three":
        return ( <LocationClueTextThree changeLocalConfig={ changeLocalConfig }
                                        curStage={ localConfig["localEncryptStage"] }
                                        hasMovedOn={ localConfig["hasMovedOn"][0] }
                                        hasReadEverything={ localConfig["hasReadEverything"] } /> );
      case "two":
        return ( <LocationClueTextTwo changeLocalConfig={ changeLocalConfig }
                                      curStage={ localConfig["localEncryptStage"] }
                                      hasReadEverything={ localConfig["hasReadEverything"] } /> );
      default:
        return ( <LocationClueTextOne changeLocalConfig={ changeLocalConfig }
                                      curStage={ localConfig["localEncryptStage"] }
                                      hasReadEverything={ localConfig["hasReadEverything"] } /> );
    }
  }
};

const DecryptBase = () => ( <h1>tttt</h1> );

export default LocationClue;