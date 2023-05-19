import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Novi Sad" />
        <footer>
          This project was coded by Andrea Jovicic and it is{" "}
          <a
            href="https://github.com/ajovicic019/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
