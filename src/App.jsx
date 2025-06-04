
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Index'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </Route>
          <Route path="*" element={ <Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




