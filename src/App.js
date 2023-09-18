import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="city-Weather">
          <Search />
          <button>Here</button>
          <h6>Last Updated: 18/09/23 18:08 </h6>
          <h2>New York</h2>
          <p>🌤️ Sunny </p>
          <div>
            <ul>
              <li>Min: 18°C</li>
              <li>Max: 25°C </li>
              <li>Wind: 5km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Source Code by Victoria HM
      </a>
      <footer className="App-footer">
        <h3>Weather App</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
