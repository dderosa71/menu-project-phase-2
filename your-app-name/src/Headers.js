import React from "react"
import Button from "react-bootstrap/Button"
import {Link } from "react-router-dom";


function Header({ setNewItemScreen }) {

    function toggleToNewItemScreen() {
        setNewItemScreen(current => !current)
    }
    return (
        <header>    
            <Link to="/">
                <Button  variant="outline-primary" onClick={toggleToNewItemScreen}>Home</Button>
            </Link>
            <Link to="AddNewItem">
                <Button variant="outline-primary" onClick={toggleToNewItemScreen}>Add a new item</Button>
            </Link>
            <Link to="CustomerMenu">
                <Button  variant="outline-primary" onClick={toggleToNewItemScreen}>Show Customer Facing Menu</Button>
            </Link>
            <h1>Admin Page - DeRosa's Restaurant</h1>
        </header>
    )
}

export default Header