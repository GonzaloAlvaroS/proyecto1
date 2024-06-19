import React from 'react'
import "./TecnicasMDEM.css"
import controlenergiamaldita from "../../assets/controlenergiamaldita.png"
import controlenergiamaldita1 from "../../assets/controlenergiamaldita1.png"
import puñodivergente from "../../assets/puñodivergente.png"
import destellonegro from "../../assets/destellonegro.png"
import tecnicainversa from "../../assets/tecnicainversa.png"

const TecnicasMDEM = () => {
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
      <div className='tecnicasMDEMinfo'>
          <h1>Manipulación de Energia Maldita</h1>
          <p>Los usuarios que poseen energia maldita pueden manipularla para potenciar sus capacidades fisicas. Fuerza, resistencia y potencia en los golpes pueden ser mejorados si se manipula correctamente la energia maldita. Otros tipos de tecnicas pueden ser creadas dependiendo del modo en la cual se manipula.</p>
          </div>
          <div className="tecnicasMDEM-todo">
          <div className="tecnicasMDEM-left">
          <div className="aumentarpotencia">
            <h3> ● Aumentar potencia en los golpes</h3>
            <p>Un usuario de energia maldita puede envolver sus puños o cualquier parte del cuerpo con energia maldita para poder potenciar sus ataques.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuarios1'>Todos los usuarios de energia maldita.</p>
            <div className="reforzarcuerpo">
            <h3> ● Reforzar el cuerpo</h3>
            <p>Un usuario de energia maldita puede reforzar su cuerpo con energia maldita para volverlo mas resistente.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuarios2'>Todos los usuarios de energia maldita.</p>
            <div className="puñodivergente">
            <h3> ● Puño divergente</h3>
            <p>Sucede cuando el usuario, despues de realizar un golpe, hace que su energia maldita fluya en su puño creando un segundo impacto mas poderoso. Esto se considera un mal habito debido a que los 2 impactos tienen que ser uno solo para que el golpe sea mas eficiente.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuarios3'>Yuji Itadori y Kento Nanami.</p>
            <div className="destellonegro">
            <h3> ● Destello negro</h3>
            <p>Un fenomeno que crea una una distorsion en el espacio cuando un usuario conecta un impacto con energia maldita en un lapso de 0.000001 segundos despues de un ataque fisico, causando que la energia maldita brille de color negro. El impacto es 2.5 mas poderoso que uno normal y no se puede realizar a voluntad. Aparentemente, el unico capaz de realizarlo a voluntad es Yuji Itadori.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuarios4'>Yuji Itadori, Nobara Kugisaki, Yuta Okkotsu, Aoi Todo, Satoru Gojo, Kento Nanami, Mahito y Ryomen Sukuna.</p>
            <div className="tecnicainversa">
            <h3> ● Tecnica Inversa</h3>
            <p>Una tecnica que se crea multiplicando energia maldita, la cual es energia negativa debido a que proviene de los sentimientos negativos de las personas, para asi crear energia positiva. Tiene varios usos, pero su uso principal es para curar heridas e incluso tecnicas desgastadas despues de realizar una expansion de dominio.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuarios5'>Yuji Itadori, Yuta Okkotsu, Satoru Gojo, Yuki Tsukumo, Shoko Ieiri, Kenjaku, Uraume, Ryomen Sukuna.</p>
            </div>
    <div className="tecnicasMDEM-right">
    <img src={controlenergiamaldita} alt="" className="personajestecnicas1"/>
    <img src={controlenergiamaldita1} alt="" className="personajestecnicas2"/>
    <img src={puñodivergente} alt="" className="personajestecnicas3"/>
    <img src={destellonegro} alt="" className="personajestecnicas4"/>
    <img src={tecnicainversa} alt="" className="personajestecnicas5"/>
    </div>
    </div>
    </div>
  )
}

export default TecnicasMDEM

