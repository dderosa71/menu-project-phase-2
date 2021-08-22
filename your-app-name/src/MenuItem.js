import React from "react"

function MenuItem({name, description, price}){
    return(
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default MenuItem