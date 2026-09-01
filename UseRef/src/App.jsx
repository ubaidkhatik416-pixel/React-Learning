import { useState, useRef, useEffect } from "react";

import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const previousName = useRef("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />

          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />

          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>

        <div>
          <h1>useRef Example</h1>

          <p>
            Learn how <code>useRef</code> can store the previous value.
          </p>
        </div>

        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <p>Current Name: {name}</p>

          <p>Previous Name: {previousName.current}</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>Documentation</h2>
          <p>Your questions, answered</p>

          <ul>
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>

            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="button-icon"
                  src={reactLogo}
                  alt=""
                />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Connect with us</h2>
          <p>Join the Vite community</p>

          <ul>
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>

            <li>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                rel="noreferrer"
              >
                X.com
              </a>
            </li>

            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                rel="noreferrer"
              >
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  );
}

export default App;