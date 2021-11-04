import React, { useState } from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import menu from "../../img/menu.png";
import menu2 from "../../img/menu2.png";
import Nav from "../Nav"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menu1, setMenu1] = useState(true);



  
  

  return (
    <div className="Header">
      <div className="container1">
        <div className="menu">

          {menu1?  <img
            src={menu}
            className="menuBurger"
            onClick={() =>{ return setShowMenu(!showMenu) , setMenu1(!menu1)} }
          ></img> :  <img
          src={menu2}
          className="menuBurger"
          onClick={() =>{ return setShowMenu(!showMenu) , setMenu1(!menu1)} }
        ></img> }
         
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>
      </div>
      {showMenu ? (
        <div className="container2">
          <Nav data={ () =>  {return setShowMenu(!showMenu) , setMenu1(!menu1)} }/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
