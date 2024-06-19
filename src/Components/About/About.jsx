import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./About.css"
import personajes from "../../assets/personajes.png"
import play_icon from "../../assets/play_icon.png"

const About = ({setPlayState}) => {
  const navigate = useNavigate();  // Hook para la navegación

  const Characters = () => {
    navigate('/characters');  // Navegar a la página de Personajes
  };

  return (
    <div className='about'>
      <div className="about-left">
        <img src={personajes} alt="" className='personajes'/>
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>PERSONAJES</h3>
        <h2>Hechiceros y Maldiciones:</h2>
        <p>Pocos nacen con el don para ser hechiceros.
           Las maldiciones nacen de los sentimientos negativos de las personas.
        </p>
        <button className='btn dark-btn' onClick={Characters}>Mas Información</button>
      </div>
    </div>
  )
}

export default About
