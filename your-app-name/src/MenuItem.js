import React from "react"

function MenuItem({name, description, price, id, jsonURL, setMenuItems}){
    function handleDelete(){
        fetch(`${jsonURL}/${id}`,{
            method:'DELETE'
        })
    setMenuItems((currentItems)=>currentItems.filter((item)=>item.id!==id))
    }
    return(
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MenuItem