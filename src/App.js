import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Weather App</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="github-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by Victoria HM
        </a>
      </header>

      <div className="city-weather">
        <Search />
        <button>
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            size="2xl"
            style={{ color: "#f5f2f0" }}
          />
        </button>
        <h6>Last Updated: 18/09/23 18:08 </h6>
        <h2>New York</h2>
        <p>🌤️ Sunny </p>
        <div>
          <ul>
            <li>Min: 20°C</li>
            <li>Max: 25°C </li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>

      <footer className="App-footer">
        <h3>Weather App</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="github-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by Victoria HM
        </a>
      </footer>
    </div>
  );
}

export default App;
