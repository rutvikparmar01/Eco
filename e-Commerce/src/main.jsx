import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import { StoreContextProvider } from './contexts/StoreContext.jsx';
import Product from './Components/Product.jsx';
import Page from './Components/page/Page.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="cart" element={<Product />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <StoreContextProvider>
      <RouterProvider router={router} />
      <Toaster
  position="top-center"
  reverseOrder={false}
 
/>
    </StoreContextProvider>
  
);

