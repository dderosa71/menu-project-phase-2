import React from "react"
import Button from "react-bootstrap/Button"
import {Link } from "react-router-dom";


function Header() {
    return (
        <header>    
            <Link to="/">
                <Button  variant="outline-primary" >Home</Button>
            </Link>
            <Link to="AddNewItem">
                <Button variant="outline-primary" >Add a new item</Button>
            </Link>
            <Link to="CustomerMenu">
                <Button  variant="outline-primary" >Show Customer Facing Menu</Button>
            </Link>
            <h1>Admin Page - DeRosa's Restaurant</h1>
        </header>
    )
}

export default Header