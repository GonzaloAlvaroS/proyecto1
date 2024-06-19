import React, { useState } from 'react'
import "./Noritoshi.css"
import infonoritoshi from "../../assets/infonoritoshi.png"
import noritoshiactual from "../../assets/noritoshiactual.png"
import noritoshiprincipio from "../../assets/noritoshiprincipio.png"
import noritoshiinfoimagen1 from "../../assets/noritoshiinfoimagen1.png"
import noritoshienergiamaldita from "../../assets/noritoshienergiamaldita.png"
import noritoshimanipulacionsangre from "../../assets/noritoshimanipulacionsangre.png"
import noritoshiescalaroja from "../../assets/noritoshiescalaroja.png"
import noritoshiataduracarmesi from "../../assets/noritoshiataduracarmesi.png"
import noritoshicortepurificador from "../../assets/noritoshicortepurificador.png"
import noritoshiconvergencia from "../../assets/noritoshiconvergencia.png"
import noritoshisangreperforante from "../../assets/noritoshisangreperforante.png"


const Noritoshi = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infonoritoshitodo'>
    <div className='infonoritoshilineastodo'>
      <div className= "noritoshiblue-lineA">
      <h5 className='noritoshilineastitulo'>Noritoshi Kamo</h5>
    </div>
      <div className= "noritoshiblue-lineC"></div>
      <div className= "noritoshiblue-linemini1"></div>
      <div className= "noritoshiblue-linemini2"></div>
      <div className= "noritoshiblue-linemini3"></div>
      <div className= "noritoshiblue-linemini4"></div>
      <div className= "noritoshiblue-linemini5"></div>
      <div className= "noritoshiblue-linemini6"></div>
      <div className= "noritoshiblue-linemini7"></div>
      <div className= "noritoshiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='noritoshigeneral'>
      <img src={infonoritoshi} alt="" className='infonoritoshi'/>
      <p className='noritoshinombre'><b>Nombre:</b> Noritoshi Kamo</p>
      <p className='noritoshiedad'><b>Edad:</b> 18</p>
      <p className='noritoshigenero'><b>Genero:</b> Masculino</p>
      <p className='noritoshiespecie'><b>Especie:</b> Humano</p>
      <p className='noritoshiocupacion'><b>Ocupación:</b> Hechicero / Estudiante </p>
      <p className='noritoshidebut'><b>Primera Aparicion:</b> Capitulo 14</p>
      <p className='noritoshiestado1'><b>Estado:</b></p>
      <p className={`noritoshiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`noritoshiestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='noritoshiestado'><b>Estado:</b></p>
      <p className='noritoshiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`noritoshiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`noritoshiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='noritoshicomparacion'>
      <img src={noritoshiprincipio} alt="" className={`noritoshiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={noritoshiactual} alt="" className={`noritoshiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='noritoshiinformacionexpandida'>
      <div className='noritoshidescripcion'>
        <h1>Descripción:</h1>
        <p>Noritoshi Kamo es un personaje secundario relevante en Jujutsu Kaisen. Es estudiante de tercer año en la Escuela de Hechiceria de Kioto y el heredero del Clan Kamo.</p>
      </div>
      <div className='noritoshiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='noritoshiapariencia'>Noritoshi es un joven relativamente alto (1.78cm), posee ojos grises que normalmente estan cerrados casi por completo y cabello negro. Cuando era el heredero del Clan Kamo su cabello tenia un estilo unico, teniendo 2 mechones de cabello envueltos frente a su cara mientras que el resto de su cabello fluia atras de su cabeza llegando hasta su cuello. Cuando fue desterrado del clan, Noritoshi se cortó el cabello y ahora es corto con un estilo de pinchos.</p>
        <p className='noritoshipersonalidad'>Es una persona calmada y fria proveniente de una vida familiar problematica y solia poner los ideales del su clan por encima de todo. Noritoshi es un lider como casi ningun otro, pero sus ideales retorcidas implementadas en el por su clan hacia que la relacion con sus compañeros sea distorsionada. Su madre era el centro de su vida y se lamentaba haber sido separado de ella por su clan. Luego de ser desterrado de su clan, Noritoshi optó por tener una personalidad mas natural y fiel a como realmente es el.</p>
      </div>
      <div className='noritoshihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='noritoshifuerza'>Noritoshi es un hechicero de Semi-Primer Grado, permitiendole hacer misiones por su cuenta. Heredo la tecnica mas preciada de su clan, la Manipulacion de Sangre. No solo posee talento natural para la hechiceria, sino tambien un gran intelecto y habilidades fisicas de gran nivel. Puede potenciar su fuerza gracias a la Manipulacion de Sangre permitiendole luchar mano a mano contra Megumi.</p>
        <p className='noritoshivelocidadresistencia'>Su velocidad y resistencia tambien pueden potenciarse gracias a su tecnica, pero no es igual de veloz y resistente que varios hechiceros de las escuelas de hechiceria. Sus capacidades le permitieron darle tiempo a Maki y sobrevivir contra Naoya en su forma de maldicion cuando pelearon en los Juegos del Sacrificio.</p>
        <p className='noritoshiskill'>Es un gran combatiente cuerpo a cuerpo, superando a Megumi cuando pelearon en el Evento de Intercambio. Su habilidad con el arco es espectacular, pudiendo imbuir energia maldita a sus flechas y guiarlas usando sangre.</p>
        <p className='noritoshiaprendiz'>Es un pensador frio y posee un gran intelecto en combate. Es un lider efectivo gracias a ser estrategico y tener un gran conocimiento de jujutsu. Durante el Evento de Intercambio lidero a sus compañeros de equipo ejecutando la estrategia que tenian para matar a Yuji Itadori y despues lideró en el combate de tuvo contra Hanami con Megumi y Toge.</p>
        <img src={noritoshiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='noritoshilineas'>
          <div className= "noritoshiblue-line-subtopA">
          <h5 className='noritoshilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "noritoshiblue-line-subtopB"></div>
          <div className= "noritoshiblue-line-subtopC"></div>
          <div className= "noritoshiblue-line-subtopD"></div>
        </div>

        <div className='noritoshisublineas'>
          <div className= "noritoshiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='noritoshilineas2'>
          <div className= "noritoshiblue-line-subtopA">
          <h5 className='noritoshilineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "noritoshiblue-line-subtopB2"></div>
          <div className= "noritoshiblue-line-subtopC2"></div>
          <div className= "noritoshiblue-line-subtopD2"></div>
        </div>

        <div className='noritoshisublineas2'>
          <div className= "noritoshiblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='noritoshilineas3'>
          <div className= "noritoshiblue-line-subtopA">
          <h5 className='noritoshilineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "noritoshiblue-line-subtopB3"></div>
          <div className= "noritoshiblue-line-subtopC3"></div>
          <div className= "noritoshiblue-line-subtopD3"></div>
        </div>

        <div className='noritoshisublineas3'>
          <div className= "noritoshiblue-line-subtopA3-1"></div>
          <div className= "noritoshiblue-line-subtopA3-2"></div>
          <div className= "noritoshiblue-line-subtopA3-3"></div>
          <div className= "noritoshiblue-line-subtopA3-4"></div>
          <div className= "noritoshiblue-line-subtopB3-1"></div>
        </div>  
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="noritoshiinfo-todo">
           <div className="noritoshiinfo-left">
              <div className="noritoshicantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>Noritoshi tiene un control de la energia maldita muy delicado. Ha demostrado estar cerca de por lo menos una maldicion de Categoria 1. Es capaz de liberar varias tecnicas de Manipulacion de Sangre una tras otra sin que pierdan eficiencia ni poder.</p>
              </div>
           </div> 
           <div className="noritoshiinfo-right">
              <img src={noritoshienergiamaldita} alt="" className="noritoshitecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="noritoshiinfo-todo2">
           <div className="noritoshiinfo-left2">
              <div className="noritoshimanipulacionsangre">
              <h3> ● Manipulación de Sangre (Blood Manipulation)</h3>
              <p>Tecnica que permite al usuario manipular sangre tanto dentro como fuera de su cuerpo y tiene multiples y distintos usos. Noritoshi heredó esta tecnica gracias a sus antepasados del Clan Kamo.</p>
              </div>
           </div> 
           <div className="noritoshiinfo-right2">
              <img src={noritoshimanipulacionsangre} alt="" className="noritoshitecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="noritoshiinfo-todo3">
           <div className="noritoshiinfo-left3">
              <div className="noritoshiescalaroja">
              <h3> ● Escala Roja (Flowing Red Scale)</h3>
              <p>Extension de la tecnica Manipulacion de Sangre. Incrementa la temperatura, pulso y el numero de celulas rojas del usuario para aumentar sus capacidades fisicas y darle mas energia.</p>
              </div>
              <div className="noritoshiataduracarmesi">
              <h3> ● Atadura Carmesi (Crimson Binding)</h3>
              <p>Extension de la tecnica Manipulacion de Sangre. Transforma la sangre en una red que atrapa al objetivo. </p>
              </div>
              <div className="noritoshicortepurificador">
              <h3> ● Corte Purificador (Slicing Exorcism)</h3>
              <p>Extension de la tecnica Manipulacion de Sangre. Crea una rueda de sangre que gira a gran velocidad para crear un proyectil filoso.</p>
              </div>
              <div className="noritoshiconvergencia">
              <h3> ● Convergencia (Convergence)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. Permite comprimir y condensar la sangre del usuario al su limite absoluto usando energia maldita. El orbe de sangre que se crea usando esta tecnica es necesaria para usar Sangre Perforante y Supernova.</p>
              </div>
              <div className="noritoshisangreperforante">
              <h3> ● Sangre Perforante (Piercing Blood)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. El usuario puede disparar un rayo de sangre que viaja a la velocidad del sonido juntando sus 2 manos alrededor de un orbe de sangre. Para usar esta tecnica se necesita usar Convergencia primero.</p>
              </div>
           </div> 
           <div className="noritoshiinfo-right3">
              <img src={noritoshiescalaroja} alt="" className="noritoshitecnicas1"/>
              <img src={noritoshiataduracarmesi} alt="" className="noritoshitecnicas2"/>
              <img src={noritoshicortepurificador} alt="" className="noritoshitecnicas3"/>
              <img src={noritoshiconvergencia} alt="" className="noritoshitecnicas4"/>
              <img src={noritoshisangreperforante} alt="" className="noritoshitecnicas5-1"/>
           </div>
        </div>   
    </div>  
    </div>
  )
}

export default Noritoshi
