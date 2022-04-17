import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
      </div>
      <p className="AppInfo m-3">
        <a
          href="https://github.com/Braeae/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>{" "}
        <a
          href="https://suspicious-easley-0813d1.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          project
        </a>
        by Büşra © 2022
      </p>
    </div>
  );
}

export default App;
