import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="cityWeather">
            <Search />
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
      </header>
    </div>
  );
}

export default App;
