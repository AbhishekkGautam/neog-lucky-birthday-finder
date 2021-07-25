import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-heading">Speak Like Yoda</h1>
      </header>
      <section className="section">
        <div className="container container-center section-center">
          <input placeholder="Enter emoji or click on any emoji below" />
          <input placeholder="Enter emoji or click on any emoji below" />
          <button id="btn-translate">Translate</button>
          <div className="outputDiv">
            <p>Yoda's way of speaking</p>

            <div id="output-div"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
