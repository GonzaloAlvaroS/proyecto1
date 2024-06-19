import React, { useState } from 'react'
import "./Panda.css"
import infopanda from "../../assets/infopanda.png"
import pandaactual from "../../assets/pandaactual.png"
import pandaprincipio from "../../assets/pandaprincipio.png"
import pandainfoimagen1 from "../../assets/pandainfoimagen1.png"
import pandaenergiamaldita from "../../assets/pandaenergiamaldita.png"
import pandanucleos from "../../assets/pandanucleos.png"
import pandamodogorila from "../../assets/pandamodogorila.png"
import pandaritmotambor from "../../assets/pandaritmotambor.png"
import pandatriceratops from "../../assets/pandatriceratops.png"


const Panda = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infopandatodo'>
    <div className='infopandalineastodo'>
      <div className= "pandablue-lineA">
      <h5 className='pandalineastitulo'>Panda</h5>
    </div>
      <div className= "pandablue-lineC"></div>
      <div className= "pandablue-linemini1"></div>
      <div className= "pandablue-linemini2"></div>
      <div className= "pandablue-linemini3"></div>
      <div className= "pandablue-linemini4"></div>
      <div className= "pandablue-linemini5"></div>
      <div className= "pandablue-linemini6"></div>
      <div className= "pandablue-linemini7"></div>
      <div className= "pandablue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='pandageneral'>
      <img src={infopanda} alt="" className='infopanda'/>
      <p className='pandanombre'><b>Nombre:</b> Panda</p>
      <p className='pandaedad'><b>Edad:</b> ?</p>
      <p className='pandagenero'><b>Genero:</b> Masculino</p>
      <p className='pandaespecie'><b>Especie:</b> Cuerpo Maldito</p>
      <p className='pandaocupacion'><b>Ocupación:</b> Hechicero / Estudiante</p>
      <p className='pandadebut'><b>Primera Aparicion:</b> Capitulo 5</p>
      <p className='pandaestado1'><b>Estado:</b></p>
      <p className={`pandaestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`pandaestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='pandaestado'><b>Estado:</b></p>
      <p className='pandaestadover' onClick={handleVerClick}>Ver</p>
      <p className={`pandaestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`pandaestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='pandacomparacion'>
      <img src={pandaprincipio} alt="" className={`pandaprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={pandaactual} alt="" className={`pandaactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='pandainformacionexpandida'>
      <div className='pandadescripcion'>
        <h1>Descripción:</h1>
        <p>Panda es un personaje secundario relevante en Jujutsu Kaisen. A pesar de su nombre, Panda no es realmente un panda, sino un Cuerpo Maldito creado por Masamichi Yaga. Es estudiante de segundo año de la Escuela de Hechiceria de Tokio junto con Maki, Yuta y Toge.</p>
      </div>
      <div className='pandaap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='pandaapariencia'>Panda tiene la apariencia de un panda adulto gigante. Es mucho mas alto que sus compañeros de clase (1.92cm) y a veces se le ha visto usar prendas de ropa como chaquetas o bufandas, pero normalmente no usa ninguna. Despues de su batalla contra Kashimo, su cuerpo y 2 de sus nucleos fueron destruidos. Ahora Panda es mucho mas pequeño que su altura original.</p>
        <p className='pandapersonalidad'>Generalmente es un individuo calmado con su propio sentido del humor. Cuando era joven, Panda hablaba de forma extremadamente formal y robotica, pero con el paso del tiempo desarrollo su propia personalidad. Ahora es muy sarcastico y se toma a la ligera cualquier situacion.</p>
      </div>
      <div className='pandahab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='pandafuerza'>Es un hechicero de Semi-Segundo Grado y un Cuerpo Maldito, el mas avanzado de su tipo. Debido a su tamaño y a su cuerpo robusto, Panda es un individuo muy fuerte. Es capaz de exorcizar maldiciones solo con sus habilidades fisicas y puede destruir paredes con su cuerpo sin esfuerzo. Incluso llego a paralizar por un breve momento a Aoi Todo golpeandolo, un hechicero con una durabilidad impresionate.</p>
        <p className='pandavelocidadresistencia'>Su velocidad tambien es bastante alta, siendo capaz de rivalizar con la de Mechamaru, pudiendo esquivar varios ataques de este. Debido a su fisiología, el cuerpo de Panda puede absorber grandes cantidades de daño. En su batalla contra Mechamaru, pudo soportar multiples ataques poderosos sin esfuerzo alguno e incluso fue capaz de soportar el ataque mas poderoso de Mechamaru, el Ultra Cañon.</p>
        <p className='pandaskill'>Aunque no llegue al nivel de otros usuarios, es un combatiente a cuerpo a cuerpo habilidoso y aprovecha sus capacidades fisicas para sacar ventaja en sus peleas.</p>
        <p className='pandaaprendiz'>Panda posee gran intelecto desde pequeño debido a las circunstancias de su creacion y su educacion recibida por parte del director Yaga. En una pelea, Panda analiza y siempre intenta estar un paso por delante de su oponente. Incluso Suguru Geto, un hechicero con una inmenso razonamiento táctico, fue sorprendido por el ingenio de Panda en combate.</p>
        <img src={pandainfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='pandalineas'>
          <div className= "pandablue-line-subtopA">
          <h5 className='pandalineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "pandablue-line-subtopB"></div>
          <div className= "pandablue-line-subtopC"></div>
          <div className= "pandablue-line-subtopD"></div>
        </div>

        <div className='pandasublineas'>
          <div className= "pandablue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Nucleos de "Informacion Expandida" */} 

        <div className='pandalineas2'>
          <div className= "pandablue-line-subtopA">
          <h5 className='pandalineassubtitulo2'>Nucleos del Cuerpo Maldito</h5>
          </div>
          <div className= "pandablue-line-subtopB2"></div>
          <div className= "pandablue-line-subtopC2"></div>
          <div className= "pandablue-line-subtopD2"></div>
        </div>

        <div className='pandasublineas2'>
        <div className= "pandablue-line-subtopA2-1"></div>
        <div className= "pandablue-line-subtopA2-2"></div>
        <div className= "pandablue-line-subtopA2-3"></div>
          <div className= "pandablue-line-subtopB2-1"></div>
        </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="pandainfo-todo">
           <div className="pandainfo-left">
              <div className="pandacantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>Al ser un Cuerpo Maldito, Panda naturalmente posee una gran cantidad de energia maldita. Con entrenamiento, Panda ha aprendido a reforzar su cuerpo fisico para crear un balance entre sus capacidades ofensivas y defensivas. Su proteccion con hechiceria le permite ser capaz de defenderse de ataques que la mayoria de hechiceros tendrian que esquivar.</p>
              </div>
           </div> 
           <div className="pandainfo-right">
              <img src={pandaenergiamaldita} alt="" className="pandatecnicas1"/>
              </div>
        </div>

    {/* Informacion Nucleos de "Informacion Expandida" */}

        <div className="pandainfo-todo2">
           <div className="pandainfo-left2">
              <div className="pandanucleos">
              <h3> ● Los 3 Nucleos dentro de Panda</h3>
              <p>Dentro de Panda existen 3 nucleos: El tipo balance "Panda", el tipo poder "Gorila" y el tercer nucleo llamado "Triceratops". Si alguno de estos nucles es dañado, Panda no sera capaz de cambiar a esa forma hasta que este recuperado. Tambien puede manipular la energia maldita dentro de el para falsificar la ubicacion de estos nucleos.</p>
              </div>
              <div className="pandamodogorila">
              <h3> ● Modo Gorila</h3>
              <p>Cambiando con el nucleo de su "hermano", Panda puede transformar su aspecto al de un gorila musculoso manteniendo sus colores. Panda es mucho mas fuerte y rapido en esta forma, pero consume mucha energia maldita cuando se usa.</p>
              </div>
              <div className="pandaritmotambor">
              <h3> ● Ritmo de Tambor (Unblockable Drumming Beat)</h3>
              <p>Mientras esta en Modo Gorila, cualquier ataque de Panda resonará a través del cuerpo del objetivo usando "Ritmo de Tambor". El impacto creara una onda expansiva que traspasará la guardia del objetivo, haciendo que sufran el daño incluso si se defienden.</p>
              </div>
              <div className="pandatriceratops">
              <h3> ● Modo Triceratops</h3>
              <p>Cambiando con el nucleo de su "hermana", Panda puede transformar su aspecto al de un triceratops. La apariencia del cuerpo de panda se vuelve mas femenino mientras que su cabeza toma la forma de un triceratops. Panda asegura que esta forma es capaz de destruir todo lo que toca, pero sus habilidades y capacidades aun son desconocidas.</p>
              </div>
           </div> 
           <div className="pandainfo-right2">
              <img src={pandanucleos} alt="" className="pandatecnicas1"/>
              <img src={pandamodogorila} alt="" className="pandatecnicas2"/>
              <img src={pandaritmotambor} alt="" className="pandatecnicas3"/>
              <img src={pandatriceratops} alt="" className="pandatecnicas4"/>
              </div>
        </div> 
    </div>  
    </div>
  )
}

export default Panda

