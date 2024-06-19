import React, { useState } from 'react'
import "./Megumi.css"
import infomegumi from "../../assets/infomegumi.png"
import megumiactual from "../../assets/megumiactual.png"
import megumiprincipio from "../../assets/megumiprincipio.png"
import megumiinfoimagen1 from "../../assets/megumiinfoimagen1.png"
import megumienergiamaldita from "../../assets/megumienergiamaldita.png"
import megumitecnica from "../../assets/megumitecnica.png"
import megumiperros from "../../assets/megumiperros.png"
import megumiperrototal from "../../assets/megumiperrototal.png"
import meguminue from "../../assets/meguminue.png"
import megumiserpiente from "../../assets/megumiserpiente.png"
import megumisapo from "../../assets/megumisapo.png"
import megumielefante from "../../assets/megumielefante.png"
import megumiconejos from "../../assets/megumiconejos.png"
import megumimahoraga from "../../assets/megumimahoraga.png"
import megumisaposalas from "../../assets/megumisaposalas.png"
import megumidominio from "../../assets/megumidominio.png"




const Megumi = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infomegumitodo'>
    <div className='infomegumilineastodo'>
      <div className= "megumiblue-lineA">
      <h5 className='megumilineastitulo'>Megumi Fushiguro</h5>
    </div>
      <div className= "megumiblue-lineC"></div>
      <div className= "megumiblue-linemini1"></div>
      <div className= "megumiblue-linemini2"></div>
      <div className= "megumiblue-linemini3"></div>
      <div className= "megumiblue-linemini4"></div>
      <div className= "megumiblue-linemini5"></div>
      <div className= "megumiblue-linemini6"></div>
      <div className= "megumiblue-linemini7"></div>
      <div className= "megumiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='megumigeneral'>
      <img src={infomegumi} alt="" className='infomegumi'/>
      <p className='meguminombre'><b>Nombre:</b> Megumi Fushiguro</p>
      <p className='megumiedad'><b>Edad:</b> 16</p>
      <p className='megumigenero'><b>Genero:</b> Masculino</p>
      <p className='megumiespecie'><b>Especie:</b> Humano</p>
      <p className='megumiocupacion'><b>Ocupación:</b> Hechicero / Estudiante</p>
      <p className='megumidebut'><b>Primera Aparicion:</b> Capitulo 1</p>
      <p className='megumiestado1'><b>Estado:</b></p>
      <p className={`megumiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`megumiestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='megumiestado'><b>Estado:</b></p>
      <p className='megumiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`megumiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`megumiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='megumicomparacion'>
      <img src={megumiprincipio} alt="" className={`megumiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={megumiactual} alt="" className={`megumiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='megumiinformacionexpandida'>
      <div className='megumidescripcion'>
        <h1>Descripción:</h1>
        <p>Megumi Fushiguro es uno de los personajes principales en Jujutsu Kaisen. Es un hechicero de Segundo Grado y estudiante de primer año en la Escuela de Hechiceria de Tokio. Es descendiente del Clan Zenin, pero nacio fuera de este como az bajo la manga por parte de Toji Fushiguro. Eventualmente fue encontrado por Satoru Gojo y lo "adopto" como su estudiante.</p>
      </div>
      <div className='megumiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='megumiapariencia'>Megumi es relativamente alto (1.75cm), es delgado y tiene ojos de color azul oscuro. Su cabello es negro con un estilo parecido a puas largas que apuntan a todas las direcciones.</p>
        <p className='megumipersonalidad'>Aparenta ser una persona distante, fria y calculadora. Normalmente tiene una expresion facial neutral todo el tiempo, haciendo que parezca que esta serio en todo momento. Su personalidad choca mucho con la de sus compañeros de clase e incluso con la de su tutor. Sim embargo, Megumi si se preocupa por la vida de otras personas, mas que todo de sus cercanos y esta dispuesto a sacrificarse por ellos si es necesario.</p>
      </div>
      <div className='megumihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='megumifuerza'>Segun Satoru Gojo, Megumi tiene el potencial de llegar a ser igual de fuerte que el y cree que tiene un mayor potencial que Yuji Itadori. Muchos lo consideran un genio debido a que recien habiendo empezado su carrera como hechicero, ya habia logrado ser uno de Segundo Grado. Incluso Ryomen Sukuna estaba interesado en Megumi debido a su talento unico. Su fuerza es superior a la de un hechicero promedio, permitiendole luchar mano a mano contra maldiciones de Categoria 2 y superior.</p>
        <p className='megumivelocidadresistencia'>Su velocidad tambien es superior al promedio, la cual le permite exorcizar multiples maldiciones en poco tiempo. Su durabilidad es muy alta. Megumi puede sobrevivir a ataques de maldiciones de Categoria Especial, pudo soportar varios golpes de Sukuna sin recibir lesiones graves y pudo sobrevivir a un asalto de Aoi Todo, un hechicero considerado como uno de los mas fuertes.</p>
        <p className='megumiskill'>Megumi es muy bueno en el combate cuerpo a cuerpo, sin embargo, es inferior a la mayoria de hechiceros. Aun teniendo en cuenta esto, Megumi no tiene miedo en pelear mano a mano contra alguien sin la ayuda de sus Shikigamis. Es un experto en el uso de armas malditas gracias a Maki Zenin, la cual lo entreno antes del Arco del Evento de Intercambio.</p>
        <p className='megumiaprendiz'>Megumi es uno de los hechiceros mas inteligentes de todas las escuelas de hechiceria, estando a la par de Aoi Todo. Su intelecto le permite descifrar tecnicas malditas desconocidas y puede crear una estrategia para afrontar una situacion en poco tiempo. Megumi siempre opta por analizar al rival antes de empezar el combate para buscar sus puntos debiles. </p>
        <img src={megumiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='megumilineas'>
          <div className= "megumiblue-line-subtopA">
          <h5 className='megumilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "megumiblue-line-subtopB"></div>
          <div className= "megumiblue-line-subtopC"></div>
          <div className= "megumiblue-line-subtopD"></div>
        </div>

        <div className='megumisublineas'>
          <div className= "megumiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='megumilineas2'>
          <div className= "megumiblue-line-subtopA">
          <h5 className='megumilineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "megumiblue-line-subtopB2"></div>
          <div className= "megumiblue-line-subtopC2"></div>
          <div className= "megumiblue-line-subtopD2"></div>
        </div>

        <div className='megumisublineas2'>
          <div className= "megumiblue-line-subtopA2-1"></div>
          <div className= "megumiblue-line-subtopA2-2"></div>
          <div className= "megumiblue-line-subtopA2-3"></div>
          <div className= "megumiblue-line-subtopA2-4"></div>
          <div className= "megumiblue-line-subtopA2-5"></div>
          <div className= "megumiblue-line-subtopA2-6"></div>
          <div className= "megumiblue-line-subtopA2-7"></div>
          <div className= "megumiblue-line-subtopA2-8"></div>
          <div className= "megumiblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='megumilineas3'>
          <div className= "megumiblue-line-subtopA">
          <h5 className='megumilineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "megumiblue-line-subtopB3"></div>
          <div className= "megumiblue-line-subtopC3"></div>
          <div className= "megumiblue-line-subtopD3"></div>
        </div>

        <div className='megumisublineas3'>
          <div className= "megumiblue-line-subtopA-1"></div>
          <div className= "megumiblue-line-subtopA-2"></div>
          <div className= "megumiblue-line-subtopB3-1"></div>
        </div>

    {/* Lineas de Expansion de Dominio de "Informacion Expandida" */}      

        <div className='megumilineas4'>
          <div className= "megumiblue-line-subtopA">
          <h5 className='megumilineassubtitulo2'>Expansión de Dominio</h5>
          </div>
          <div className= "megumiblue-line-subtopB4"></div>
          <div className= "megumiblue-line-subtopC4"></div>
          <div className= "megumiblue-line-subtopD4"></div>
        </div>

        <div className='megumisublineas4'>
          <div className= "megumiblue-line-subtopB4-1"></div>
          </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="megumiinfo-todo">
           <div className="megumiinfo-left">
              <div className="megumicantidadenergia">
              <h3> ● Inmensa Cantidad de Energia Maldita</h3>
              <p>A pesar de no ser un hechicero de Grado Especial, Megumi posee una gran cantidad de energia maldita. Esto le permite poder invocar varios Shikigamis constantemente sin cansarse. Incluso puede expandir su dominio (lo cual consume mucha energia maldita independientemente del hechicero) despues de haber invocado multiples Shikigamis.</p>
              </div>             
           </div> 
           <div className="megumiinfo-right">
              <img src={megumienergiamaldita} alt="" className="megumitecnicas1"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="megumiinfo-todo2">
           <div className="megumiinfo-left2">
              <div className="megumi10sombras">
              <h3> ● Tecnica de las 10 Sombras</h3>
              <p>Tecnica que permite invocar 10 tipos de poderosos Shikigamis usando sombras como intermediario. Tambien permite al usuario manipular sombras permitiendole ocultarse en ellas o guardar objetos. Megumi heredo esta tecnica de la Familia Zenin.</p>
              </div>
              <div className="megumiperros">
              <h3> ● Perros Divinos (Divine Dogs)</h3>
              <p>Shikigamis gemelos con apariencia de perros que tienen poderosas narices para rastrear y garras letales para exorcizar maldiciones.</p>
              </div>
              <div className="megumiperrototal">
              <h3> ● Perros Divinos: Totalidad (Divine Dogs: Totality)</h3>
              <p>Despues de que un perro Shikigami fuera destruido, Megumi incorporo los poderes de ese perro a su gemelo. La version mejorada es capaz de luchar contra maldiciones de Categoria Especial.</p>
              </div>
              <div className="meguminue">
              <h3> ● Nue (Nue)</h3>
              <p>Shikigami con alas que pueden disparar ondas electricas. Megumi usa este Shikigami principalmente como soporte para otros Shikigamis debido a su movilidad.</p>
              </div>
              <div className="megumiserpiente">
              <h3> ● Gran Serpiente (Great Serpent)</h3>
              <p>Shikigami con forma de serpiente gigante capaz de inmovilizar oponentes y derrotar maldiciones de bajo nivel.</p>
              </div>
              <div className="megumisapo">
              <h3> ● Sapo (Toad)</h3>
              <p>Shikigami con forma de sapo enorme equipado con una poderosa lengua que puede coger personas y tirarlas por el aire. Megumi usa este Shikigami para ponerse a el o a sus aliados a salvo.</p>
              </div>
              <div className="megumielefante">
              <h3> ● Elefante Maximo (Max Elephant)</h3>
              <p>Shikigami con forma de elefante que puede producir grandes cantidades de agua y su peso se puede usar de forma ofensiva.</p>
              </div>
              <div className="megumiconejos">
              <h3> ● Escape de Conejos (Rabbit Escape)</h3>
              <p>Shikigamis con forma de conejo que sirven como distraccion para que el usuario pueda escapar o preparar una estrategia. Megumi puede invocar estos Shikigamis de forma ilimitada.</p>
              </div>
              <div className="megumimahoraga">
              <h3> ● Mahoraga (Mahoraga)</h3>
              <p>Espada de Ocho Mangos Sila Divergente General Divino: Mahoraga. Es el Shikigami mas poderoso que ofrece la Tecnica de las 10 Sombras. Ningun usuario de esta tecnica en la historia a podido domar a este Shikigami, incluido Megumi. El solo amenaza con usarlo como "la ultima opcion" si esta 100% seguro que iba perder un combate, invocando el Shikigami para que ataque tanto a el como al oponente.</p>
              </div>
           </div> 
           <div className="megumiinfo-right2">
              <img src={megumitecnica} alt="" className="megumitecnicas1"/>
              <img src={megumiperros} alt="" className="megumitecnicas2"/>
              <img src={megumiperrototal} alt="" className="megumitecnicas3"/>
              <img src={meguminue} alt="" className="megumitecnicas4"/>
              <img src={megumiserpiente} alt="" className="megumitecnicas5-1"/>
              <img src={megumisapo} alt="" className="megumitecnicas6"/>
              <img src={megumielefante} alt="" className="megumitecnicas7"/>
              <img src={megumiconejos} alt="" className="megumitecnicas8"/>
              <img src={megumimahoraga} alt="" className="megumitecnicas9"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="megumiinfo-todo3">
           <div className="megumiinfo-left3">
              <div className="itadoriconvergencia">
              <h3> ● El Abismo Desconocido del Pozo (The Well's Unknown Abyss)</h3>
              <p>Extensión de la Tecnica de las 10 Sombras. Permite combinar los Shikigamis Sapo y Nue creando sapos con alas que ayudan al usuario en batalla. Si son destruidos, no afecta a Nue ni a Sapo.</p>
              </div>
           </div> 
           <div className="megumiinfo-right3">
              <img src={megumisaposalas} alt="" className="megumitecnicas1"/>
           </div>
        </div> 

    {/* Informacion Expansion de Dominio de "Informacion Expandida" */}

        <div className="megumiinfo-todo4">
           <div className="megumiinfo-left4">
              <div className="itadoridominiosimple">
              <h3> ● Jardin Sombrio de Chimeras (Chimera Shadow Garden)</h3>
              <p>En su forma incompleta crea un area espesa hecha de sombras y permite invocar Shikigamis de forma infinita desde esta. Tambien permite al usuario manipular las sombras como el quiera. Megumi puede esconderse en las sombras o puede crear clones de el. Usó el dominio por primera vez cuando lucho dentro de un dominio incompleto contra un Portador de Dedos.</p>
              </div>
           </div> 
           <div className="megumiinfo-right4">
              <img src={megumidominio} alt="" className="megumitecnicas1"/>
           </div>
        </div> 
    </div>  
    </div>
  )
}

export default Megumi

