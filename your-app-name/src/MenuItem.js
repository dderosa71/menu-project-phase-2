import React from "react"
import Button from 'react-bootstrap/Button'; 

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
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default MenuItem