import React from 'react'
import "./Hero.css"
import eye from "../../assets/eye.png"


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>Un nuevo mundo mas allá del entendimiento humano</h1>
      <p>Despues de la muerte de su abuelo, la vida de Yuji Itadori dará un giro
      repentino despues de descubrir un mundo peligroso y cruel: El mundo de la hechicería.
      </p>
      <button className='btn'>Mas información <img src={eye} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
