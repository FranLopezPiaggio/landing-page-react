import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import features from './components/features';
import callToAction from './components/callToAction';
import footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <features />
      <callToAction />
      <footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <p>
            Franco Developer, inicia el camino tecnologico en tu empresa  .
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
