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
      <div id="header-title">
        <h2>La plataforma matemática que tu hijo necesita</h2>
      </div>
      </section>
      <div class="header-sub">
        <h4>Educación de calidad</h4>
      </div>
      <div class="header-sub">
        <h4>Tu hijo gana autonomía</h4>
      </div>
      <div class="header-sub">
        <h4>Observa sus avances</h4>
      </div>
    </div>
  );
}

export default App;
