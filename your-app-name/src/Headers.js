import React from "react"
import Button from "react-bootstrap/Button"

function Header({ setNewItemScreen }) {

    function toggleToNewItemScreen() {
        setNewItemScreen(current => !current)
    }
    return (
        <div>
            <h1>Admin Page - DeRosa's Restaurant</h1>
            <h2>Menu</h2>
            <Button variant="outline-primary"onClick={toggleToNewItemScreen}>Add a new item</Button>
            <Button onClick={toggleToNewItemScreen}>Show Customer Facing Menu</Button>

        </div>
    )
}

export default Header