import React, { useContext } from 'react'
import StoreContext from '../contexts/StoreContext'
import {toast} from 'react-hot-toast'
import './Button.css'

function CardView({Arry}) {
    const cartctx=useContext(StoreContext)
    function onclick(){
cartctx.addItem(Arry)
// console.log(Arry);
toast.success('Successfully Added!')

    }
  return (
    <div>
      <div className="bg-transparent">
  <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

    <div className="     ">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={Arry.image} alt="Front of men&#039;s Basic Tee in black." className="h-full bg-transparent w-full object-fill object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {Arry.description}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{Arry.title}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{Arry.price}</p>
        </div>
      </div>

      
    </div>
  </div>
</div>
<button class="CartBtn my-2 mx-3" onClick={onclick} >
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text">Add to Cart</p>
</button>
    </div>
    
  )
}

export default CardView
