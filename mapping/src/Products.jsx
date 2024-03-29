import React from "react";

   function Products(props){
    return(
        <div>
           <h2>{props.Products.name}</h2>
           <p>{props.Products.price}--{props.Products.description}</p>
        </div>
    )
   }
export default Products