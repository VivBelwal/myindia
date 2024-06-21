import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import ProductsPage from '../Pages/ProductsPage'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
