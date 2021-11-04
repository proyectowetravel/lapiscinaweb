import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homes from "../../pages/Home/Home"
import Menu from "../../pages/Menu/Menu"
import Reserva from "../../pages/Reserva/Reserva"
import Contact from "../../pages/Contact/Contact"
const main = () => {
  return (
    <div className="Main">
      <Routes>

    <Route path="/" element={<Homes/>}/> 
    <Route path="/menu" element={<Menu/>}/> 
    <Route path="/reserva" element={<Reserva/>}/> 
    <Route path="/contact" element={<Contact/>}/> 
      </Routes>

    </div>
  )
}

export default main
