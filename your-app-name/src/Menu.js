
import React from "react"
import MenuItem from "./MenuItem.js"

function Menu({menuItems}){

    const menuArray = menuItems.map(item=>(
        <MenuItem 
        key={item.id}
        name={item.name} 
        description={item.description}
        price={item.price}
        />
    ))
    return(
        <>
        {menuArray}
        </>
    )
}

export default Menu