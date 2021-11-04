import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-footer">
        <div className="hour">
          <h2>Horarios de apertura</h2>
          De lunes a domingo, a excepción del miércoles que estamos cerrados por
          descanso. 12:00h a 00:00h
        </div>
        <div className="contact">
          <h2>Contacto</h2>
          De lunes a domingo, a excepción del miércoles que estamos cerrados por
          descanso. 12:00h a 00:00h
        </div>
        <div className="info">
        <h2>Información</h2>
          De lunes a domingo, a excepción del miércoles que estamos cerrados por
          descanso. 12:00h a 00:00h
        </div>
      
      </div>
      <div className="footer-banner">
          <p>Design by I.G.D</p>
        </div>
    </div>
  );
};

export default Footer;
