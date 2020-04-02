import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <nav>
        <img className="logo" alt="logo" src='https://adaptativamente.cl/img/logos/logo-adaptativamente.png'/>
        <FontAwesomeIcon id="burgerMenu" icon={faBars} />
      </nav>
      <section id="the-header">
        <h3>La plataforma matemática que tu hijo necesita</h3>
      </section>
    </div>
  );
}

export default App;
