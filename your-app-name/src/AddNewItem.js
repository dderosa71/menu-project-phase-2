import React from "react"

function AddNewItem(){
    return(
        <>
        <h1>Add a New Menu Item</h1>
        <form>
            <label>Name of Dish</label>
            <input type="text" id="name"></input>
            <label>Description</label>
            <input type="text" id="description"></input>
            <label>Price</label>
            <input type="text" id="name"></input>
        </form>
        </>
    )
}

export default AddNewItem