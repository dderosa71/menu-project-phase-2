import React from "react"

function CustomerItem({ description, price, name }) {
    return (
        <>
            <dt>{name}</dt>
            <dd>{`${description} - $${price}`}</dd>
        </>
    )
}

export default CustomerItem
