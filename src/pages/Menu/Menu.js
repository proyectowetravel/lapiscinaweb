import React,{useState} from "react";
import Banner2 from "../../img/banner2.jpg";
import Loader from "../../components/Loader/Loader"
import "./Menu.scss";

const Menu = () => {

  const [img,setImg]=useState(true)
  
  return (
    <div className="Menu">
      {img?<img src={Banner2} data-aos="zoom-in" alt="" /> : <Loader/>}
      
      <section data-aos="fade-in" className="menu-header">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </section>
    </div>
  );
};

export default Menu;
