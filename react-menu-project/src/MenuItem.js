import React, { useState } from "react"
import Button from 'react-bootstrap/Button';

function MenuItem({ name, description, price, id, jsonURL, setMenuItems, menuItems }) {
    const [edit, setEdit] = useState(false)
    const [dishName, setDishName] = useState(name)
    const [dishDescription, setDishDescription] = useState(description)
    const [dishPrice, setDishPrice] = useState(price)

    function handleEdit() {
        setEdit((current) => !current)
    }

    function handleSave() {
        setEdit((current) => !current)
        fetch(`${jsonURL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "name": dishName,
                "description": dishDescription,
                "price": dishPrice
            })
        })
    }

    function handleDelete() {
        fetch(`${jsonURL}/${id}`, {
            method: 'DELETE'
        })
        setMenuItems((currentItems) => currentItems.filter((item) => item.id !== id))
    }

    if (!edit) {
        return (
            <div>
                <h3>{dishName}</h3>
                <p>{dishDescription}</p>
                <p>{dishPrice}</p>
                {/* <Link to={`/editfood/${id}}`}>{<Button variant="secondary" onClick={handleEdit}>Edit</Button>}</Link> */}
                {<Button variant="secondary" onClick={handleEdit}>Edit</Button>}

                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </div>
        )
    }
    else {
        return (
            <div>
                <form>
                    <label>Food</label>
                    <input onChange={(event) => setDishName(event.target.value)} value={dishName}></input>
                    <br></br>
                    <label>Description</label>
                    <input onChange={(event) => setDishDescription(event.target.value)} value={dishDescription}></input>
                    <br></br>
                    <label>Price</label>
                    <input type="number" onChange={(event) => setDishPrice(event.target.value)} value={dishPrice}></input>
                </form>
                <Button variant="success" onClick={handleSave}>Save</Button>
            </div>
        )
    }
}

export default MenuItem