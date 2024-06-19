import React, { useState } from 'react'
import "./Kusakabe.css"
import infokusakabe from "../../assets/infokusakabe.png"
import kusakabeactual from "../../assets/kusakabeactual.png"
import kusakabeprincipio from "../../assets/kusakabeprincipio.png"
import noritoshiinfoimagen1 from "../../assets/noritoshiinfoimagen1.png"
import noritoshienergiamaldita from "../../assets/noritoshienergiamaldita.png"
import noritoshimanipulacionsangre from "../../assets/noritoshimanipulacionsangre.png"
import noritoshiescalaroja from "../../assets/noritoshiescalaroja.png"
import noritoshiataduracarmesi from "../../assets/noritoshiataduracarmesi.png"
import noritoshicortepurificador from "../../assets/noritoshicortepurificador.png"
import noritoshiconvergencia from "../../assets/noritoshiconvergencia.png"
import noritoshisangreperforante from "../../assets/noritoshisangreperforante.png"


const Kusakabe = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infokusakabetodo'>
    <div className='infokusakabelineastodo'>
      <div className= "kusakabeblue-lineA">
      <h5 className='kusakabelineastitulo'>Atsuya Kusakabe</h5>
    </div>
      <div className= "kusakabeblue-lineC"></div>
      <div className= "kusakabeblue-linemini1"></div>
      <div className= "kusakabeblue-linemini2"></div>
      <div className= "kusakabeblue-linemini3"></div>
      <div className= "kusakabeblue-linemini4"></div>
      <div className= "kusakabeblue-linemini5"></div>
      <div className= "kusakabeblue-linemini6"></div>
      <div className= "kusakabeblue-linemini7"></div>
      <div className= "kusakabeblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='kusakabegeneral'>
      <img src={infokusakabe} alt="" className='infokusakabe'/>
      <p className='kusakabenombre'><b>Nombre:</b> Atsuya Kusakabe</p>
      <p className='kusakabeedad'><b>Edad:</b> 25(+)</p>
      <p className='kusakabegenero'><b>Genero:</b> Masculino</p>
      <p className='kusakabeespecie'><b>Especie:</b> Humano</p>
      <p className='kusakabeocupacion'><b>Ocupación:</b> Hechicero</p>
      <p className='kusakabedebut'><b>Primera Aparicion:</b> Capitulo 31</p>
      <p className='kusakabeestado1'><b>Estado:</b></p>
      <p className={`kusakabeestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`kusakabeestado3 ${showActual ? 'hidden' : ''}`}>Desconocido</p>
      <p className='kusakabeestado'><b>Estado:</b></p>
      <p className='kusakabeestadover' onClick={handleVerClick}>Ver</p>
      <p className={`kusakabeestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`kusakabeestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='kusakabecomparacion'>
      <img src={kusakabeprincipio} alt="" className={`kusakabeprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={kusakabeactual} alt="" className={`kusakabeactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='kusakabeinformacionexpandida'>
      <div className='kusakabedescripcion'>
        <h1>Descripción:</h1>
        <p>kusakabe Kamo es un personaje secundario relevante en Jujutsu Kaisen. Es estudiante de tercer año en la Escuela de Hechiceria de Kioto y el heredero del Clan Kamo.</p>
      </div>
      <div className='kusakabeap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='kusakabeapariencia'>kusakabe es un joven relativamente alto (1.78cm), posee ojos grises que normalmente estan cerrados casi por completo y cabello negro. Cuando era el heredero del Clan Kamo su cabello tenia un estilo unico, teniendo 2 mechones de cabello envueltos frente a su cara mientras que el resto de su cabello fluia atras de su cabeza llegando hasta su cuello. Cuando fue desterrado del clan, kusakabe se cortó el cabello y ahora es corto con un estilo de pinchos.</p>
        <p className='kusakabepersonalidad'>Es una persona calmada y fria proveniente de una vida familiar problematica y solia poner los ideales del su clan por encima de todo. kusakabe es un lider como casi ningun otro, pero sus ideales retorcidas implementadas en el por su clan hacia que la relacion con sus compañeros sea distorsionada. Su madre era el centro de su vida y se lamentaba haber sido separado de ella por su clan. Luego de ser desterrado de su clan, kusakabe optó por tener una personalidad mas natural y fiel a como realmente es el.</p>
      </div>
      <div className='kusakabehab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='kusakabefuerza'>kusakabe es un hechicero de Semi-Primer Grado, permitiendole hacer misiones por su cuenta. Heredo la tecnica mas preciada de su clan, la Manipulacion de Sangre. No solo posee talento natural para la hechiceria, sino tambien un gran intelecto y habilidades fisicas de gran nivel. Puede potenciar su fuerza gracias a la Manipulacion de Sangre permitiendole luchar mano a mano contra Megumi.</p>
        <p className='kusakabevelocidadresistencia'>Su velocidad y resistencia tambien pueden potenciarse gracias a su tecnica, pero no es igual de veloz y resistente que varios hechiceros de las escuelas de hechiceria. Sus capacidades le permitieron darle tiempo a Maki y sobrevivir contra Naoya en su forma de maldicion cuando pelearon en los Juegos del Sacrificio.</p>
        <p className='kusakabeskill'>Es un gran combatiente cuerpo a cuerpo, superando a Megumi cuando pelearon en el Evento de Intercambio. Su habilidad con el arco es espectacular, pudiendo imbuir energia maldita a sus flechas y guiarlas usando sangre.</p>
        <p className='kusakabeaprendiz'>Es un pensador frio y posee un gran intelecto en combate. Es un lider efectivo gracias a ser estrategico y tener un gran conocimiento de jujutsu. Durante el Evento de Intercambio lidero a sus compañeros de equipo ejecutando la estrategia que tenian para matar a Yuji Itadori y despues lideró en el combate de tuvo contra Hanami con Megumi y Toge.</p>
        <img src={noritoshiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='kusakabelineas'>
          <div className= "kusakabeblue-line-subtopA">
          <h5 className='kusakabelineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "kusakabeblue-line-subtopB"></div>
          <div className= "kusakabeblue-line-subtopC"></div>
          <div className= "kusakabeblue-line-subtopD"></div>
        </div>

        <div className='kusakabesublineas'>
          <div className= "kusakabeblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='kusakabelineas2'>
          <div className= "kusakabeblue-line-subtopA">
          <h5 className='kusakabelineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "kusakabeblue-line-subtopB2"></div>
          <div className= "kusakabeblue-line-subtopC2"></div>
          <div className= "kusakabeblue-line-subtopD2"></div>
        </div>

        <div className='kusakabesublineas2'>
          <div className= "kusakabeblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='kusakabelineas3'>
          <div className= "kusakabeblue-line-subtopA">
          <h5 className='kusakabelineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "kusakabeblue-line-subtopB3"></div>
          <div className= "kusakabeblue-line-subtopC3"></div>
          <div className= "kusakabeblue-line-subtopD3"></div>
        </div>

        <div className='kusakabesublineas3'>
          <div className= "kusakabeblue-line-subtopA3-1"></div>
          <div className= "kusakabeblue-line-subtopA3-2"></div>
          <div className= "kusakabeblue-line-subtopA3-3"></div>
          <div className= "kusakabeblue-line-subtopA3-4"></div>
          <div className= "kusakabeblue-line-subtopB3-1"></div>
        </div>  
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="kusakabeinfo-todo">
           <div className="kusakabeinfo-left">
              <div className="kusakabecantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>kusakabe tiene un control de la energia maldita muy delicado. Ha demostrado estar cerca de por lo menos una maldicion de Categoria 1. Es capaz de liberar varias tecnicas de Manipulacion de Sangre una tras otra sin que pierdan eficiencia ni poder.</p>
              </div>
           </div> 
           <div className="kusakabeinfo-right">
              <img src={noritoshienergiamaldita} alt="" className="kusakabetecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="kusakabeinfo-todo2">
           <div className="kusakabeinfo-left2">
              <div className="kusakabemanipulacionsangre">
              <h3> ● Manipulación de Sangre (Blood Manipulation)</h3>
              <p>Tecnica que permite al usuario manipular sangre tanto dentro como fuera de su cuerpo y tiene multiples y distintos usos. kusakabe heredó esta tecnica gracias a sus antepasados del Clan Kamo.</p>
              </div>
           </div> 
           <div className="kusakabeinfo-right2">
              <img src={noritoshimanipulacionsangre} alt="" className="kusakabetecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="kusakabeinfo-todo3">
           <div className="kusakabeinfo-left3">
              <div className="kusakabeescalaroja">
              <h3> ● Escala Roja (Flowing Red Scale)</h3>
              <p>Extension de la tecnica Manipulacion de Sangre. Incrementa la temperatura, pulso y el numero de celulas rojas del usuario para aumentar sus capacidades fisicas y darle mas energia.</p>
              </div>
              <div className="kusakabeataduracarmesi">
              <h3> ● Atadura Carmesi (Crimson Binding)</h3>
              <p>Extension de la tecnica Manipulacion de Sangre. Transforma la sangre en una red que atrapa al objetivo. </p>
              </div>
              <div className="kusakabecortepurificador">
              <h3> ● Corte Purificador (Slicing Exorcism)</h3>
              <p>Extension de la tecnica Manipulacion de Sangre. Crea una rueda de sangre que gira a gran velocidad para crear un proyectil filoso.</p>
              </div>
              <div className="kusakabeconvergencia">
              <h3> ● Convergencia (Convergence)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. Permite comprimir y condensar la sangre del usuario al su limite absoluto usando energia maldita. El orbe de sangre que se crea usando esta tecnica es necesaria para usar Sangre Perforante y Supernova.</p>
              </div>
              <div className="kusakabesangreperforante">
              <h3> ● Sangre Perforante (Piercing Blood)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. El usuario puede disparar un rayo de sangre que viaja a la velocidad del sonido juntando sus 2 manos alrededor de un orbe de sangre. Para usar esta tecnica se necesita usar Convergencia primero.</p>
              </div>
           </div> 
           <div className="kusakabeinfo-right3">
              <img src={noritoshiescalaroja} alt="" className="kusakabetecnicas1"/>
              <img src={noritoshiataduracarmesi} alt="" className="kusakabetecnicas2"/>
              <img src={noritoshicortepurificador} alt="" className="kusakabetecnicas3"/>
              <img src={noritoshiconvergencia} alt="" className="kusakabetecnicas4"/>
              <img src={noritoshisangreperforante} alt="" className="kusakabetecnicas5-1"/>
           </div>
        </div>   
    </div>  
    </div>
  )
}

export default Kusakabe
