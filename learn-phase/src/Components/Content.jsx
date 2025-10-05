import Counter from "./Counter";
import React, { useState } from 'react'
function printStatement(e) {
    console.log(e.target.innerText);
    e.target.innerText = "Clicked";
    console.log("Button Clicked");
}

function Content() {

    let [product, setProduct] = useState({name:"Iphone", price : 70000, color:"White"});
    let name = "Sastha";
    return(
        <>
        <h1>Learn Phase</h1>
        <button onClick={(e) =>printStatement(e)}>
            Click Me
        </button>
        <Counter product = {product} name = {name}/>
        </>
    )
}

export default Content;