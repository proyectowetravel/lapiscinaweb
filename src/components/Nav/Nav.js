import React ,{useState} from 'react'

import {Link} from "react-router-dom"
import "./Nav.scss"

const Nav = (props) => {

  const[li, setLi] = useState(true)


 
  
  console.log()
  return (
    <div className="Nav">

   {li? <ul>
    <li><Link to={"/"} onClick={props.data}  >Inicio</Link></li>
    <li><Link to={"/menu"} onClick={props.data}>Menu</Link></li>
    <li><Link to={"/reserva"}onClick={props.data}>Reserva</Link></li>
    <li><Link to={"/contact"}onClick={props.data}>Contacto</Link></li>



      </ul> : ""}

  
 
    
    </div>
  )
}

export default Nav
