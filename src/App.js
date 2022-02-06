import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
      </div>
      <p className="AppInfo m-2">
        Open-sourced on
        <a
          href="https://github.com/Braeae/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
        and hosted on
        <a
          href="https://suspicious-easley-0813d1.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
