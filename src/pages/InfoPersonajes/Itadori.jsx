import React, { useState } from 'react'
import "./Itadori.css"
import infoitadori from "../../assets/infoitadori.png"
import itadoriactual from "../../assets/itadoriactual.png"
import itadoriprincipio from "../../assets/itadoriprincipio.png"
import itadoriinfoimagen1 from "../../assets/itadoriinfoimagen1.png"
import itadorienergiamaldita from "../../assets/itadorienergiamaldita.png"
import puñodivergente from "../../assets/puñodivergente.png"
import manipulacionenergia from "../../assets/manipulacionenergia.png"
import itadoritecnicainversa from "../../assets/itadoritecnicainversa.png"
import itadorimanipulacionsangre from "../../assets/itadorimanipulacionsangre.png"
import itadorishrine from "../../assets/itadorishrine.png"
import signointerrogacion from "../../assets/signointerrogacion.png"
import itadorisangreperforante from "../../assets/itadorisangreperforante.png"
import itadorisupernova from "../../assets/itadorisupernova.png"
import dominiosimple from "../../assets/dominiosimple.png"




const Itadori = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infoitadoritodo'>
    <div className='infoitadorilineastodo'>
      <div className= "itadoriblue-lineA">
      <h5 className='itadorilineastitulo'>Yuji Itadori</h5>
    </div>
      <div className= "itadoriblue-lineC"></div>
      <div className= "itadoriblue-linemini1"></div>
      <div className= "itadoriblue-linemini2"></div>
      <div className= "itadoriblue-linemini3"></div>
      <div className= "itadoriblue-linemini4"></div>
      <div className= "itadoriblue-linemini5"></div>
      <div className= "itadoriblue-linemini6"></div>
      <div className= "itadoriblue-linemini7"></div>
      <div className= "itadoriblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='itadorigeneral'>
      <img src={infoitadori} alt="" className='infoitadori'/>
      <p className='itadorinombre'><b>Nombre:</b> Yuji Itadori</p>
      <p className='itadoriedad'><b>Edad:</b> 15</p>
      <p className='itadorigenero'><b>Genero:</b> Masculino</p>
      <p className='itadoriespecie'><b>Especie:</b> Humano</p>
      <p className='itadoriocupacion'><b>Ocupación:</b> Hechicero / Estudiante</p>
      <p className='itadoridebut'><b>Primera Aparicion:</b> Capitulo 1</p>
      <p className='itadoriestado1'><b>Estado:</b></p>
      <p className={`itadoriestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`itadoriestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='itadoriestado'><b>Estado:</b></p>
      <p className='itadoriestadover' onClick={handleVerClick}>Ver</p>
      <p className={`itadoriestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`itadoriestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='itadoricomparacion'>
      <img src={itadoriprincipio} alt="" className={`itadoriprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={itadoriactual} alt="" className={`itadoriactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='itadoriinformacionexpandida'>
      <div className='itadoridescripcion'>
        <h1>Descripción:</h1>
        <p>Yuji Itadori es el protagonista en Jujutsu Kaisen. Yuji vivia una vida normal hasta que se encontro con Megumi Fushiguro y se comio uno de los dedos de Ryomen Sukuna. Despues de convertirse en el recipiente del Rey de las Maldiciones, Yuji decidio empezar a atender a la Escuela de Hechiceria de Tokio.</p>
      </div>
      <div className='itadoriap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='itadoriapariencia'>Yuji es un joven de altura promedio (1.73cm) y aparenta tener una contextura delgada cuando usa ropa holgada, pero realmente posee una contextura musculosa. Tiene ojos de color marron claro y cabello rosado. Cuando se convertio en el recipiente de Ryomen Sukuna, gano un segundo par de ojos los cuales solo se abren cuando Sukuna controla su cuerpo.</p>
        <p className='itadoripersonalidad'>Es una persona justa y amable con la gente que lo merece y parece importarle no solo la vida de sus compañeros, sino de cualquier persona. Yuji siempre ha pensado que todos merecen una "muerte digna", es por eso que evita arrebatarle la vida a otro ser humano siempre que pueda. Es sin duda uno de los hechiceros mas energeticos y carismaticos, pero tambien puede enojarse muy facilmente cuando presencia crueldad en contra de alguien.</p>
      </div>
      <div className='itadorihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='itadorifuerza'>Yuji es uno de los estudiantes mas poderosos y talentosos de las Escuelas de Hechiceria. Segun Satoru Gojo, esta en el mismo nivel de potencial que Yuta Okkotsu y Kinji Hakari, aquellos 3 que el cree que lo superaran. Yuji nacio con habilidades sobrehumanas permitiendole luchar contra maldiciones de Grado 1 e incluso Grado Especial. Su fuerza le permite destruir paredes con facilidad e incluso puede tirar autos.</p>
        <p className='itadorivelocidadresistencia'>Si hablamos de su velocidad, se sabe que puede correr a 60km por hora y puede esquivar ataques igual de veloces que el sonido. Tiene una increible durabilidad en pelea permitiendole seguir peleando despues de haber tenido multiples lesiones y al ser el recipiente de Sukuna, Yuji es resistente a cualquier tipo de venenos.</p>
        <p className='itadoriskill'>Es un maestro en el combate cuerpo a cuerpo, siendo uno de los hechiceros mas habilidosos por no decir el mas habil. Sus habilidades en el combate le permiten pelear contra maldiciones de Grado 1 o Especial con solo artes marciales.</p>
        <p className='itadoriaprendiz'>Tambien es un aprendiz prodigioso. Por ejemplo, cuando Satoru Gojo le encargo el entrenamiento de ver peliculas para manejar su energia maldita o cuando Aoi Todo le enseño a como ejecutar el Destello Negro, siendo capaz de ejecutar 4 seguidos poco tiempo despues de haberlo aprendido.</p>
        <img src={itadoriinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='itadorilineas'>
          <div className= "itadoriblue-line-subtopA">
          <h5 className='itadorilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "itadoriblue-line-subtopB"></div>
          <div className= "itadoriblue-line-subtopC"></div>
          <div className= "itadoriblue-line-subtopD"></div>
        </div>

        <div className='itadorisublineas'>
          <div className= "itadoriblue-line-subtopA-1"></div>
          <div className= "itadoriblue-line-subtopA-2"></div>
          <div className= "itadoriblue-line-subtopA-3"></div>
          <div className= "itadoriblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='itadorilineas2'>
          <div className= "itadoriblue-line-subtopA">
          <h5 className='itadorilineassubtitulo2'>Tecnicas Innatas</h5>
          </div>
          <div className= "itadoriblue-line-subtopB2"></div>
          <div className= "itadoriblue-line-subtopC2"></div>
          <div className= "itadoriblue-line-subtopD2"></div>
        </div>

        <div className='itadorisublineas2'>
          <div className= "itadoriblue-line-subtopA-1"></div>
          <div className= "itadoriblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}     

        <div className='itadorilineas3'>
          <div className= "itadoriblue-line-subtopA">
          <h5 className='itadorilineassubtitulo2'>Extensiones de Tecnicas</h5>
          </div>
          <div className= "itadoriblue-line-subtopB3"></div>
          <div className= "itadoriblue-line-subtopC3"></div>
          <div className= "itadoriblue-line-subtopD3"></div>
        </div>

        <div className='itadorisublineas3'>
          <div className= "itadoriblue-line-subtopA-1"></div>
          <div className= "itadoriblue-line-subtopA-2"></div>
          <div className= "itadoriblue-line-subtopB3-1"></div>
        </div>

    {/* Lineas de Tecnicas Antidominio de "Informacion Expandida" */}      

        <div className='itadorilineas4'>
          <div className= "itadoriblue-line-subtopA">
          <h5 className='itadorilineassubtitulo2'>Tecnicas Antidominio</h5>
          </div>
          <div className= "itadoriblue-line-subtopB4"></div>
          <div className= "itadoriblue-line-subtopC4"></div>
          <div className= "itadoriblue-line-subtopD4"></div>
        </div>

        <div className='itadorisublineas4'>
          <div className= "itadoriblue-line-subtopB4-1"></div>
          </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="itadoriinfo-todo">
           <div className="itadoriinfo-left">
              <div className="cantidadenergia">
              <h3> ● Inmensa Cantidad de Energia Maldita</h3>
              <p>La cantidad de energia maldita que Yuji posee viene de parte de Sukuna. Mientras la historia avanzaba, Yuji fue aprendiendo a como controlar su energia maldita, combinandola con su fuerza sobrehumana. Despues del Arco del Incidente de Shibuya, Yuji consiguio manejar a la perfeccion su energia maldita, mas que todo gracias a los Destellos Negros que libero en sus batallas pasadas.</p>
              </div>
              <div className="itadoripuñodivergente">
              <h3> ● Puño Divergente (Divergent Fist)</h3>
              <p>Sucede cuando el usuario, despues de realizar un golpe, hace que su energia maldita fluya en su puño creando un segundo impacto mas poderoso. Esto se considera un mal habito debido a que los 2 impactos tienen que ser uno solo para que el golpe sea mas eficiente. Yuji usaba esta tecnica en sus principios como hechicero, pero despues del entrenamiento con Aoi Todo dejo de usarlo. Tiempo despues aprendio a usarlo voluntariamente y como ataque sorpresa debido a su rareza.</p>
              </div>
              <div className="itadoridestellonegro">
              <h3> ● Destello Negro (Black Flash)</h3>
              <p>Un fenomeno que crea una una distorsion en el espacio cuando un usuario conecta un impacto con energia maldita en un lapso de 0.000001 segundos despues de un ataque fisico, causando que la energia maldita brille de color negro. El impacto es 2.5 mas poderoso que uno normal y no se puede realizar a voluntad. Aparentemente, el unico capaz de realizarlo a voluntad es Yuji Itadori como se mostro en su batalla contra Mahito en el Incidente de Shibuya. Yuji fue capaz de conectar 7 Destellos Negros seguidos, teniendo un total de 16 veces.</p>
              </div>
              <div className="itadoriinversa">
              <h3> ● Tecnica Inversa (Reverse Curse Technique)</h3>
              <p>Una tecnica que se crea multiplicando energia maldita, la cual es energia negativa debido a que proviene de los sentimientos negativos de las personas, para asi crear energia positiva. Tiene varios usos, pero su uso principal es para curar heridas e incluso tecnicas desgastadas despues de realizar una expansion de dominio. Yuji aprendio esta tecnica en el periodo de entrenamiento antes de la batalla final contra Sukuna y fue gracias al Entrenamiento de Intercambio.</p>
              </div>
           </div> 
           <div className="itadoriinfo-right">
              <img src={itadorienergiamaldita} alt="" className="itadoritecnicas1"/>
              <img src={puñodivergente} alt="" className="itadoritecnicas2"/>
              <img src={manipulacionenergia} alt="" className="itadoritecnicas3"/>
              <img src={itadoritecnicainversa} alt="" className="itadoritecnicas4"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="itadoriinfo-todo2">
           <div className="itadoriinfo-left2">
              <div className="itadorimanipulacionsangre">
              <h3> ● Manipulación de Sangre (Blood Manipulation)</h3>
              <p>Tecnica que permite al usuario manipular sangre tanto dentro como fuera de su cuerpo y tiene multiples y distintos usos. Despues de absorber a los Uteros Malditos (4 al 9), Yuji pudo obtener la Manipulación de Sangre, la tecnica hereditaria del Clan Kamo.</p>
              </div>
              <div className="itadorishrine">
              <h3> ● Técnica de Relicario (Shrine)</h3>
              <p>Tecnica que permite crear 2 tipos de ataques cortantes. Despues de golpear a Sukuna con un Destello Negro, Yuji desperto la Tecnica de Relicario, la cual se quedo grabada en el cuando Sukuna estaba en su cuerpo. Aunque sea la misma tecnica, la de Yuji tiene sus diferencias. Cuando la activa crea lineas con forma de tijeras las cuales se cortan segun la dirección de las tijeras.</p>
              </div>
           </div> 
           <div className="itadoriinfo-right2">
              <img src={itadorimanipulacionsangre} alt="" className="itadoritecnicas1"/>
              <img src={itadorishrine} alt="" className="itadoritecnicas2"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Innatas (Extensiones) de "Informacion Expandida" */}

        <div className="itadoriinfo-todo3">
           <div className="itadoriinfo-left3">
              <div className="itadoriconvergencia">
              <h3> ● Convergencia (Convergence)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. Permite comprimir y condensar la sangre del usuario al su limite absoluto usando energia maldita. El orbe de sangre que se crea usando esta tecnica es necesaria para usar Sangre Perforante y Supernova. Debido a su inexperiencia, Yuji aun no puede crear sangre usando energia maldita.</p>
              </div>
              <div className="itadorisangreperforante">
              <h3> ● Sangre Perforante (Piercing Blood)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. El usuario puede disparar un rayo de sangre que viaja a la velocidad del sonido juntando sus 2 manos alrededor de un orbe de sangre. Para usar esta tecnica se necesita usar Convergencia primero.</p>
              </div>
              <div className="itadorisupernova">
              <h3> ● Supernova (Supernova)</h3>
              <p>Extensión de la tecnica Manipulación de Sangre. El usuario puede explotar un orbe de sangre a voluntad o incluso su propia sangre. Para usar esta tecnica se necesita usar Convergencia primero.</p>
              </div>
           </div> 
           <div className="itadoriinfo-right3">
              <img src={signointerrogacion} alt="" className="itadoritecnicas1"/>
              <img src={itadorisangreperforante} alt="" className="itadoritecnicas2"/>
              <img src={itadorisupernova} alt="" className="itadoritecnicas3"/>
           </div>
        </div> 

    {/* Informacion Tecnicas Antidominio de "Informacion Expandida" */}

        <div className="itadoriinfo-todo4">
           <div className="itadoriinfo-left4">
              <div className="itadoridominiosimple">
              <h3> ● Dominio Simple (Simple Domain)</h3>
              <p>Conocido como "El dominio de los debiles". Fue creada por Sadatsuna Ashiya durante la Era Heian. Expande un pequeño dominio en los pies del usuario. Yuji aprendio el Dominio Simple cuando intercambio almas con Atsuya Kusakabe y la uso cuando Sukuna expandio su dominio de 99 segundos.</p>
              </div>
           </div> 
           <div className="itadoriinfo-right4">
              <img src={dominiosimple} alt="" className="itadoritecnicas1"/>
           </div>
        </div> 
    </div>  
    </div>
  )
}

export default Itadori
