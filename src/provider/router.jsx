import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from '../page/dashboard'
import Customers from '../page/customers'
import NoPage from '../page/nopage'
import Provider from '.'
import Product from '../page/products'
import Settings from '../page/settings'
import RecentOrders from '../page/recentorders'


function AppRouter() {
  return (
    <Provider>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='customers' element={<Customers/>}/>
        <Route path='profile' element={<Product/>}/>
        <Route path='recentorders' element={<RecentOrders/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route />
    </Routes>
    </BrowserRouter>

    </Provider>
  )
}

export default AppRouter;