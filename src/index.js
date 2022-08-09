import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import "./styles.css";
import TsParticles from "./components/TsParticles/TsParticles";

function App() {
  return (
    <div className="wrapper">
      <TsParticles />
      <div className="content">
        <div className="App">
          <div className="container">
            <h1>bracketsmiths</h1>
            <h2>
              Coming Soon{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </h2>
            <Timer />
            <Optin />
            <Preloader />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
