import React, { useState } from 'react'
import "./Miwa.css"
import infomiwa from "../../assets/infomiwa.png"
import miwaactual from "../../assets/miwaactual.png"
import miwaprincipio from "../../assets/miwaprincipio.png"
import miwainfoimagen1 from "../../assets/miwainfoimagen1.png"
import miwainfoimagen2 from "../../assets/miwainfoimagen2.png"
import miwaenergiamaldita from "../../assets/miwaenergiamaldita.png"
import miwadesenvaine from "../../assets/miwadesenvaine.png"
import miwadominiosimple from "../../assets/miwadominiosimple.png"



const Miwa = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infomiwatodo'>
    <div className='infomiwalineastodo'>
      <div className= "miwablue-lineA">
      <h5 className='miwalineastitulo'>Kasumi Miwa</h5>
    </div>
      <div className= "miwablue-lineC"></div>
      <div className= "miwablue-linemini1"></div>
      <div className= "miwablue-linemini2"></div>
      <div className= "miwablue-linemini3"></div>
      <div className= "miwablue-linemini4"></div>
      <div className= "miwablue-linemini5"></div>
      <div className= "miwablue-linemini6"></div>
      <div className= "miwablue-linemini7"></div>
      <div className= "miwablue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='miwageneral'>
      <img src={infomiwa} alt="" className='infomiwa'/>
      <p className='miwanombre'><b>Nombre:</b> Kasumi Miwa</p>
      <p className='miwaedad'><b>Edad:</b> 17</p>
      <p className='miwagenero'><b>Genero:</b> Femenino</p>
      <p className='miwaespecie'><b>Especie:</b> Humano</p>
      <p className='miwaocupacion'><b>Ocupación:</b> Hechicera / Estudiante</p>
      <p className='miwadebut'><b>Primera Aparicion:</b> Capitulo 8</p>
      <p className='miwaestado1'><b>Estado:</b></p>
      <p className={`miwaestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`miwaestado3 ${showActual ? 'hidden' : ''}`}>Viva</p>
      <p className='miwaestado'><b>Estado:</b></p>
      <p className='miwaestadover' onClick={handleVerClick}>Ver</p>
      <p className={`miwaestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`miwaestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='miwacomparacion'>
      <img src={miwaprincipio} alt="" className={`miwaprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={miwaactual} alt="" className={`miwaactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='miwainformacionexpandida'>
      <div className='miwadescripcion'>
        <h1>Descripción:</h1>
        <p>Kasumi Miwa es un personaje de soporte en Jujutsu Kaisen. Es discipula del hechicero Atsuya Kusakabe y es estudiante de segundo año en la Escuela de Hechiceria de Kioto.</p>
      </div>
      <div className='miwaap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='miwaapariencia'>Miwa es una joven medianamente alta (1.68cm) con cabello largo celeste que se extiende pasando su hombro. Posee ojos azules y un flequillo asimetrico.</p>
        <p className='miwapersonalidad'>Es una persona amable, de buen corazon y trabajadora la cual no es parecida a sus compañeros de escuela. Miwa quiere convertirse en una hechicera reconocida para hacer dinero y es fan de Satoru Gojo. Constantemente se llama inutil a si misma y tiene miedo que su debilidad cause problemas cuando otros intenten protegerla. Sin embargo, con la motivacion correcta, Miwa esta dispuesta a arriesgar su vida en contra de un enemigo mas poderoso que ella.</p>
      </div>
      <div className='miwahab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='miwaoverall'>Miwa es una hechicera que utiliza las tecnicas del Nuevo Estilo Sombrio. Tiene el nivel de un hechicero promedio y no posee una tecnica innata. Es capaz de usar las tecnicas del Nuevo Estilo Sombrio de forma efectiva junto con su espada como se vio en la Parada Nocturna de los 100 Demonios. Sin embargo, no fue rival para Maki en el Evento de Intercambio y sus esfuerzos en contra de un hechicero poderoso como Kenjaku fueron inutiles.</p>
        <img src={miwainfoimagen1} alt="" className='miwainfoimagen1'/>
        <img src={miwainfoimagen2} alt="" className='miwainfoimagen2'/>

    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='miwalineas'>
          <div className= "miwablue-line-subtopA">
          <h5 className='miwalineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "miwablue-line-subtopB"></div>
          <div className= "miwablue-line-subtopC"></div>
          <div className= "miwablue-line-subtopD"></div>
        </div>

        <div className='miwasublineas'>
          <div className= "miwablue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Nuevo Estilo Sombrio de "Informacion Expandida" */} 

        <div className='miwalineas2'>
          <div className= "miwablue-line-subtopA">
          <h5 className='miwalineassubtitulo2'>Tecnicas Nuevo Estilo Sombrio</h5>
          </div>
          <div className= "miwablue-line-subtopB2"></div>
          <div className= "miwablue-line-subtopC2"></div>
          <div className= "miwablue-line-subtopD2"></div>
        </div>

        <div className='miwasublineas2'>
          <div className= "miwablue-line-subtopA-1"></div>
          <div className= "miwablue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Antidominio de "Informacion Expandida" */}      

        <div className='miwalineas3'>
          <div className= "miwablue-line-subtopA">
          <h5 className='miwalineassubtitulo2'>Tecnicas Antidominio</h5>
          </div>
          <div className= "miwablue-line-subtopB3"></div>
          <div className= "miwablue-line-subtopC3"></div>
          <div className= "miwablue-line-subtopD3"></div>
        </div>

        <div className='miwasublineas3'>
          <div className= "miwablue-line-subtopB3-1"></div>
          </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="miwainfo-todo">
           <div className="miwainfo-left">
              <div className="miwacantidadenergia">
              <h3> ● Basica Cantidad de Energia Maldita</h3>
              <p>Miwa tiene niveles de energia equivalentes a un hechicero promedio. No posee una tecnica innata, pero puede ver maldiciones y usar tecnicas antidominio como el Dominio Simple.</p>
              </div>
           </div> 
           <div className="miwainfo-right">
              <img src={miwaenergiamaldita} alt="" className="miwatecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Nuevo Estilo Sombrio de "Informacion Expandida" */}

        <div className="miwainfo-todo2">
           <div className="miwainfo-left2">
              <div className="miwadesenvaine">
              <h3> ● Desenvaine (Batto Sword Drawing)</h3>
              <p>Tecnica que permite envolver la espada con energia maldita la cual rota creando una velocidad increible cuando se desenvaina la espada. Es la tecnica mas rapida de el Nuevo Estilo Sombrio.</p>
              </div>
           </div> 
           <div className="miwainfo-right2">
              <img src={miwadesenvaine} alt="" className="miwatecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Antidominio de "Informacion Expandida" */}

        <div className="miwainfo-todo3">
           <div className="miwainfo-left3">
              <div className="miwadominiosimple">
              <h3> ● Dominio Simple (Simple Domain)</h3>
              <p>Conocido como "El dominio de los debiles". Fue creada por Sadatsuna Ashiya durante la Era Heian. Expande un pequeño dominio en los pies del usuario. Miwa crea un dominio de 2.21 metros de radio alrededor de ella. Cualquier cosa que entre al dominio es automaticamente interceptada por la espada de Miwa. Cuando se realiza la tecnica, Miwa siempre tiene que tener sus pies en la misma posicion como parte de un pacto.</p>
              </div>
           </div> 
           <div className="miwainfo-right3">
              <img src={miwadominiosimple} alt="" className="miwatecnicas1"/>
           </div>
        </div> 
    </div>  
    </div>
  )
}

export default Miwa

