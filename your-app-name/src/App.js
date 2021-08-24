import logo from './logo.svg';
import './App.css';
import Menu from "./Menu.js"
import React, { useState, useEffect } from 'react';
import Header from "./Headers.js"
import AddNewItem from './AddNewItem';
import CustomerPage from "./CustomerPage.js"
import Navbar from "./Navbar.js"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound"

function App() {

  const jsonURL = "http://localhost:3000/dinner"
  const [menuItems, setMenuItems] = useState([])
  const [newItemScreen, setNewItemScreen] = useState(false)
  const displayMe = newItemScreen ? "hidden" : "shown"

  useEffect(() =>
    fetch(jsonURL)
      .then(resp => resp.json())
      .then(json => setMenuItems(json)),
    [])

  return (
    <>
      <BrowserRouter>
        <Header setNewItemScreen={setNewItemScreen} />
        <Switch>
          <Route exact path="/">
            <Menu menuItems={menuItems} jsonURL={jsonURL} setMenuItems={setMenuItems} />
          </Route>
          <Route path="/AddNewItem">
            <AddNewItem setMenuItems={setMenuItems} jsonURL={jsonURL} />
            <Menu menuItems={menuItems} jsonURL={jsonURL} setMenuItems={setMenuItems} />
          </Route>
          <Route path="/CustomerMenu">
            <CustomerPage menuItems={menuItems} />
          </Route>
          <Route path="/404">
            <PageNotFound />
          </Route>
          <Route path="">
          <PageNotFound />

            <Redirect to="/404" />
          </Route>
        </Switch>
      </BrowserRouter>,
    </>
  );
}

export default App;
