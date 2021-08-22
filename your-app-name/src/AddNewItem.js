import React from "react"

function AddNewItem({ setMenuItems, jsonURL }) {

    function addItem(event) {
        const newItem = {
            "name": event.target[0].value,
            "description": event.target[1].value,
            "price": event.target[2].value
        };
        event.preventDefault()
        console.log(event)
        fetch(jsonURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem)
        })
        setMenuItems((currentItems) => [...currentItems, newItem])
    }

    return (
        <>
            <h1>Add a New Menu Item</h1>
            <form onSubmit={addItem}>
                <label>Name of Dish</label>
                <input type="text" id="name"></input>
                <label>Description</label>
                <input type="text" id="description"></input>
                <label>Price</label>
                <input type="text" id="name"></input>
                <input type="submit" value="Add"></input>
            </form>
        </>
    )
}

export default AddNewItem