import React from "react";

   function Products(props){
    return(
        <div>
           <h2>{props.productsdata.name}</h2>
           <p>{props.productsdata.price}--{props.productsdata.description}</p>
        </div>
    )
   }
export default Products