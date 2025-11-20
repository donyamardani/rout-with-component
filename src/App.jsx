import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Route, Routes,Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Auth from './Pages/Auth'
import Notfound from './Pages/Notfound'
import Product from './Pages/Product'
export default function App() {
  return (
    <>
    <Nav/>
    <main>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/auth' element={<Auth/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='*' element={<Notfound/>}/>
     </Routes>
    </main>
    <Footer/>
    </>
  )
}
