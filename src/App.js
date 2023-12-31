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
          href="https://github.com/hewittmv/my-weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by Victoria HM
        </a>
      </header>

      <div className="city-weather">
        <div className="search-buttons">
          <Search />
          <button>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size="2xl"
              style={{ color: "#f5f2f0" }}
            />
          </button>
        </div>
        <h6>Last Updated: 18/09/23 18:08 </h6>

        <div className="forecast-grid">
          <div className="box-1">
            Mon
            <div>🌤️</div>
          </div>
          <div className="box-2">
            Tue
            <div>🌦️</div>
          </div>
          <div className="box-3">
            Wed
            <div>☁️</div>
          </div>
          <div className="box-4">
            Thu
            <div>❄️</div>
          </div>
          <div className="box-5">
            Fri
            <div>🌤️</div>
          </div>
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
