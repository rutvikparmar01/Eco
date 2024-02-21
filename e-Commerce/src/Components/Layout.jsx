import React from 'react'
import Navbar from './Navbar'
//import App from '../App'
import { Outlet } from 'react-router-dom'
import Product from './Product'
// import Product from './Product'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    
      
    </div>
  )
}

export default Layout
