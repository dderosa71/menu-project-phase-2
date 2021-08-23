import React, { useState } from "react"

function AddNewItem({ setMenuItems, jsonURL }) {

    const [itemName, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    //why use stateful forms? blogpost?


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
                <input onChange={(event) => setName(event.value)}
                    value={itemName}
                    type="text"
                    id="name"></input>
                <label>Description</label>
                <input onChange={(event) => setDescription(event.value)}
                    value={description}
                    type="text"
                    id="description"></input>
                <label>Price</label>
                <input onChange={(event) => setPrice(event.value)} value={price}
                    type="text"
                    id="name"></input>
                <input type="submit" value="Add"></input>
            </form>
        </>
    )
}

export default AddNewItem