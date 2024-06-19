import React, { useState } from 'react'
import "./Mai.css"
import infomai from "../../assets/infomai.png"
import maiactual from "../../assets/maiactual.png"
import maiprincipio from "../../assets/maiprincipio.png"
import maiinfoimagen1 from "../../assets/maiinfoimagen1.png"
import maiinfoimagen2 from "../../assets/maiinfoimagen2.png"
import maienergiamaldita from "../../assets/maienergiamaldita.png"
import maitecnica from "../../assets/maitecnica.png"




const Mai = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infomaitodo'>
    <div className='infomailineastodo'>
      <div className= "maiblue-lineA">
      <h5 className='mailineastitulo'>Mai Zenin</h5>
    </div>
      <div className= "maiblue-lineC"></div>
      <div className= "maiblue-linemini1"></div>
      <div className= "maiblue-linemini2"></div>
      <div className= "maiblue-linemini3"></div>
      <div className= "maiblue-linemini4"></div>
      <div className= "maiblue-linemini5"></div>
      <div className= "maiblue-linemini6"></div>
      <div className= "maiblue-linemini7"></div>
      <div className= "maiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='maigeneral'>
      <img src={infomai} alt="" className='infomai'/>
      <p className='mainombre'><b>Nombre:</b> Mai Zenin</p>
      <p className='maiedad'><b>Edad:</b> 16</p>
      <p className='maigenero'><b>Genero:</b> Femenino</p>
      <p className='maiespecie'><b>Especie:</b> Humano</p>
      <p className='maiocupacion'><b>Ocupación:</b> Hechicera / Estudiante</p>
      <p className='maidebut'><b>Primera Aparicion:</b> Capitulo 8</p>
      <p className='maiestado1'><b>Estado:</b></p>
      <p className={`maiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`maiestado3 ${showActual ? 'hidden' : ''}`}>Fallecida</p>
      <p className='maiestado'><b>Estado:</b></p>
      <p className='maiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`maiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`maiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='maicomparacion'>
      <img src={maiprincipio} alt="" className={`maiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={maiactual} alt="" className={`maiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='maiinformacionexpandida'>
      <div className='maidescripcion'>
        <h1>Descripción:</h1>
        <p>Mai Zenin es un personaje de soporte relevante en Jujutsu Kaisen. Es estudiante de segundo año en la Escuela de Hechiceria de Kioto, miembro del Clan Zenin y hermana gemela menor de Maki Zenin.</p>
      </div>
      <div className='maiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='maiapariencia'>Mai es una chica alta (1.70cm) y practicamente identica que su hermana gemela Maki Zenin, pero con un corte de cabello mas corto. Su cabello llega hasta su cuello y es de color verde oscuro. Tambien posee ojos de color marron oscuro y cejas finas.</p>
        <p className='maipersonalidad'>Al igual que su hermana, Mai fue menospreciada por su clan durante su estancia. Mai estaba contenta con vivir como una sirvienta y preferia hacer quehaceres que pelear. Por otro lado, Maki queria desafiar a su clan y convertirse en hechicera. Las repercusiones de la rebeldia de Maki forzaron a Mai a estudiar para convertirse en hechicera. Desde ese momento, Mai estaria resentida con Maki por forzarlas a vivir esa vida. Mai es una hechicera que sacaba sus frustraciones menospreciando a otros. Tiene una personalidad ruda y le encanta subirse su propio ego. Sin embargo, Mai se lleva muy bien con sus compañeros de escuela, sobre todo con Momo Nishimiya y Kasumi Miwa. Despues de que Ogi Zenin, su propio padre, encerrara a Mai y a Maki en una recamara de tortura y ambas estando al borde de la muerte, Mai decide dejar los sentimientos a un lado y decide dar su vida para darle a Maki una herramienta con la que pueda vivir. A cambio, Mai le pidio un ultimo favor antes de morir: "Destruye todo".</p>
      </div>
      <div className='maihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='maioverall'>Mai es una hechicera de Tercer Grado con poco talento como hechicera. Nacio con una tecnica innata y con mas energia maldita que Maki, pero no la necesaria para que su tecnica sea efectiva. Mai no es una combatiente habil debido a que fue forzada a convertirse en hechicera cuando Maki abandono el Clan Zenin. A pesar de esto, Mai siempre intenta seguir adelante con las habilidades que tiene. Es una experta usando armas de fuego y se ha mostrado su increible precision con estas como se vio cuando abrio fuego contra Kenjaku en el Incidente de Shibuya, este ultimo teniendo que hacer un esfuerzo en bloquear los disparos.</p>
        <img src={maiinfoimagen1} alt="" className='maiinfoimagen1'/>
        <img src={maiinfoimagen2} alt="" className='maiinfoimagen2'/>

    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='mailineas'>
          <div className= "maiblue-line-subtopA">
          <h5 className='mailineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "maiblue-line-subtopB"></div>
          <div className= "maiblue-line-subtopC"></div>
          <div className= "maiblue-line-subtopD"></div>
        </div>

        <div className='maisublineas'>
          <div className= "maiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='mailineas2'>
          <div className= "maiblue-line-subtopA">
          <h5 className='mailineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "maiblue-line-subtopB2"></div>
          <div className= "maiblue-line-subtopC2"></div>
          <div className= "maiblue-line-subtopD2"></div>
        </div>

        <div className='maisublineas2'>
          <div className= "maiblue-line-subtopA-1"></div>
          <div className= "maiblue-line-subtopB2-1"></div>
        </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="maiinfo-todo">
           <div className="maiinfo-left">
              <div className="maicantidadenergia">
              <h3> ● Baja Cantidad de Energia Maldita</h3>
              <p>Debido a que nacio siendo una gemela, Mai posee una cantidad de energia maldita por arriba del promedio para un humano, pero por debajo del promedio para un hechicero. Mai puede imbuir su arma con energia maldita y disparar balas reforzadas. Ni ella ni Maki nacieron con alguna tecnica hereditaria del Clan Zenin.</p>
              </div>
           </div> 
           <div className="maiinfo-right">
              <img src={maienergiamaldita} alt="" className="maitecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="maiinfo-todo2">
           <div className="maiinfo-left2">
              <div className="maiconstruccion">
              <h3> ● Construcción (Construction)</h3>
              <p>Tecnica que permite crear objetos de la misma nada. Esta tecnica consume una inmensa cantidad de energia maldita cuando se usa. Debido a que tiene un nivel muy bajo de energia maldita, el limite de Mai es pueder crear una bala al dia y las conscecuencias de activar su tecnica son severas. Estando herida, Mai pudo crear una herramienta maldita a cambio de perder la vida.</p>
              </div>
           </div> 
           <div className="maiinfo-right2">
              <img src={maitecnica} alt="" className="maitecnicas1"/>
              </div>
        </div> 
    </div>  
    </div>
  )
}

export default Mai

