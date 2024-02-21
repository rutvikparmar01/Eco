// Product.jsx
import React, { useContext, useState } from 'react';
import StoreContext from '../contexts/StoreContext';
import { Link } from 'react-router-dom';
import './Clearbtn.css'

function Product() {
  const ctx = useContext(StoreContext);
  const [main,setmain]=useState(ctx.items)

  function clear(){
    setmain([])
  }

  

  return (
    <div>
     <div className='mx-2 '>
     <button className='clearbutton' onClick={clear}> Clear
</button>
     </div>
       { main.map((item) => (
         <div class="bg-gray-100 h-screen py-8">
         <div class="container mx-auto px-4">
             <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
             <div class="flex flex-col md:flex-row gap-4">
                 <div class="md:w-3/4">
                     <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                         <table class="w-full">
                             <thead>
                                 <tr>
                                     <th class="text-left font-semibold">{item.title}</th>
                                     <th class="text-left font-semibold">{item.price}</th>
                                     <th class="text-left font-semibold">{item.quantity}</th>
                                     <th class="text-left font-semibold">Total</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td class="py-4">
                                         <div class="flex items-center">
                                             <img class="h-16 w-16 mr-4" src={item.image} alt="Product image"/>
                                             <span class="font-semibold">{item.title}</span>
                                         </div>
                                     </td>
                                     <td class="py-4">$19.99</td>
                                     <td class="py-4">
                                         <div class="flex items-center">
                                             <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                             <span class="text-center w-8">1</span>
                                             <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                         </div>
                                     </td>
                                     <td class="py-4">$19.99</td>
                                 </tr>
                                 
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div class="md:w-1/4">
                     <div class="bg-white rounded-lg shadow-md p-6">
                         <h2 class="text-lg font-semibold mb-4">{item.decreption}</h2>
                         <div class="flex justify-between mb-2">
                             <span>Subtotal</span>
                             <span>$19.99</span>
                         </div>
                         <div class="flex justify-between mb-2">
                             <span>Taxes</span>
                             <span>$1.99</span>
                         </div>
                         <div class="flex justify-between mb-2">
                             <span>Shipping</span>
                             <span>$0.00</span>
                         </div>
                         <hr class="my-2"/>
                         <div class="flex justify-between mb-2">
                             <span class="font-semibold">Total</span>
                             <span class="font-semibold">$21.98</span>
                         </div>
                         <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                     </div>
                 </div>
             </div>
         </div>
     </div>
        ))}
      
    </div>
  );
}

export default Product;
