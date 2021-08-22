import React, { useState } from "react"

function Header({setMenuItems, jsonURL, setNewItemScreen }){

    function newItem(event){
        return {"name": "Chicken Parm",
        "description": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
        "price": 22}
    }
// Easier way to do this? Can I update the state again as part of the fetch?
    function addItem(event){
        console.log(event)
        fetch(jsonURL, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newItem(event))
        })
    setMenuItems((currentItems)=>[...currentItems, newItem])
    }

    return(
        <div>
        <h1>DeRosa's Restaurant</h1>
        <h2>Menu</h2>
        <button onClick={addItem}>Add a new item</button>
        </div>
    )
}

export default Header