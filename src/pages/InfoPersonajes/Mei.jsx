import React, { useState } from 'react'
import "./Mei.css"
import infomei from "../../assets/infomei.png"
import meiactual from "../../assets/meiactual.png"
import meiprincipio from "../../assets/meiprincipio.png"
import meiinfoimagen1 from "../../assets/meiinfoimagen1.png"
import meienergiamaldita from "../../assets/meienergiamaldita.png"
import meitecnica from "../../assets/meitecnica.png"
import meichoquedecuervo from "../../assets/meichoquedecuervo.png"



const Mei = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infomeitodo'>
    <div className='infomeilineastodo'>
      <div className= "meiblue-lineA">
      <h5 className='meilineastitulo'>Mei Mei</h5>
    </div>
      <div className= "meiblue-lineC"></div>
      <div className= "meiblue-linemini1"></div>
      <div className= "meiblue-linemini2"></div>
      <div className= "meiblue-linemini3"></div>
      <div className= "meiblue-linemini4"></div>
      <div className= "meiblue-linemini5"></div>
      <div className= "meiblue-linemini6"></div>
      <div className= "meiblue-linemini7"></div>
      <div className= "meiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='meigeneral'>
      <img src={infomei} alt="" className='infomei'/>
      <p className='meinombre'><b>Nombre:</b> Mei Mei</p>
      <p className='meiedad'><b>Edad:</b> 30(+)</p>
      <p className='meigenero'><b>Genero:</b> Femenino</p>
      <p className='meiespecie'><b>Especie:</b> Humano</p>
      <p className='meiocupacion'><b>Ocupación:</b> Hechicera</p>
      <p className='meidebut'><b>Primera Aparicion:</b> Capitulo 17</p>
      <p className='meiestado1'><b>Estado:</b></p>
      <p className={`meiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`meiestado3 ${showActual ? 'hidden' : ''}`}>Viva</p>
      <p className='meiestado'><b>Estado:</b></p>
      <p className='meiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`meiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`meiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='meicomparacion'>
      <img src={meiprincipio} alt="" className={`meiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={meiactual} alt="" className={`meiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='meiinformacionexpandida'>
      <div className='meidescripcion'>
        <h1>Descripción:</h1>
        <p>Mei Mei es un personaje secundario relevante en Jujutsu Kaisen. Es una hechicera de Primer Grado que solo trabaja por dinero. Es la hermana mayor de Ui Ui y fue compañera de Satoru Gojo y Suguru Geto durante su tiempo en la escuela de hechiceria.</p>
      </div>
      <div className='meiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='meiapariencia'>Mei Mei es una mujer alta (1.76cm) la cual posee un cabello muy largo de color plateado con un toque de azul normalmente con un estilo de 2 trenzas, una que cubre su cara o la otra detras de su cabeza. Tiene pequeños ojos marrones y cejas muy finas.</p>
        <p className='meipersonalidad'>Es una mujer muy calmada y relajada la cual mantiene su comportamiento en cualquier situacion. Al ser muy honesta, Mei es muy abierta en el hecho de ser codiciosa y no acepta misiones si no tienen una recompensa monetaria. El dinero parece ser lo mas importante de su vida y solo ejerce como hechicera porque le pagan. A pesar de sus morales cuestionables, Mei Mei se mantiene amigable con sus aliados, incluso llegando a reconocer la fuerza y el potencial que tienen algunos.</p>
      </div>
      <div className='meihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='meifuerza'>Mei Mei es una hechicera de Primer Grado reconocida por ser una luchadora mas que capaz. En el pasado, Satoru Gojo menciono que Mei Mei era fuerte, palabras que no se deben de tomar a la ligera proveniendo del hechicero mas fuerte. Originalmente, Mei Mei creia que habia nacido con una tecnica innata debil, causando que entrenara su cuerpo para ser mas efectiva en el combate cercano. Su fuerza es equivalente a la de un hechicero de Primer Grado, pudiendo rivalizar con maldiciones de Categoria Especial.</p>
        <p className='meivelocidadresistencia'>No se ha visto mucho sobre su velocidad y su resistencia, pero teniendo en cuenta su grado como hechicera, se puede deducir que es muy veloz y muy resistente.        </p>
        <p className='meiskill'>Es una excelente combatiente usando su hacha de batalla, arma que casi siempre lleva consigo en peleas. Puede manejar su arma con extrema velocidad y precision teniendo en cuenta el gran tamaño del hacha. Con un solo golpe de su hacha fue capaz de matar a un usuario maldito y cortar los brazos de una maldicion de Categoria Especial.</p>
        <p className='meiaprendiz'>Mei Mei tiene mucha experiencia combatiendo maldiciones y es muy astuta cuando batalla con ellos. Siempre actua de forma calmada y analiza muy bien la situacion para crear un plan que funcione al 100%. Incluso bajo presion debido al estar en un dominio que podia matarla en 3 segundos, Mei Mei actuo de forma tranquila e ideo un plan que logro ejecutar a la perfeccion, logrando salir del dominio ilesa.</p>
        <img src={meiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='meilineas'>
          <div className= "meiblue-line-subtopA">
          <h5 className='meilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "meiblue-line-subtopB"></div>
          <div className= "meiblue-line-subtopC"></div>
          <div className= "meiblue-line-subtopD"></div>
        </div>

        <div className='meisublineas'>
          <div className= "meiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='meilineas2'>
          <div className= "meiblue-line-subtopA">
          <h5 className='meilineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "meiblue-line-subtopB2"></div>
          <div className= "meiblue-line-subtopC2"></div>
          <div className= "meiblue-line-subtopD2"></div>
        </div>

        <div className='meisublineas2'>
          <div className= "meiblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='meilineas3'>
          <div className= "meiblue-line-subtopA">
          <h5 className='meilineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "meiblue-line-subtopB3"></div>
          <div className= "meiblue-line-subtopC3"></div>
          <div className= "meiblue-line-subtopD3"></div>
        </div>

        <div className='meisublineas3'>
          <div className= "meiblue-line-subtopB3-1"></div>
        </div>  
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="meiinfo-todo">
           <div className="meiinfo-left">
              <div className="meicantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>Mei Mei tiene una gran cantidad de energia maldita como hechicera. Entreno la manipulacion de energia maldita dentro de su cuerpo hasta un punto donde seguir mejorando como luchadora era imposible. Alcanzo su limite fisico, pero esto tambien la hizo experta en usar sus habilidades fisicas mejoradas con energia maldita.</p>
              </div>
           </div> 
           <div className="meiinfo-right">
              <img src={meienergiamaldita} alt="" className="meitecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="meiinfo-todo2">
           <div className="meiinfo-left2">
              <div className="meimanipulacioncuervos">
              <h3> ● Manipulacion de Cuervos (Black Bird Manipulation)</h3>
              <p>Tecnica que permite manipular cuervos telepaticamente y poder ver lo que ellos ven. Para manipularlos, Mei Mei utiliza energia maldita y puede manipular varios al mismo tiempo desde una gran distancia.</p>
              </div>
           </div> 
           <div className="meiinfo-right2">
              <img src={meitecnica} alt="" className="meitecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="meiinfo-todo3">
           <div className="meiinfo-left3">
              <div className="meichoquedecuervo">
              <h3> ● Choque de Cuevo (Bird Strike)</h3>
              <p>Extension de la tecnica Manipulacion de Cuervos. Usando un pacto, Mei Mei fuerza a un cuevo a cometer suicido a cambio de exceder los limites de la poca energia maldita que posee un cuervo. Imbuido con grandes niveles de energia maldita, el cuevo embiste al objetivo causando un daño devastador capaz de exorcizar a una maldicion de Categoria Especial de un solo golpe. Solo Satoru Gojo ha sido capaz de sobrevivir a esta tecnica.</p>
              </div>
           </div> 
           <div className="meiinfo-right3">
              <img src={meichoquedecuervo} alt="" className="meitecnicas1"/>
           </div>
        </div>   
    </div>  
    </div>
  )
}

export default Mei