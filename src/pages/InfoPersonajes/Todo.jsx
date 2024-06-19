import React, { useState } from 'react'
import "./Todo.css"
import infotodo from "../../assets/infotodo.png"
import todoactual from "../../assets/todoactual.png"
import todoprincipio from "../../assets/todoprincipio.png"
import todoinfoimagen1 from "../../assets/todoinfoimagen1.png"
import todoenergiamaldita from "../../assets/todoenergiamaldita.png"
import tododestellonegro from "../../assets/tododestellonegro.png"
import todotecnica from "../../assets/todotecnica.png"
import todoreboogiewoogie from "../../assets/todoreboogiewoogie.png"
import tododominiosimple from "../../assets/tododominiosimple.png"




const Todo = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infotodotodo'>
    <div className='infotodolineastodo'>
      <div className= "todoblue-lineA">
      <h5 className='todolineastitulo'>Aoi Todo</h5>
    </div>
      <div className= "todoblue-lineC"></div>
      <div className= "todoblue-linemini1"></div>
      <div className= "todoblue-linemini2"></div>
      <div className= "todoblue-linemini3"></div>
      <div className= "todoblue-linemini4"></div>
      <div className= "todoblue-linemini5"></div>
      <div className= "todoblue-linemini6"></div>
      <div className= "todoblue-linemini7"></div>
      <div className= "todoblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='todogeneral'>
      <img src={infotodo} alt="" className='infotodo'/>
      <p className='todonombre'><b>Nombre:</b> Aoi Todo</p>
      <p className='todoedad'><b>Edad:</b> 18</p>
      <p className='todogenero'><b>Genero:</b> Masculino</p>
      <p className='todoespecie'><b>Especie:</b> Humano</p>
      <p className='todoocupacion'><b>Ocupación:</b> Hechicero / Estudiante</p>
      <p className='tododebut'><b>Primera Aparicion:</b> Capitulo 8</p>
      <p className='todoestado1'><b>Estado:</b></p>
      <p className={`todoestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`todoestado3 ${showActual ? 'hidden' : ''}`}>Vivo</p>
      <p className='todoestado'><b>Estado:</b></p>
      <p className='todoestadover' onClick={handleVerClick}>Ver</p>
      <p className={`todoestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`todoestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='todocomparacion'>
      <img src={todoprincipio} alt="" className={`todoprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={todoactual} alt="" className={`todoactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='todoinformacionexpandida'>
      <div className='tododescripcion'>
        <h1>Descripción:</h1>
        <p>Aoi Todo es un personaje secundario relevante en Jujutsu Kaisen. Es un estudiante de tercer año en la Escuela de Hechiceria de Kioto y un hechicero de Primer Grado. Fue alumno de Yuki Tsukumo cuando era mas joven y considera a Yuji Itadori como su mejor amigo.</p>
      </div>
      <div className='todoap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='todoapariencia'>Todo es un hombre muy alto (1.90cm) con un cuerpo pesado y musculoso. Sus ojos son pequeños y de color negro al igual que su cabello, el cual esta atado a un moño alto. Su caracteristica mas notable es la larga cicatriz que tiene en el lado izquierdo de su cara debido al duro entrenamiento con Yuki.</p>
        <p className='todopersonalidad'>Es una persona muy unica y extremadamente excéntrica. Aparenta ser una persona que solo le interesa pelear y mostrar su cuerpo musculoso cada vez que tenga oportunidad. Esta obsesionado con la cantante Takada, haciendo que normalmente la mencione y a veces la visualice cuando tiene dialogos consigo mismo. Todo odia que la gente lo aburra y cada vez que conoce a alguien le pregunta "¿Que tipo de mujer te gusta?" para poder leer a la persona y su reaccion a la respuesta del individuo puede variar mucho. Todo posee una parte de el la cual es muy inteligente y filosófica como se mostro cuando conocio a Yuji Itadori.</p>
      </div>
      <div className='todohab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='todofuerza'>Todo es un hechicero muy poderoso y uno de los estudiantes mas poderosos de las 2 escuelas de hechiceria. Obtuvo el rango de Primer Grado siendo estudiante a pesar de no venir de una familia de hechiceros. Posee una fuerza que sobrepasa a la de Panda, a la de Maki (en sus inicios) y rivaliza con la de Yuji. Contra la mayoria de oponentes, Todo solo necesita su fuerza bruta para ganar los combates.</p>
        <p className='todovelocidadresistencia'>Para igualar su increible fuera, Todo posee una velocidad extrema. Utiliza su velocidad en su estilo de combate para acertar golpes continuos antes que su oponente pueda reaccionar. Su velocidad tambien le permite moverse de forma inpredecible usando su tecnica maldita. No se ha mostrado mucho acerca de su resistencia debido a que esquiva casi cualquier ataque gracias a su velocidad, pero su resistencia le permite soportar varios ataques de Yuji Itadori sin mostrar casi ningun daño.</p>
        <p className='todoskill'>Es un habilidoso en el combate cuerpo a cuerpo y prefiere combatir mano a mamo siempre que puede debido a sus capacidades fisicas. Fue capaz de sobrepasar a Megumi sin esfuerzo y a Yuji al principio del combate que tuvieron en el Evento de Intercambio.</p>
        <p className='todoaprendiz'>Aunque sus actutides lo hagan ver un cabeza hueca, en verdad es muy inteligente. Todo asegura tener un IQ de 530,000. Usa su propia experiencia y su vasto conocimiento de jujutsu en sus combates. Adicionalmente, su velocidad de analisis es imposible de igualar pudiendo adivinar cuales son y como funcionan todos los ataques de Hanami en 0.01 segundos.</p>
        <img src={todoinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='todolineas'>
          <div className= "todoblue-line-subtopA">
          <h5 className='todolineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "todoblue-line-subtopB"></div>
          <div className= "todoblue-line-subtopC"></div>
          <div className= "todoblue-line-subtopD"></div>
        </div>

        <div className='todosublineas'>
          <div className= "todoblue-line-subtopA-1"></div>
          <div className= "todoblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='todolineas2'>
          <div className= "todoblue-line-subtopA">
          <h5 className='todolineassubtitulo2'>Tecnicas Innatas</h5>
          </div>
          <div className= "todoblue-line-subtopB2"></div>
          <div className= "todoblue-line-subtopC2"></div>
          <div className= "todoblue-line-subtopD2"></div>
        </div>

        <div className='todosublineas2'>
          <div className= "todoblue-line-subtopA-1"></div>
          <div className= "todoblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Antidominio de "Informacion Expandida" */}      

        <div className='todolineas4'>
          <div className= "todoblue-line-subtopA">
          <h5 className='todolineassubtitulo2'>Tecnicas Antidominio</h5>
          </div>
          <div className= "todoblue-line-subtopB4"></div>
          <div className= "todoblue-line-subtopC4"></div>
          <div className= "todoblue-line-subtopD4"></div>
        </div>

        <div className='todosublineas4'>
          <div className= "todoblue-line-subtopB4-1"></div>
          </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="todoinfo-todo">
           <div className="todoinfo-left">
              <div className="todocantidadenergia">
              <h3> ● Gran Cantidad de Energia Maldita</h3>
              <p>Aoi Todo posee grandes cantidades de energia maldita y tiene un gran conocimiento de como usarla. Puede reforzar sus golpes con energia maldita para exorcizar maldiciones facilmente y puede imbuir energia maldita a herramientas o armas. Incluso posee una tecnica innata que no le consume casi nada de energia maldita.</p>
              </div>
              <div className="tododestellonegro">
              <h3> ● Destello Negro (Black Flash)</h3>
              <p>Un fenomeno que crea una una distorsion en el espacio cuando un usuario conecta un impacto con energia maldita en un lapso de 0.000001 segundos despues de un ataque fisico, causando que la energia maldita brille de color negro. El impacto es 2.5 mas poderoso que uno normal y no se puede realizar a voluntad. Todo uso el destello negro por unica vez cuando lucho contra Mahito junto a Yuji Itadori en el Incidente de Shibuya.</p>
              </div>
           </div> 
           <div className="todoinfo-right">
              <img src={todoenergiamaldita} alt="" className="todotecnicas1"/>
              <img src={tododestellonegro} alt="" className="todotecnicas2"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="todoinfo-todo2">
           <div className="todoinfo-left2">
              <div className="todoboogiewoogie">
              <h3> ● Boogie Woogie (Boogie Woogie)</h3>
              <p>Tecnica que permite intercambiar posiciones con lo que sea que tenga un minimo de energia maldita. La tecnica se activa a través de un aplauso y puede activarse multiples veces en poco tiempo. La tecnica tambien permite intercambiar los lugares de 2 objetivos sin contar al usuario con la tecnica. Aunque la tecnica se active mediante un aplauso, Todo no tiene que usar sus dos manos para hacerlo como se mostro en su batalla contra Mahito, activando el Boogie Woogie chocando una de sus manos con una de Mahito.</p>
              </div>
              <div className="todoreboogiewoogie">
              <h3> ● Re-Boogie Woogie (Boogie Woogie: Revised)</h3>
              <p>Despues de perder su mano izquierda y hacerla remplazado por un vibraslap, Todo cambio la condicion para activar Boogie Woogie de un aplauso a el choque de una pieza de metal y una caja de madera. Esto le permite cambiar de lugar 50 veces por segundo, si es necesario.</p>
              </div>
           </div> 
           <div className="todoinfo-right2">
              <img src={todotecnica} alt="" className="todotecnicas1"/>
              <img src={todoreboogiewoogie} alt="" className="todotecnicas2"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Antidominio de "Informacion Expandida" */}

        <div className="todoinfo-todo4">
           <div className="todoinfo-left4">
              <div className="tododominiosimple">
              <h3> ● Dominio Simple (Simple Domain)</h3>
              <p>Conocido como "El dominio de los debiles". Fue creada por Sadatsuna Ashiya durante la Era Heian. Expande un pequeño dominio en los pies del usuario. Todo aprendio el dominio simple gracias a Yuki Tsukumo y lo uso cuando Mahito expandio su dominio por 0.2 segundos en el Incidente de Shibuya.</p>
              </div>
           </div> 
           <div className="todoinfo-right4">
              <img src={tododominiosimple} alt="" className="todotecnicas1"/>
           </div>
        </div> 
    </div>  
    </div>
  )
}

export default Todo
