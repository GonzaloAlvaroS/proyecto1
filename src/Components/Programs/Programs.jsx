import React from 'react'
import "./Programs.css"
import arcos_1 from "../../assets/arcos_1.png"
import arcos_2 from "../../assets/arcos_2.png"
import arcos_3 from "../../assets/arcos_3.png"
import arcos_4 from "../../assets/arcos_4.png"
import arcos_1_icon from "../../assets/arcos_1_icon.png"
import arcos_2_icon from "../../assets/arcos_2_icon.png"
import arcos_3_icon from "../../assets/arcos_3_icon.png"
import arcos_4_icon from "../../assets/arcos_4_icon.png"

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={arcos_1} alt="" />
        <div className="caption">
            <img src={arcos_1_icon} alt="" />
            <p>El enfrentamiento contra 
                          Mahito
            </p>
        </div>
      </div>
        <div className="program">
        <img src={arcos_2} alt="" />
        <div className="caption">
        <img src={arcos_2_icon} alt="" />
            <p>El evento de intercambio</p>
        </div>
      </div>
      <div className="program">
        <img src={arcos_3} alt="" />
        <div className="caption">
        <img src={arcos_3_icon} alt="" />
            <p>El inventario oculto</p>
        </div>
      </div>
      <div className="program">
        <img src={arcos_4} alt="" />
        <div className="caption">
        <img src={arcos_4_icon} alt="" />
            <p>El incidente de Shibuya</p>
            </div>
      </div>
    </div>
  )
}

export default Programs
