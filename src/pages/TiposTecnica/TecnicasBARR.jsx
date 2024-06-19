import React from 'react'
import "./TecnicasBARR.css"
import barrerasimple from "../../assets/barrerasimple.png"
import cortina from "../../assets/cortina.png"
import barreravacia from "../../assets/barreravacia.png"
import barrerapura from "../../assets/barrerapura.png"
import barrerabon from "../../assets/barrerabon.png"

const TecnicasBARR = () => {
  return (
    <div className='tecnicastMDEMtodo'>
      <div className='tecnicasMDEMlineas'>
      <div className= "blue-line-subtopA"></div>
      <div className= "blue-line-subtopB"></div>
      <div className= "blue-line-subtopC"></div>
      <div className= "blue-line-subtopD"></div>
      </div>    
      <div className= "blue-line-subtopA-1"></div>
      <div className= "blue-line-subtopA-2"></div>
      <div className= "blue-line-subtopA-3"></div>
      <div className= "blue-line-subtopA-4"></div>
      <div className= "blue-line-subtopB-1"></div>
      <div className='tecnicasBARRinfo'>
          <h1>Tecnicas de Barrera</h1>
          <p>Las tecnicas de barrera son tecnicas que permiten crear territorios que sirven para ocultar, contener o denegar la entrada de entidades a ese espacio. Pueden ser personalizadas con ciertas condiciones segun el proposito, pero esto requiere un mayor grado de habilidad por parte del usuario que quiera crearlas.</p>
          </div>
          <div className="tecnicasMDEM-todo">
          <div className="tecnicasMDEM-left">
          <div className="barrerasimple">
            <h3> ● Barrera Simple</h3>
            <p>Son el tipo mas basico de barreras y sirve para ocultar, contener o denegar la entrada de entidades. Cualquiera con un minimo conocimiento y con la cantidad de energia maldita necesaria puede crear esta barrera.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosBARR1'>Cualquier usuario con poco conocimiento y energia maldita necesaria</p>
            <div className="cortina">
            <h3> ● Cortina</h3>
            <p>Es una barrera simple con el proposito de ocultar la hechiceria de las personas normales y fuerza a las maldiciones a revelarse.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosBARR2'>Cualquier usuario con conocimiento</p>
            <div className="barreravacia">
            <h3> ● Barrera Vacía</h3>
            <p>Son barreras casi completamente vacias donde el borde se muestra con forma de paneles hexagonales. Un usuario que sea muy habil con las tecnicas de barreras puede modificar la estructura del area por completo.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosBARR3'>Usuarios muy habilidosos</p>
            <div className="barrerapura">
            <h3> ● Barreras Puras</h3>
            <p>Son barreras muy superiores a las normales. Tengen creo estas barreras por todo Japon para que las barreras de los asistentes de las Escuelas de Hechiceria sean mas efectivas y a su vez suprime y contiene maldiciones. Estas barreras son un pilar muy importante para la hechicería.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosBARR4'>Tengen</p>
            <div className="barrerabon">
            <h3> ● Barrera Bon</h3>
            <p>Tipo de barrera aun mas superior que las Barreras Puras. Usando como base las Barreras Puras, Kenjaku creo las Barreras Bon para los Juegos del Sacrificio.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosBARR5'>Kenjaku</p>
            </div>
    <div className="tecnicasMDEM-right">
    <img src={barrerasimple} alt="" className="personajestecnicas1"/>
    <img src={cortina} alt="" className="personajestecnicas2"/>
    <img src={barreravacia} alt="" className="personajestecnicas3"/>
    <img src={barrerapura} alt="" className="personajestecnicas4"/>
    <img src={barrerabon} alt="" className="personajestecnicas5"/>
    </div>
    </div>
    </div>
  )
}

export default TecnicasBARR

