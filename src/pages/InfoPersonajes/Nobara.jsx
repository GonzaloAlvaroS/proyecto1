import React, { useState } from 'react'
import "./Nobara.css"
import infonobara from "../../assets/infonobara.png"
import nobaraactual from "../../assets/nobaraactual.png"
import nobaraprincipio from "../../assets/nobaraprincipio.png"
import nobarainfoimagen1 from "../../assets/nobarainfoimagen1.png"
import nobaraenergiamaldita from "../../assets/nobaraenergiamaldita.png"
import destellonegro from "../../assets/destellonegro.png"
import nobaratecnica from "../../assets/nobaratecnica.png"
import nobararesonancia from "../../assets/nobararesonancia.png"
import nobarahorquilla from "../../assets/nobarahorquilla.png"


const Nobara = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infonobaratodo'>
    <div className='infonobaralineastodo'>
      <div className= "nobarablue-lineA">
      <h5 className='nobaralineastitulo'>Nobara Kugisaki</h5>
    </div>
      <div className= "nobarablue-lineC"></div>
      <div className= "nobarablue-linemini1"></div>
      <div className= "nobarablue-linemini2"></div>
      <div className= "nobarablue-linemini3"></div>
      <div className= "nobarablue-linemini4"></div>
      <div className= "nobarablue-linemini5"></div>
      <div className= "nobarablue-linemini6"></div>
      <div className= "nobarablue-linemini7"></div>
      <div className= "nobarablue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='nobarageneral'>
      <img src={infonobara} alt="" className='infonobara'/>
      <p className='nobaranombre'><b>Nombre:</b> Nobara Kugisaki</p>
      <p className='nobaraedad'><b>Edad:</b> 16</p>
      <p className='nobaragenero'><b>Genero:</b> Femenino</p>
      <p className='nobaraespecie'><b>Especie:</b> Humano</p>
      <p className='nobaraocupacion'><b>Ocupación:</b> Hechicera / Estudiante</p>
      <p className='nobaradebut'><b>Primera Aparicion:</b> Capitulo 2</p>
      <p className='nobaraestado1'><b>Estado:</b></p>
      <p className={`nobaraestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`nobaraestado3 ${showActual ? 'hidden' : ''}`}>Desconocido</p>
      <p className='nobaraestado'><b>Estado:</b></p>
      <p className='nobaraestadover' onClick={handleVerClick}>Ver</p>
      <p className={`nobaraestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`nobaraestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='nobaracomparacion'>
      <img src={nobaraprincipio} alt="" className={`nobaraprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={nobaraactual} alt="" className={`nobaraactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='nobarainformacionexpandida'>
      <div className='nobaradescripcion'>
        <h1>Descripción:</h1>
        <p>Nobara Kugisaki es una de los personajes principales en Jujutsu Kaisen. Es una hechicera de Tercer Grado y estudiante de primer año en la Escuela de Hechiceria de Tokio junto con Yuji Itadori y Megumi Fushiguro. Escapo de su pueblo para asistir a la escuela de hechiceria por recomendacion de su abuela.</p>
      </div>
      <div className='nobaraap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='nobaraapariencia'>Nobara posee una altura promedio (1.60cm) y una contextura delgada. Su cabello es marron claro y le llega hasta su cuello. Tambien tiene ojos naranjas junto con cejas delgadas del mismo color.</p>
        <p className='nobarapersonalidad'>Es una chica confiada y temeraria con un caracter inquebrantable. Nobara esta determinada a siempre ser tal como es sin importar nada. Al principio, parecia ser muy arrogante y odiosa con todos, por ejemplo, cuando conocio por primera vez a sus compañeros los trato de inferiores. Sin embargo, Nobara es realmente una persona sentimental y que se preocupa por sus aliados, pero casi nunca quiere mostrar esa parte de ella.</p>
      </div>
      <div className='nobarahab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='nobarafuerza'>Nobara es una hechicera de Tercer Grado. Esto debido a recien haber entrado a la escuela y su poca experiencia como hechicera. Cuando recien empezaba, Nobara ya tenia un gran entendimiento de como usar su tecnica en contra de maldiciones. Se le ha visto capaz de luchar en contra de hechiceros de grado mayor e incluso maldiciones de Categoria Especial junto a Yuji Itadori.</p>
        <p className='nobaravelocidadresistencia'>Su velocidad es bastante inferior a la de un hechicero promedio, pero superior a la de un humano convencional. Nobara puede llegar a ser muy resistente, siendo capaz de seguir en pie despues de haber recibido multiples ataques letales. Por ejemplo, en su batalla contra Eso y Kechizu, Nobara pudo resistir por mucho tiempo la tecnica de veneno de las maldiciones.</p>
        <p className='nobaraskill'>No es muy habil en el combate cuerpo a cuerpo, es por eso que siempre depende de su tecnica innata para luchar. Maki Zenin decidio entrenarla para mejorar ese aspecto junto con Megumi Fushiguro antes de que el Evento de Intercambio empezara.</p>
        <p className='nobaraaprendiz'>Nobara puede adaptarse muy bien a cualquier situacion y puede idear un plan en al momento de pelear contra un oponente sin informacion previa. Por ejemplo, cuando ideo un plan para vencer a la copia de Mahito en el Incidente de Shibuya.</p>
        <img src={nobarainfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='nobaralineas'>
          <div className= "nobarablue-line-subtopA">
          <h5 className='nobaralineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "nobarablue-line-subtopB"></div>
          <div className= "nobarablue-line-subtopC"></div>
          <div className= "nobarablue-line-subtopD"></div>
        </div>

        <div className='nobarasublineas'>
          <div className= "nobarablue-line-subtopA-1"></div>
          <div className= "nobarablue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='nobaralineas2'>
          <div className= "nobarablue-line-subtopA">
          <h5 className='nobaralineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "nobarablue-line-subtopB2"></div>
          <div className= "nobarablue-line-subtopC2"></div>
          <div className= "nobarablue-line-subtopD2"></div>
        </div>

        <div className='nobarasublineas2'>
          <div className= "nobarablue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='nobaralineas3'>
          <div className= "nobarablue-line-subtopA">
          <h5 className='nobaralineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "nobarablue-line-subtopB3"></div>
          <div className= "nobarablue-line-subtopC3"></div>
          <div className= "nobarablue-line-subtopD3"></div>
        </div>

        <div className='nobarasublineas3'>
          <div className= "nobarablue-line-subtopA-1"></div>
          <div className= "nobarablue-line-subtopB3-1"></div>
        </div>  
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="nobarainfo-todo">
           <div className="nobarainfo-left">
              <div className="nobaracantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>Nobara tiene grandes reservas de energia maldita y es una experta en manipularla. Constantemente aplica energia maldita a sus herramientas para ejecutar tecnicas malditas y nunca ha mostrado algun signo de cansancio al usar la energia maldita.</p>
              </div>
              <div className="nobaradestellonegro">
              <h3> ● Destello Negro (Black Flash)</h3>
              <p>Un fenomeno que crea una una distorsion en el espacio cuando un usuario conecta un impacto con energia maldita en un lapso de 0.000001 segundos despues de un ataque fisico, causando que la energia maldita brille de color negro. El impacto es 2.5 mas poderoso que uno normal y no se puede realizar a voluntad. Nobara uso el destello negro por primera vez en su combate contra Kechizu, casi matandolo con el impacto.</p>
              </div>
           </div> 
           <div className="nobarainfo-right">
              <img src={nobaraenergiamaldita} alt="" className="nobaratecnicas1"/>
              <img src={destellonegro} alt="" className="nobaratecnicas2"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="nobarainfo-todo2">
           <div className="nobarainfo-left2">
              <div className="nobaramuñecovudu">
              <h3> ● Técnica de Muñeco Vudú (Straw Doll Technique)</h3>
              <p>Tecnica que permite manipular un martillo, clavos y un muñeco vudú para distintos usos en combate. Nobara aplica energia maldita a sus herramientas para poder ejecutar sus tecnicas maldtias.</p>
              </div>
           </div> 
           <div className="nobarainfo-right2">
              <img src={nobaratecnica} alt="" className="nobaratecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="nobarainfo-todo3">
           <div className="nobarainfo-left3">
              <div className="nobararesonancia">
              <h3> ● Resonancia (Resonance)</h3>
              <p>Extensión de la Tecnica de Muñeco Vudú. Nobara puede aplicar energia maldita al objetivo mediante un muñeco vudú. Para esto se debe usar una parte cortada del objetivo para establecer un lazo para atacar la zona mas vulnerable.</p>
              </div>
              <div className="nobarahorquilla">
              <h3> ● Horquilla (Hairpin)</h3>
              <p>Extensión de la Tecnica de Muñeco Vudú. Hace que los clavos con energia maldita exploten causando un gran daño en el objetivo.</p>
              </div>
           </div> 
           <div className="nobarainfo-right3">
              <img src={nobararesonancia} alt="" className="nobaratecnicas1"/>
              <img src={nobarahorquilla} alt="" className="nobaratecnicas2"/>
           </div>
        </div>   
    </div>  
    </div>
  )
}

export default Nobara