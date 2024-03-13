import twoB from './2B-PNG-HD-1234705506.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hablemos un poco de Nier Automata</h1>
        <img src={twoB} className="twoB" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://nier.fandom.com/wiki/NieR:Automata"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende más sobre Nier
        </a>
      </header>
    </div>
  );
}

export default App;
