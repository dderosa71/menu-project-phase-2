import logo from './logo.svg';
import './App.css';
import Menu from "./Menu.js"
import React, { useState, useEffect } from 'react';
import Header from "./Headers.js"
import AddNewItem from './AddNewItem';
import CustomerPage from "./CustomerPage.js"
import { BrowserRouter, Route, NavLink } from "react-router-dom";

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
    <>
      <BrowserRouter>
        <Route path="/">
          <Header setNewItemScreen={setNewItemScreen} />
        </Route>
        <Route path="/menu">
          <Menu menuItems={menuItems} jsonURL={jsonURL} setMenuItems={setMenuItems} />
        </Route>
        <Route path="/AddNewItem">
          <AddNewItem setMenuItems={setMenuItems} jsonURL={jsonURL} />
        </Route>
        <Route path="/CustomerMenu">
          <CustomerPage menuItems={menuItems} />
        </Route>
      </BrowserRouter>,
    </>
  );
}

export default App;
