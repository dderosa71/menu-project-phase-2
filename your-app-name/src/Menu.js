
import React from "react"
import MenuItem from "./MenuItem.js"

function Menu({menuItems, jsonURL, setMenuItems}){

    const menuArray = menuItems.map(item=>(
        <MenuItem 
        key={item.id}
        id={item.id}
        name={item.name} 
        description={item.description}
        price={item.price}
        jsonURL={jsonURL}
        setMenuItems={setMenuItems}
        />
    ))
    return(
        <>
        {menuArray}
        </>
    )
}

export default Menu