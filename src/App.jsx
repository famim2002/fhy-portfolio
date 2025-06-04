
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Index'
import Home from './pages/Home'
import Error404 from './pages/Error404'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route index element={<Home/>}/>
             
          </Route>
          <Route path="*" element={ <Error404/>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
