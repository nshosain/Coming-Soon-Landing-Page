import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import "./styles.css";
import TsParticles from "./components/TsParticles/TsParticles";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="wrapper">
      <TsParticles />
      <div className="content">
        <div className="App">
          <div className="container">
            <h1>
              <img
                src={logo}
                alt="www.bracketsmiths.com"
                height={300}
                width={300}
              />
            </h1>
            <h2>Website</h2>
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
