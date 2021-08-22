
import React from "react"
import MenuItem from "./MenuItem.js"

function Menu({menuItems}){

    const menuArray = menuItems.map(item=>(
        <MenuItem 
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