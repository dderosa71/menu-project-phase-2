import React from "react"
import CustomerItem from "./CustomerItem.js"

function CustomerPage( {menuItems}){
   
    const tonightsMenu = 
    menuItems.map((item)=> <CustomerItem 
             key={item.id}
             description={item.description} 
             price={item.price} 
             name={item.name}/>)

    return(
        <div>
            <h1>DeRosa's Italian Restaurant</h1>
            <h2>Welcome! It is our pleasure to serve your</h2>
            <h3>Tonight's Menu</h3>
            <dl>{tonightsMenu}</dl>
            
        </div>
    )
}

export default CustomerPage