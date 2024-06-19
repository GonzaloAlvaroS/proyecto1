import React from 'react'
import "./TecnicasAD.css"
import hollowbasket from "../../assets/hollowbasket.png"
import dominiosimple from "../../assets/dominiosimple.png"
import fallingblossom from "../../assets/fallingblossom.png"
import amplificaciondominio from "../../assets/amplificaciondominio.png"

const TecnicasAD = () => {
  return (
    <div className='tecnicastADtodo'>
      <div className='tecnicasADlineas'>
      <div className= "ADblue-line-subtopA"></div>
      <div className= "ADblue-line-subtopB"></div>
      <div className= "ADblue-line-subtopC"></div>
      <div className= "ADblue-line-subtopD"></div>
      </div>
      <div className='tecnicasADsublineas'>
      <div className= "ADblue-line-subtopA-1"></div>
      <div className= "ADblue-line-subtopA-2"></div>
      <div className= "ADblue-line-subtopA-3"></div>
      <div className= "ADblue-line-subtopB-1"></div>
      </div> 
      <div className='tecnicasADinfo'>
          <h1>Tecnicas Antidominio</h1>
          <p>Las tecnicas antidominio son tecnicas diseñadas para contrarrestar el factor de nunca fallar que te da una expansión de dominio. Están principalmente hechas para aquellos que no pueden expandir su propio dominio por cualquier motivo. </p>
          </div>
          <div className="tecnicasMDEM-todo">
          <div className="tecnicasMDEM-left">
          <div className="hollowbasket">
            <h3> ● Canasta Hueca de Mimbre (Hollow Wicker Basket)</h3>
            <p>Tecnica que crea una barrera esferica con forma de canasta la cual rodea al usuario. Es el predecesor del Dominio Simple. </p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosAD1'>Reggie Star, Hajime Kashimo y Ryomen Sukuna</p>
            <div className="dominiosimple">
            <h3> ● Dominio Simple (Simple Domain)</h3>
            <p>Conocido como "El dominio de los debiles". Fue creada por Sadatsuna Ashiya durante la Era Heian. Expande un pequeño dominio en los pies del usuario. </p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosAD2'>Yuji Itadori, Aoi Todo, Kokichi Muta (Mechamaru), Kasumi Miwa, Satoru Gojo, Yuki Tsukumo, Atsuya Kusakabe, Takuma Ino, Choso y Ui Ui.</p>
            <div className="fallingblossom">
            <h3> ● Emoción de Pétalos Caídos (Falling Blossom Emotion)</h3>
            <p>Una tecnica secreta solo conocida por las 3 Grandes Familias. En vez de expandir un dominio, la tecnica rodea al usuario con una gran cantidad de energia maldita la cual contrarresta cualquier ataque dirigido hacia al usuario que tenga el efecto de nunca fallar de un dominio.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosAD3'>Naobito Zenin y Satoru Gojo</p>
            <div className="amplificaciondominio">
            <h3> ● Amplificación de dominio (Domain Amplification)</h3>
            <p>Tecnica que envuelve el cuerpo del usuario en un pequeño velo de su dominio para asi poder denegar cualquier tecnica maldita que entre en contacto con el. Un usuario no puede usar la Amplificación de dominio y su Tecnica Innata a la vez.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosAD4'>Hanami, Jogo, Ryomen Sukuna y Hiromi Higuruma</p>
            </div>
    <div className="tecnicasMDEM-right">
    <img src={hollowbasket} alt="" className="personajestecnicasAD1"/>
    <img src={dominiosimple} alt="" className="personajestecnicasAD2"/>
    <img src={fallingblossom} alt="" className="personajestecnicasAD3"/>
    <img src={amplificaciondominio} alt="" className="personajestecnicasAD4"/>
    </div>
    </div>
    </div>
  )
}

export default TecnicasAD
