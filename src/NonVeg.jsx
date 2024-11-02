import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg()
{
    const NonVegProducts=useSelector(state=>state.products.NonVeg)
    const dispatch=useDispatch()

    const items=NonVegProducts.map((product,index)=>

        <li key={index}>
            {product.name}-${product.price.toFixed(2)}
        <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button></li>
)
    return(
        <>
        <h2> Non-Veg product details</h2>
        <li>{items}</li>
        </>
    )
}
export default NonVeg;
