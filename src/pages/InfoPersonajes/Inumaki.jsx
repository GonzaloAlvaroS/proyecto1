import React, { useState } from 'react'
import "./Inumaki.css"
import infoinumaki from "../../assets/infoinumaki.png"
import inumakiactual from "../../assets/inumakiactual.png"
import inumakiprincipio from "../../assets/inumakiprincipio.png"
import inumakiinfoimagen1 from "../../assets/inumakiinfoimagen1.png"
import inumakienergiamaldita from "../../assets/inumakienergiamaldita.png"
import inumakitecnica from "../../assets/inumakitecnica.png"
import inumakiestalla from "../../assets/inumakiestalla.png"
import inumakiretuercete from "../../assets/inumakiretuercete.png"
import inumakiaplastate from "../../assets/inumakiaplastate.png"
import inumakialsuelo from "../../assets/inumakialsuelo.png"
import inumakidetente from "../../assets/inumakidetente.png"
import inumakiduermete from "../../assets/inumakiduermete.png"
import inumakiregresa from "../../assets/inumakiregresa.png"
import inumakihuyan from "../../assets/inumakihuyan.png"
import inumakisalvolando from "../../assets/inumakisalvolando.png"





const Inumaki = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infoinumakitodo'>
    <div className='infoinumakilineastodo'>
      <div className= "inumakiblue-lineA">
      <h5 className='inumakilineastitulo'>Toge Inumaki</h5>
    </div>
      <div className= "inumakiblue-lineC"></div>
      <div className= "inumakiblue-linemini1"></div>
      <div className= "inumakiblue-linemini2"></div>
      <div className= "inumakiblue-linemini3"></div>
      <div className= "inumakiblue-linemini4"></div>
      <div className= "inumakiblue-linemini5"></div>
      <div className= "inumakiblue-linemini6"></div>
      <div className= "inumakiblue-linemini7"></div>
      <div className= "inumakiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='inumakigeneral'>
      <img src={infoinumaki} alt="" className='infoinumaki'/>
      <p className='inumakinombre'><b>Nombre:</b> Toge Inumaki</p>
      <p className='inumakiedad'><b>Edad:</b> 17</p>
      <p className='inumakigenero'><b>Genero:</b> Masculino</p>
      <p className='inumakiespecie'><b>Especie:</b> Humano</p>
      <p className='inumakiocupacion'><b>Ocupación:</b> Hechicero / Estudiante</p>
      <p className='inumakidebut'><b>Primera Aparicion:</b> Capitulo 5</p>
      <p className='inumakiestado1'><b>Estado:</b></p>
      <p className={`inumakiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`inumakiestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='inumakiestado'><b>Estado:</b></p>
      <p className='inumakiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`inumakiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`inumakiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='inumakicomparacion'>
      <img src={inumakiprincipio} alt="" className={`inumakiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={inumakiactual} alt="" className={`inumakiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='inumakiinformacionexpandida'>
      <div className='inumakidescripcion'>
        <h1>Descripción:</h1>
        <p>Toge Inumaki es un personaje secundario relevante en Jujutsu Kaisen. Es descendiente del Clan Inumaki y heredó el Discurso Maldito, haciendo que Toge vaya creado su propio patron de habla para evitar maldecir a los demas. Actualmente es un hechicero de Semi-Primer Grado y esta en segundo año en la Escuela de Hechiceria de Tokio junto con Yuta, Maki y Panda.</p>
      </div>
      <div className='inumakiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='inumakiapariencia'>Toge es un joven de contextura delgada y altura inferior al promedio (1.62cm). Posee ojos violetas y un cabello medio largo de color plateado. Nacio con el sello "Serpiente y Colmillos" en su lengua y mejillas proveniente del Clan Inumaki. Este sello aparece debido a la tecnica hereditaria del clan. Durante el Incidente de Shibuya, Toge perdio su brazo izquierdo debido a un ataque de Ryomen Sukuna.</p>
        <p className='inumakipersonalidad'>Las primeras impresiones hacia Toge son que parece un individuo timido, callado y distante, pero realmente es una persona muy social, amable y entiende el peligro de poseer un poder masivo y peligroso. Toge prefiere no hablar de manera convencional para proteger a las personas de su tecnica. Usa ingredientes de cocina para poder comunicarse y sus compañeros han hecho el esfuerzo de aprender a como comunicarse con el.</p>
      </div>
      <div className='inumakihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='inumakifuerza'>Como miembro del Clan Inumaki, Toge es respetado y un hechicero de Semi-Primer Grado. Durante su primer año Toge fue un hechicero de Segundo Grado y era el unico de su clase que podia hacer misiones en solitario. Su fuerza aun es desconocida pero se sabe que es superior a la del promedio de hechiceros.</p>
        <p className='inumakivelocidadresistencia'>Aunque no es tan rapido como rarezas de la naturaleza como Yuji o Maki, Toge ha demostrado es un individuo muy rapido y agil. Su velocidad le permite esquivar ataques de Hanami, una maldicion de Categoria Especial, con mucha facilidad. Su alta resistencia le permite usar su tecnica multiples veces, tecnica que consume mucha energia cuando se usa.</p>
        <p className='inumakiskill'>No se ha visto a Inumaki pelear cuerpo a cuerpo ni usar armas malditas, pero se sabe que es muy habilidoso y no se le puede tomar a la ligera en un combate.</p>
        <p className='inumakiaprendiz'>Su intelecto es algo que tambien se tiene que resaltar. Durante el Evento de Intercambio, el equipo de Kioto considero a Toge como la amenaza mas grande del equipo de Tokio e idearon un plan contra el, el cual no sirvio de mucho debido a que no sabian cuando Toge podia aperecer, distrayendolos de sus combates individuales contra otros integrantes del equipo contrario.</p>
        <img src={inumakiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='inumakilineas'>
          <div className= "inumakiblue-line-subtopA">
          <h5 className='inumakilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "inumakiblue-line-subtopB"></div>
          <div className= "inumakiblue-line-subtopC"></div>
          <div className= "inumakiblue-line-subtopD"></div>
        </div>

        <div className='inumakisublineas'>
          <div className= "inumakiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='inumakilineas2'>
          <div className= "inumakiblue-line-subtopA">
          <h5 className='inumakilineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "inumakiblue-line-subtopB2"></div>
          <div className= "inumakiblue-line-subtopC2"></div>
          <div className= "inumakiblue-line-subtopD2"></div>
        </div>

        <div className='inumakisublineas2'>
          <div className= "inumakiblue-line-subtopA2-1"></div>
          <div className= "inumakiblue-line-subtopA2-2"></div>
          <div className= "inumakiblue-line-subtopA2-3"></div>
          <div className= "inumakiblue-line-subtopA2-4"></div>
          <div className= "inumakiblue-line-subtopA2-5"></div>
          <div className= "inumakiblue-line-subtopA2-6"></div>
          <div className= "inumakiblue-line-subtopA2-7"></div>
          <div className= "inumakiblue-line-subtopA2-8"></div>
          <div className= "inumakiblue-line-subtopA2-9"></div>
          <div className= "inumakiblue-line-subtopB2-1"></div>
        </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="inumakiinfo-todo">
           <div className="inumakiinfo-left">
              <div className="inumakicantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>A parte de energia, el Discurso Maldito tambien requiere grandes cantidades de energia maldita cuando se usa, especialmente cuando Toge se enfrenta a una maldicion poderosa. Toge puede usar su tecnica multiples veces en un combate incluso estando en su limite.</p>
              </div>             
           </div> 
           <div className="inumakiinfo-right">
              <img src={inumakienergiamaldita} alt="" className="inumakitecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="inumakiinfo-todo2">
           <div className="inumakiinfo-left2">
              <div className="inumakidiscurso">
              <h3> ● Discurso Maldito (Cursed Speech)</h3>
              <p>Tecnica que permite imbuir las palabras articuladas con una inmensa cantidad de energia maldita haciendo que cualquiera que las escuche tenga que obedecerlas. Mientras mas poderosa y exigente sea la palabra, mas daño recibira las cuerdas vocales del usuario. Tambien depende de cuanta energia maldita tenga el objetivo y si es superior o no a la de Toge.</p>
              </div>
              <div className="inumakiestalla">
              <h3> ● Estalla (Explode)</h3>
              <p>Causa que el objetivo explote violentamente. Toge normalmente lo usa para exorcizar a maldiciones debiles sin esfuerzo.</p>
              </div>
              <div className="inumakiretuercete">
              <h3> ● Retuércete (Get Twisted)</h3>
              <p>Fuerza que el objetivo se retuerza hasta un punto de desfiguración completa.</p>
              </div>
              <div className="inumakiaplastate">
              <h3> ● Aplastate (Get Crushed)</h3>
              <p>Causa que el objetivo implosione hasta que quede aplastado.</p>
              </div>
              <div className="inumakialsuelo">
              <h3> ● Al Suelo (Plummet)</h3>
              <p>Crea un pequeño campo de gravedad pesada intensa que aplasta al objetivo hasta que son mandados violentamente bajo tierra.</p>
              </div>
              <div className="inumakidetente">
              <h3> ● Detente (Don't Move)</h3>
              <p>Causa que el objetivo o sus ataques queden completamente inmovilizados.</p>
              </div>
              <div className="inumakiduermete">
              <h3> ● Duérmete (Sleep)</h3>
              <p>Manda directamente a cualquiera que escuche el comando a dormir profundamente.</p>
              </div>
              <div className="inumakiregresa">
              <h3> ● Regresa (Return)</h3>
              <p>Puede forzar a que un Shikigami desaparezca. Lo uso con uno de los Perros Divinos de Megumi Fushiguro.</p>
              </div>
              <div className="inumakihuyan">
              <h3> ● Huyan (Run Away)</h3>
              <p>Fuerza que el objetivo huya de una area. Lo uso con sus aliados para que huyeran de los ataques de Hanami.</p>
              </div>
              <div className="inumakisalvolando">
              <h3> ● Sal Volando (Blast Away)</h3>
              <p>Es un comando poderoso que crea una impacto explosivo que es lo suficientemente poderoso para mandar volando a una maldicion de Categoria Especial.</p>
              </div>
           </div> 
           <div className="inumakiinfo-right2">
              <img src={inumakitecnica} alt="" className="inumakitecnicas1"/>
              <img src={inumakiestalla} alt="" className="inumakitecnicas2"/>
              <img src={inumakiretuercete} alt="" className="inumakitecnicas3"/>
              <img src={inumakiaplastate} alt="" className="inumakitecnicas4"/>
              <img src={inumakialsuelo} alt="" className="inumakitecnicas5-1"/>
              <img src={inumakidetente} alt="" className="inumakitecnicas6"/>
              <img src={inumakiduermete} alt="" className="inumakitecnicas7"/>
              <img src={inumakiregresa} alt="" className="inumakitecnicas8"/>
              <img src={inumakihuyan} alt="" className="inumakitecnicas9"/>
              <img src={inumakisalvolando} alt="" className="inumakitecnicas10"/>
              </div>
        </div> 
    </div>  
    </div>
  )
}

export default Inumaki
