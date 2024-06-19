import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"  //Para el logo de la pagina//
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll'

const Navbar = () => {

//Para que el Navbar cambie de apariencia cuando scrolleamos la pagina//

    const[sticky, setSticky] = useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
    },[]);


const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);

}


//Para que el Navbar cambie de apariencia cuando scrolleamos la pagina// 

  return (
// "sticky" Para que el Navbar cambie de apariencia cuando scrolleamos la pagina//
     <nav className={`container ${sticky? "dark-nav" : ""}`}>   
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Principal</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Arcos</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>Personajes</Link></li>
        <li><Link to="campus" smooth={true} offset={-220} duration={500}>Contenido</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-220} duration={500}>Media</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Otros</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
