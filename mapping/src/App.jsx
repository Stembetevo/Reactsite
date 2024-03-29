import React from "react";
import Productsdata from "./Productsdata";
import Products from "./Products";
    function App(){

      const productsComponent =  Productsdata.map(item => <Products key={item.id} Products={item}/>)

      return(
       <div>
          {productsComponent}
       </div> 
      )
    }

export default App
