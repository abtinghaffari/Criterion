import logo from './logo.svg';
import './App.css';
import {NavBar} from "./ui-components";
import { PlanetModels } from "./models";
import {PlanetsCardCollection} from "./ui-components";
import {withAuthenticator} from '@aws-amplify/ui-react';

function App() {

  const NavBarOverrides = {
    "et-oceans 1": {
      src: "https://aambpublicoceanservice.blob.core.windows.net/oceanserviceprod/facts/et-oceans.jpg"
    },
    "image": {
      src: "https://cdn-icons-png.flaticon.com/512/4140/4140039.png"
    }
  }

  return (
    <div className="App">
      <NavBar overrides={NavBarOverrides} width="100%" />
      <header className="App-header">
        <PlanetsCardCollection /> 
      </header>
    </div>
  );
}

export default App;
