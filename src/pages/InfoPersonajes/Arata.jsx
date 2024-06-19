import React, { useState } from 'react'
import "./Arata.css"
import infoarata from "../../assets/infoarata.png"
import arataactual from "../../assets/arataactual.png"
import arataprincipio from "../../assets/arataprincipio.png"
import aratainfoimagen1 from "../../assets/aratainfoimagen1.png"
import aratainfoimagen2 from "../../assets/aratainfoimagen2.png"
import aratatecnica from "../../assets/aratatecnica.png"




const Arata = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infoaratatodo'>
    <div className='infoaratalineastodo'>
      <div className= "aratablue-lineA">
      <h5 className='aratalineastitulo'>Arata Nitta</h5>
    </div>
      <div className= "aratablue-lineC"></div>
      <div className= "aratablue-linemini1"></div>
      <div className= "aratablue-linemini2"></div>
      <div className= "aratablue-linemini3"></div>
      <div className= "aratablue-linemini4"></div>
      <div className= "aratablue-linemini5"></div>
      <div className= "aratablue-linemini6"></div>
      <div className= "aratablue-linemini7"></div>
      <div className= "aratablue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='aratageneral'>
      <img src={infoarata} alt="" className='infoarata'/>
      <p className='aratanombre'><b>Nombre:</b> Arata Nitta</p>
      <p className='arataedad'><b>Edad:</b> 16</p>
      <p className='aratagenero'><b>Genero:</b> Masculino</p>
      <p className='arataespecie'><b>Especie:</b> Humano</p>
      <p className='arataocupacion'><b>Ocupación:</b> Hechicero / Estudiante</p>
      <p className='aratadebut'><b>Primera Aparicion:</b> Capitulo 44</p>
      <p className='arataestado1'><b>Estado:</b></p>
      <p className={`arataestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`arataestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='arataestado'><b>Estado:</b></p>
      <p className='arataestadover' onClick={handleVerClick}>Ver</p>
      <p className={`arataestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`arataestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='aratacomparacion'>
      <img src={arataprincipio} alt="" className={`arataprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={arataactual} alt="" className={`arataactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='aratainformacionexpandida'>
      <div className='aratadescripcion'>
        <h1>Descripción:</h1>
        <p>Arata Nitta es un personaje de soporte en Jujutsu Kaisen. Es estudiante de primer año en la Escuela de Hechiceria en Kioto y el hermano menor de Akari Nitta.</p>
      </div>
      <div className='arataap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='arataapariencia'>Arata es un joven de altura mayor al promedio (1.76cm) con cabello rubio y lacio que llega hasta su menton. Posee ojos pequeños de color marron y cejas del mismo color que su cabello.</p>
        <p className='aratapersonalidad'>Es una persona amable y timida que contrasta mucho con la personalidad de Aoi Todo. Es una persona nerviosa en situaciones peligrosas, pero valiente a pesar de ello. En el Incidente de Shibuya, trato a Nobara con su tecnica a pesar de su estado despues de que Mahito la transfiguro. Se encargo de darle a Yuji Itadori un rayo de esperanza diciendole que hay una minima posibilidad de que Nobara siguiera viva, pero le hizo saber que no queria decepcionarlo si esa posibilidad no se cumplia.</p>
      </div>
      <div className='aratahab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='arataoverall'>Arata es un estudiante de primer año y un hechicero de tipo no combatiente. Aparenta no tener mucha experiencia, pero su tecnica lo hace muy util a pesar de su falta de habilidad en el combate. Tiene conocimiento basico de primeros auxilios y cualquier tipo de tecnica sanadora es extremadamente raro entre hechiceros, convirtiendolo en alguien muy valioso.</p>
        <img src={aratainfoimagen1} alt="" className='aratainfoimagen1'/>
        <img src={aratainfoimagen2} alt="" className='aratainfoimagen2'/>

    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='aratalineas2'>
          <div className= "aratablue-line-subtopA">
          <h5 className='aratalineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "aratablue-line-subtopB2"></div>
          <div className= "aratablue-line-subtopC2"></div>
          <div className= "aratablue-line-subtopD2"></div>
        </div>

        <div className='aratasublineas2'>
          <div className= "aratablue-line-subtopA-1"></div>
          <div className= "aratablue-line-subtopB2-1"></div>
        </div>
      </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="aratainfo-todo2">
           <div className="aratainfo-left2">
              <div className="aratatecnicainnata">
              <h3> ● Tecnica de Arata</h3>
              <p>Tecnica que permite que las heridas no empeoren. La tecnica no puede curar heridas, pero puede detener posibles hemorragias y anular completamente el dolor. Esto solo se aplica con heridas ya hechas antes de que la tecnica se realize. Arata uso su tecnica por primera vez con Yuji Itadori y detuvo el empeoramiento de las heridas que le provoco Mahito en el Incidente de Shibuya.</p>
              </div>
           </div> 
           <div className="aratainfo-right2">
              <img src={aratatecnica} alt="" className="aratatecnicas1"/>
              </div>
        </div> 
    </div>  
    </div>
  )
}

export default Arata
