import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Campus.css"
import tecnicas1 from "../../assets/tecnicas1.png"
import tecnicas2 from "../../assets/tecnicas2.png"
import tecnicas3 from "../../assets/tecnicas3.png"
import tecnicas4 from "../../assets/tecnicas4.png"

const Campus = () => {
  const navigate = useNavigate();

  const Tecnicas = () => {
    navigate('/tecnicas');  // Navegar a la página de Personajes
  };
  
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={tecnicas1} alt="" />
        <img src={tecnicas2} alt="" />
        <img src={tecnicas3} alt="" />
        <img src={tecnicas4} alt="" />
      </div>
      <button className='btn dark-btn' onClick={Tecnicas}>Mas tecnicas</button>
    </div>
  )
}

export default Campus
