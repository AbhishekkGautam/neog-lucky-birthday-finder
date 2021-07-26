import { useState } from "react";
import "./App.css";
import Lottie from "react-lottie";
import birthday from "./birthday.json";
import happy from "./confetti.json";
import sad from "./sad-animation.json";

function App() {
  const [showInputDiv, setShowInputDiv] = useState("block");
  const [showOutputDiv, setShowOutputDiv] = useState("none");
  const [focus, setFocus] = useState("text");
  const [birthDate, setBirthDate] = useState("");
  const [luckyNo, setLuckyNo] = useState("");
  const [result, setResult] = useState("");

  const focusHandler = () => {
    setFocus("date");
  };

  const blurHandler = () => {
    setFocus("text");
  };

  const dateInputHandler = (e) => {
    setBirthDate(e.target.value);
  };

  const luckyInputHandler = (e) => {
    setLuckyNo(e.target.value);
  };

  const checkBtnHandler = (e) => {
    e.preventDefault();
    const dateArray = birthDate.split("-");
    let sum = 0;
    dateArray.forEach((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setResult("lucky");
    } else {
      setResult("Not lucky");
    }
    setShowOutputDiv("block");
    setShowInputDiv("none");
  };

  const resetBtnHandler = () => {
    setShowOutputDiv("none");
    setShowInputDiv("block");
    setBirthDate("");
    setLuckyNo("");
  };

  const headerLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: birthday,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const luckyLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: happy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const notLuckyLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: sad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <header className="hero">
        <Lottie options={headerLottieOptions} height={210} width={150} />
        <h1 className="hero-heading">Lucky Birthday Finder</h1>
      </header>
      <section className="section">
        <div className="container container-center section-center">
          <div className="" style={{ display: `${showInputDiv}` }}>
            <form onSubmit={checkBtnHandler}>
              <input
                required
                type={focus}
                placeholder="Enter your birth date"
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={dateInputHandler}
                value={birthDate}
              />
              <input
                className="lucky-no-input"
                type="number"
                min="1"
                step="1"
                required
                placeholder="Enter your lucky number"
                onChange={luckyInputHandler}
                value={luckyNo}
              />
              <p className="privacy">
                <span>Privacy</span> we are not storing your data.
              </p>
              <button id="btn-translate" type="submit">
                Check
              </button>
            </form>
          </div>
          {result === "lucky" ? (
            <div style={{ display: `${showOutputDiv}` }}>
              <div className="outputDiv" style={{ position: "relative" }}>
                <Lottie
                  style={{ position: "absolute", bottom: "0rem" }}
                  options={luckyLottieOptions}
                  height={210}
                  width={200}
                />
                <p style={{ paddingTop: "2rem", textAlign: "center" }}>
                  Hurray! You are a lucky person!
                </p>
              </div>
              <button id="btn-translate" onClick={resetBtnHandler}>
                Reset
              </button>
            </div>
          ) : (
            <div className="" style={{ display: `${showOutputDiv}` }}>
              <div className="outputDiv">
                <Lottie
                  options={notLuckyLottieOptions}
                  height={130}
                  width={130}
                  style={{ marginTop: "-2rem" }}
                />
                <p style={{ textAlign: "center", paddingTop: "0.5rem" }}>
                  Oops!! Your birthday is not lucky!
                </p>
              </div>
              <button id="btn-translate" onClick={resetBtnHandler}>
                Reset
              </button>
            </div>
          )}
          <div className="footer">
            <p>
              Developed by{" "}
              <a
                href="https://abhishekkgautam.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Abhishek Gautam
              </a>
            </p>
            <ul class="social-links list-non-bullet">
              <li class="list-item-inline">
                <a
                  target="_blank"
                  class="link"
                  href="https://github.com/AbhishekkGautam"
                  rel="noreferrer"
                >
                  <i class="fab fa-github fa-1x"></i>
                </a>
              </li>
              <li class="list-item-inline">
                <a
                  target="_blank"
                  class="link"
                  href="https://twitter.com/helloAbhishekk"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter fa-1x"></i>
                </a>
              </li>
              <li class="list-item-inline">
                <a
                  target="_blank"
                  class="link"
                  href="https://www.linkedin.com/in/abhishek-gautam-54684a167/"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in fa-1x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
