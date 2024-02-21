import React, { useEffect, useState } from "react";
//import { StoreProvider, } from "./";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";
import CardView from "./Components/CardView";
import { StoreContextProvider } from "./contexts/StoreContext";

export default function App() {
  const [product, setProduct] = useState([]);
  
  


  const fetchAPI = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const itemsData = await res.json();
      setProduct(itemsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
    <div className="grid  grid-cols-3 gap-4">
      {product.map((product) => (
        <CardView key={product.id} Arry={product} />
      ))}
    </div>
    </>
  )
    
}



