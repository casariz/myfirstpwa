import React from 'react';
import './App.css';
import GGyWnycXEAE2L7f from './image/GGyWnycXEAE2L7f.jpg'; // Ajusta la extensión si no es .jpg

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NieR Automata</h1>
        <img src={GGyWnycXEAE2L7f} className="App-logo" alt="Nier Automata" />
        <p>
        NieR:Automata (ニーア オートマタ Nīa Ōtomata?) es un videojuego de rol de acción desarrollado por PlatinumGames y publicado por Square Enix para PlayStation 4, Microsoft Windows y Xbox One, así como para Nintendo Switch. Aunque en un principio la distribuidora planeó su lanzamiento para noviembre de 2016, finalmente lo publicó el 23 de febrero de 2017 en Japón.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;