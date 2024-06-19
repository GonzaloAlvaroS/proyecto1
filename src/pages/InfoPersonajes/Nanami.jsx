import React, { useState } from 'react'
import "./Nanami.css"
import infonanami from "../../assets/infonanami.png"
import nanamiactual from "../../assets/nanamiactual.png"
import nanamiprincipio from "../../assets/nanamiprincipio.png"
import nanamiinfoimagen1 from "../../assets/nanamiinfoimagen1.png"
import controlenergiamaldita1 from "../../assets/controlenergiamaldita1.png"
import nanamidestellonegro from "../../assets/nanamidestellonegro.png"
import nanamitecnica from "../../assets/nanamitecnica.png"
import nanamicolapso from "../../assets/nanamicolapso.png"



const Nanami = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infonanamitodo'>
    <div className='infonanamilineastodo'>
      <div className= "nanamiblue-lineA">
      <h5 className='nanamilineastitulo'>Kento Nanami</h5>
    </div>
      <div className= "nanamiblue-lineC"></div>
      <div className= "nanamiblue-linemini1"></div>
      <div className= "nanamiblue-linemini2"></div>
      <div className= "nanamiblue-linemini3"></div>
      <div className= "nanamiblue-linemini4"></div>
      <div className= "nanamiblue-linemini5"></div>
      <div className= "nanamiblue-linemini6"></div>
      <div className= "nanamiblue-linemini7"></div>
      <div className= "nanamiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='nanamigeneral'>
      <img src={infonanami} alt="" className='infonanami'/>
      <p className='nanaminombre'><b>Nombre:</b> Kento Nanami</p>
      <p className='nanamiedad'><b>Edad:</b> 28</p>
      <p className='nanamigenero'><b>Genero:</b> Masculino</p>
      <p className='nanamiespecie'><b>Especie:</b> Humano</p>
      <p className='nanamiocupacion'><b>Ocupación:</b> Hechicero</p>
      <p className='nanamidebut'><b>Primera Aparicion:</b> Capitulo 8</p>
      <p className='nanamiestado1'><b>Estado:</b></p>
      <p className={`nanamiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`nanamiestado3 ${showActual ? 'hidden' : ''}`}>Fallecido</p>
      <p className='nanamiestado'><b>Estado:</b></p>
      <p className='nanamiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`nanamiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`nanamiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='nanamicomparacion'>
      <img src={nanamiprincipio} alt="" className={`nanamiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={nanamiactual} alt="" className={`nanamiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='nanamiinformacionexpandida'>
      <div className='nanamidescripcion'>
        <h1>Descripción:</h1>
        <p>Kento Nanami es un personaje secundario importante en Jujutsu Kaisen. Fue estudiante de la Escuela de Hechiceria de Tokio donde fue compañero de año inferior de Satoru Gojo y Suguru Geto. Es un hechicero de Primer Grado y, despues de la introduccion de Gojo, fue mentor de Yuji Itadori.</p>
      </div>
      <div className='nanamiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='nanamiapariencia'>Nanami es un hombre alto (1.84cm) con una contextura musculosa. Posee cabello rubio con un estilo con una ordenada raya derecha. Tiene ojos marrones y siempre usa unos lentes de sol caracteristicos. Durante el Incidente de Shibuya, Nanami pierde un ojo peleando contra Dagon y despues es dejado en un estado horrible debido a que Jogo le quemo toda la parte izquierda de su cuerpo.</p>
        <p className='nanamipersonalidad'>Es una persona muy sabia y reservada y a menudo es tan tranquilo e indeferente que parece alguien distante. Parece ser del tipo de persona que es muy seria al trabajar, pero en verdad Nanami sabe como separar sus sentimientos del trabajo. Nanami no tiene problemas en mostrar si algo lo fastidia o irrita y normalmente es muy impaciente. Sin embargo, Nanami realmente es sociable y no tiene problemas con tener conversaciones inteligentes. Despues de terminar la escuela de hechiceria, Nanami abandono el mundo de la hechiceria para convertirse en un hombre de negocios, pero tiempo despues volvió debido a que no se sentia apreciado y no creia que su trabajo como hombre de negocios tenia un impacto significativo en alguien. En contraste, trabajar como hechicero le permite tener apreciacion de gente inocente. Para Nanami, eso es mas que suficiente para poder vivir sin arrepentimientos.        </p>
      </div>
      <div className='nanamihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='nanamifuerza'>Nanami es el ejemplo perfecto de como deberia ser un hechicero de Primer Grado. Yuji Itadori y Takuma Ino admiran a Nanami y lo usan como ejemplo a a seguir. Satoru Gojo confio y le encargo a Nanami para que sirva como mentor para Yuji debido a sus rasgos como persona y como hechicero. Su fuerza es muy superior a la del promedio, permitiendole romper paredes con un solo golpe y pelear mano a mano con maldiciones de Grado Especial como Mahito y Dagon.</p>
        <p className='nanamivelocidadresistencia'>Su velocidad tambien se compara con velocidades de maldiciones de Grado Especial como se vio en sus combates contra Mahito. Nanami es uno de los hechiceros mas resistentes que hayan existido. Pudo soportar ser tocado por la tecnica de Mahito. Cuando Haruta Shigemo lo pateo, el impacto no lo movio ni un centimetro y cuando lo ataco con su espada, no le hizo ni un rasguño. Tiempo despues, pudo soportar el ataque de incontables Shikigamis durante un minuto provenientes del dominio de Dagon y luego soporto ser atacado por Jogo. Sobreviviendo a ambos encuentros, Nanami fue capaz de seguir peleando a diferencia de Maki, que quedó en un estado de casi muerta, y Naobito, que murio debido a las quemaduras de Jogo.</p>
        <p className='nanamiskill'>Nanami es un experto en el combate cuerpo a cuerpo y usando su herramienta maldita significativa. Su tecnica innata funciona con sus puños y con su arma. Como se vio en su combate contra Haruta Shigemo, Haruta pudo haber muerto de un solo golpe de Nanami si no fuese por su tecnica innata.</p>
        <p className='nanamiaprendiz'>Su intelecto es su arma mas poderosa. Nanami siempre piensa en una estrategia para vencer a su rival antes de pelear, a excepcion de su combate contra Haruta en el cual Nanami estaba cegado por la ira y frustracion al ver a Ijichi herido de gravedad y a varios asistentes asesinados. Es un luchador tactico y posee una precision inimaginable, permitiendole casi nunca fallar un ataque y esquivar ataques de su oponente con facilidad.</p>
        <img src={nanamiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='nanamilineas'>
          <div className= "nanamiblue-line-subtopA">
          <h5 className='nanamilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "nanamiblue-line-subtopB"></div>
          <div className= "nanamiblue-line-subtopC"></div>
          <div className= "nanamiblue-line-subtopD"></div>
        </div>

        <div className='nanamisublineas'>
          <div className= "nanamiblue-line-subtopA-1"></div>
          <div className= "nanamiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='nanamilineas2'>
          <div className= "nanamiblue-line-subtopA">
          <h5 className='nanamilineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "nanamiblue-line-subtopB2"></div>
          <div className= "nanamiblue-line-subtopC2"></div>
          <div className= "nanamiblue-line-subtopD2"></div>
        </div>

        <div className='nanamisublineas2'>
          <div className= "nanamiblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='nanamilineas3'>
          <div className= "nanamiblue-line-subtopA">
          <h5 className='nanamilineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "nanamiblue-line-subtopB3"></div>
          <div className= "nanamiblue-line-subtopC3"></div>
          <div className= "nanamiblue-line-subtopD3"></div>
        </div>

        <div className='nanamisublineas3'>
          <div className= "nanamiblue-line-subtopB3-1"></div>
        </div>  
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="nanamiinfo-todo">
           <div className="nanamiinfo-left">
              <div className="nanamicantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>Nanami tiene grandes niveles de energia maldita. Puede usar su tecnica innata y reforzar su cuerpo con energia maldita sin cansarse. Su mera presencia puede paralizar a hechiceros de menor nivel y su gran control de la energia maldita se puede presenciar con sus pactos e incluso pudo reforzar su alma con energia maldita para evitar los efectos de la tecnica innata de Mahito.</p>
              </div>
              <div className="nanamidestellonegro">
              <h3> ● Destello Negro (Black Flash)</h3>
              <p>Un fenomeno que crea una una distorsion en el espacio cuando un usuario conecta un impacto con energia maldita en un lapso de 0.000001 segundos despues de un ataque fisico, causando que la energia maldita brille de color negro. El impacto es 2.5 mas poderoso que uno normal y no se puede realizar a voluntad. Antes de que Yuji peleara contra Hanami, Nanami tenia el record de maximos destellos negros consecutivos en la Parada Nocturna de los 100 Demonios, aunque dice que tuvo suerte.</p>
              </div>
           </div> 
           <div className="nanamiinfo-right">
              <img src={controlenergiamaldita1} alt="" className="nanamitecnicas1"/>
              <img src={nanamidestellonegro} alt="" className="nanamitecnicas2"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="nanamiinfo-todo2">
           <div className="nanamiinfo-left2">
              <div className="nanamiproporcion">
              <h3> ● Técnica de Proporción (Ratio Technique)</h3>
              <p>Tecnica que permite dividir al objetivo en 10 lineas y forzar a crear un punto debil en una proporción de 7 a 3. El objetivo puede ser tanto un objeto como un oponente. Nanami puede crear un punto debil a un objetivo sin importar su forma, tamaño o densidad y puede escoger que parte dividir, incluyendo el torso, brazos, piernas o cabeza del objetivo.</p>
              </div>
           </div> 
           <div className="nanamiinfo-right2">
              <img src={nanamitecnica} alt="" className="nanamitecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="nanamiinfo-todo3">
           <div className="nanamiinfo-left3">
              <div className="nanamicolapso">
              <h3> ● Colapso (Collapse)</h3>
              <p>Extension de la Tecnica de Proporcion. Crea un punto debil de las estructuras de los alrededores permitiendole a Nanami destruirlas de un solo golpe. Nanami uso esta tecnica por primera vez en su enfrentamiento contra Mahito para encerrarlo destruyendo el tunel subterraneo.</p>
              </div>
           </div> 
           <div className="nanamiinfo-right3">
              <img src={nanamicolapso} alt="" className="nanamitecnicas1"/>
           </div>
        </div>   
    </div>  
    </div>
  )
}

export default Nanami