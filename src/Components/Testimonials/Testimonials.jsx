import "./Testimonials.css"
import next_icon from "../../assets/next_icon.png"
import back_icon from "../../assets/back_icon.png"
import opening1 from "../../assets/opening1.mp4"
import opening2 from "../../assets/opening2.mp4"
import opening3 from "../../assets/opening3.mp4"
import opening4 from "../../assets/opening4.mp4"
import { useRef } from "react"


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
     if(tx > -50){
      tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <video src={opening1} controls width="380" height="350"></video>           
                 <h3>Kaikai Kitan</h3>
                 <span><b>(El enfrentamiento contra Mahito)</b></span>
                <p>Intro de la primera parte de la primera temporada.
                  En ella se explora el mundo de la hechicería y ocurre el enfrentamiento
                  contra Mahito en la institución Satozakura.
                </p>
              </div>
            </div>
           </li> 
          <li>
            <div className="slide">
              <div className="user-info">
                <video src={opening2} controls width="380" height="350"></video>
                 <h3>Vivid Vice</h3>
                 <span><b>(El evento de intercambio)</b></span>
                <p>Intro de la segunda parte de la primera temporada.
                  En ella ocurre el evento de intercambio entre las escuelas de hechiceria
                  de Tokio y Kioto.
                </p>
              </div>
            </div>
           </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <video src={opening3} controls width="380" height="350"></video>
                  <h3>Where our blue is</h3>
                  <span><b>(El inventario oculto)</b></span>
                <p>Intro de la primera parte de la segunda temporada.
                  En ella se explora el pasado de Gojo Satoru y Geto Suguru. Ambos
                  estan encargados de proteger al Recipiente de Plasma Estelar.
                </p>
              </div>
             </div>
           </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <video src={opening4} controls width="380" height="350"></video>
                 <h3>SPECIALZ</h3>
                 <span><b>(El incidente de Shibuya)</b></span>
                <p>Intro de la segunda parte de la segunda temporada.
                  En ella ocurre el Incidente de Shibuya, una guerra entre hechiceros
                  y maldiciones.
                </p>
              </div>
            </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
