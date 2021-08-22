import logo from './logo.svg';
import './App.css';
import Menu from "./Menu.js"
import React, { useState, useEffect } from 'react';
import Header from "./Headers.js"
import AddNewItem from './AddNewItem';
// import { BrowserRouter, Route } from "react-router-dom";




function App() {

  const jsonURL = "http://localhost:3000/dinner"

  useEffect(() =>
    fetch(jsonURL)
      .then(resp => resp.json())
      .then(json => setMenuItems(json)),
    [])

  const [menuItems, setMenuItems] = useState([])
  const [newItemScreen, setNewItemScreen] = useState(false)
  const displayMe = newItemScreen ? "hidden" : "shown"
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
    <>

    {/* <BrowserRouter>
    <Route path="/"> */}
     <div className={displayMe}>
        <Header  setNewItemScreen={setNewItemScreen}  />
        <Menu menuItems={menuItems} jsonURL={jsonURL} setMenuItems={setMenuItems} />
      </div>
    {/* </Route>
  </BrowserRouter>, */}
     
      <div className={displayMe} >
        <AddNewItem setMenuItems={setMenuItems} jsonURL={jsonURL}/>
      </div>

    </>
  );
}

export default App;
