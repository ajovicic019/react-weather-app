import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Novi Sad" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/andrea-jovicic-880b3b24a/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Andrea Jovicic
          </a>{" "}
          it is{" "}
          <a
            href="https://github.com/ajovicic019/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://sage-taiyaki-eb3240.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
