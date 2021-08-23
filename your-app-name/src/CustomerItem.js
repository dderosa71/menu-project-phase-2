import React from "react"

function CustomerItem({description, price, name}){
    return(
        <>
        <p>{name}</p>
        <p>{description}</p>
        <p>{`$${price}`}</p>
        </>
    )
}

export default CustomerItem
