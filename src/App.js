import React, { useEffect, useState } from "react";
import { withFirebase } from "vtr-react-components/dist/Firebase";
import { getDoc, setDoc } from "firebase/firestore";

import MissionStart from "./pages/MissionStart";
import DateClue from "./pages/DateClue";
import VIPClue from "./pages/VIPClue";
import FlightsClue from "./pages/FlightsClue";
import OperativeClue from "./pages/OperativeClue";
import LocationClue from "./pages/LocationClue";
import Details from "./pages/Details";
import Note from "./pages/Note";

import Authenticate from "./components/Authenticate";
import Error from "./components/Error";
import Loader from "./components/Loader";
import PageBlocked from "./components/PageBlocked";

import 'bootstrap/dist/css/bootstrap.css';


const AppBase = ({ firebase }) => {
  const [ loading, setLoading ] = useState(true);
  const [ config, setConfig ] = useState(null);
  const [ authenticated, setAuthenticated ] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadData() {
      const filipaDoc = await getDoc(firebase.config("filipa"));

      if (filipaDoc.exists) {
        const data = filipaDoc.data();

        setConfig(data);
      }
    }

    loadData().then(() => {
      setLoading(false);
    });

    setAuthenticated(localStorage.getItem("authenticated") === "true");
  }, [ firebase ]);

  const changeStage = async (stage) => {
    await setDoc(firebase.config("filipa"), {
      stage: stage
    }, { merge: true });
    config["stage"] = stage;
    window.location.reload(false);
  }

  const changeLocalConfig = async (configKey, configValue) => {
    config["localConfig"][`${ config["stage"] }`][`${ configKey }`] = configValue;
    await setDoc(firebase.config("filipa"), config, { merge: true });
    window.location.reload(false);
  }

  if (loading) {
    return ( <Loader opacity={ 100 } /> )
  }

  if (!authenticated && !config["testing"]) {
    return ( <Authenticate config={ config } /> );
  }

  if (new Date(Date.now()) <=
      config["localConfig"][`${ config["stage"] }`]["startDate"].toDate() &&
      !config["testing"]) {
    return ( <PageBlocked date={ config["localConfig"][`${ config["stage"] }`]["startDate"].toDate() }
                          isLast={ config["stage"] === "note" } /> )
  }

  switch (config["stage"]) {
    case "start":
      return <MissionStart localConfig={ config["localConfig"][`${ config["stage"] }`] }
                           changeStage={ changeStage }
                           changeLocalConfig={ changeLocalConfig } />
    case "one":
      return <DateClue localConfig={ config["localConfig"][`${ config["stage"] }`] }
                       changeStage={ changeStage }
                       changeLocalConfig={ changeLocalConfig } />
    case "two":
      return <VIPClue localConfig={ config["localConfig"][`${ config["stage"] }`] }
                      changeStage={ changeStage }
                      changeLocalConfig={ changeLocalConfig } />
    case "three":
      return <FlightsClue localConfig={ config["localConfig"][`${ config["stage"] }`] }
                          changeStage={ changeStage }
                          changeLocalConfig={ changeLocalConfig } />
    case "four":
      return <OperativeClue localConfig={ config["localConfig"][`${ config["stage"] }`] }
                            changeStage={ changeStage }
                            changeLocalConfig={ changeLocalConfig } />
    case "finale":
      return <LocationClue localConfig={ config["localConfig"][`${ config["stage"] }`] }
                           changeStage={ changeStage }
                           changeLocalConfig={ changeLocalConfig } />
    case "details":
      return <Details localConfig={ config["localConfig"][`${ config["stage"] }`] }
                      changeStage={ changeStage }
                      changeLocalConfig={ changeLocalConfig } />
    case "note":
      return <Note localConfig={ config["localConfig"][`${ config["stage"] }`] }
                      changeStage={ changeStage }
                      changeLocalConfig={ changeLocalConfig } />
    default:
      return <Error />
  }
}

const App = withFirebase(AppBase)

export default App;