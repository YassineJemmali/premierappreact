import logo from "./logo.svg";
import "./App.css";
import Monpremiermenu from "./bulder/Monpremiermenu";
import Leformulaire from "./bulder/Leformulaire";
import Monfooter from "./bulder/MonFooter";

function App() {
  return (
    <div className="App">
      <Monpremiermenu />
      <p>Bienvenue dans notre première expérience avec React</p>
      <p>Le chemin est encore long, mais je vais y arriver</p>

      <Leformulaire />
      <Monfooter />
    </div>
  );
}

export default App;
