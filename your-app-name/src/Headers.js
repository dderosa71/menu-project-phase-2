import React from "react"

function Header({ setNewItemScreen }){

function toggleToNewItemScreen(){
     setNewItemScreen(current=>!current)
}
    return(
        <div>
        <h1>DeRosa's Restaurant</h1>
        <h2>Menu</h2>
        <button onClick={toggleToNewItemScreen}>Add a new item</button>
        </div>
    )
}

export default Header