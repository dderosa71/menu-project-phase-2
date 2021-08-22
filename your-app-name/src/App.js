import logo from './logo.svg';
import './App.css';
import Menu from "./Menu.js"
import React, { useState, useEffect } from 'react';



function App() {

  const jsonURL = "http://localhost:3000/dinner"

  useEffect(()=> 
  fetch(jsonURL)
  .then(resp => resp.json())
  .then(json=> console.log(json)),
  [])
  

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Menu />
  );
}

export default App;
