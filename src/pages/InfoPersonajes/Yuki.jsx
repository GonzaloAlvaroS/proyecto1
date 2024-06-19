import React, { useState } from 'react'
import "./Yuki.css"
import infoyuki from "../../assets/infoyuki.png"
import yukiactual from "../../assets/yukiactual.png"
import yukiprincipio from "../../assets/yukiprincipio.png"
import yukiinfoimagen1 from "../../assets/yukiinfoimagen1.png"
import yukienergiamaldita from "../../assets/yukienergiamaldita.png"
import yukitecnicainversa from "../../assets/yukitecnicainversa.png"
import yukitecnica from "../../assets/yukitecnica.png"
import yukidominiosimple from "../../assets/yukidominiosimple.png"
import signointerrogacion from "../../assets/signointerrogacion.png"


const Yuki = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infoyukitodo'>
    <div className='infoyukilineastodo'>
      <div className= "yukiblue-lineA">
      <h5 className='yukilineastitulo'>Yuki Tsukumo</h5>
    </div>
      <div className= "yukiblue-lineC"></div>
      <div className= "yukiblue-linemini1"></div>
      <div className= "yukiblue-linemini2"></div>
      <div className= "yukiblue-linemini3"></div>
      <div className= "yukiblue-linemini4"></div>
      <div className= "yukiblue-linemini5"></div>
      <div className= "yukiblue-linemini6"></div>
      <div className= "yukiblue-linemini7"></div>
      <div className= "yukiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='yukigeneral'>
      <img src={infoyuki} alt="" className='infoyuki'/>
      <p className='yukinombre'><b>Nombre:</b> Yuki Tsukumo</p>
      <p className='yukiedad'><b>Edad:</b> 30(+)</p>
      <p className='yukigenero'><b>Genero:</b> Femenino</p>
      <p className='yukiespecie'><b>Especie:</b> Humano</p>
      <p className='yukiocupacion'><b>Ocupación:</b> Hechicera</p>
      <p className='yukidebut'><b>Primera Aparicion:</b> Capitulo 29</p>
      <p className='yukiestado1'><b>Estado:</b></p>
      <p className={`yukiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`yukiestado3 ${showActual ? 'hidden' : ''}`}>Fallecida</p>
      <p className='yukiestado'><b>Estado:</b></p>
      <p className='yukiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`yukiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`yukiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='yukicomparacion'>
      <img src={yukiprincipio} alt="" className={`yukiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={yukiactual} alt="" className={`yukiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='yukiinformacionexpandida'>
      <div className='yukidescripcion'>
        <h1>Descripción:</h1>
        <p>Yuki Tsukumo es un personaje secundario importante en Jujutsu Kaisen. Es una de los 4 hechiceros de Grado Especial. Su reputacion consiste en ser la unica hechicera de Grado Especial que no acepta misiones. En verdad, Yuki simplemente no esta de acuerdo con los metodos de los Altos Mandos y trabaja en la mision de un mundo sin maldiciones por su cuenta.</p>
      </div>
      <div className='yukiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='yukiapariencia'>Yuki es una mujer muy alta (1.82cm) y con un cuerpo atletico. Su cabello es rubio y se extiende hasta su espalda, tiene ojos marrones grandes y cejas finas.</p>
        <p className='yukipersonalidad'>Es una persona indiferente, llena de energia y confiada de si misma, la cual no tiene miedo a decir lo que piensa en cualquier momento. Incluso es las situaciones mas serias, la personalidad de Yuki se mantiene intacta. Aoi Todo heredo su famosa frase "¿Que tipo de mujer te gusta?" de Yuki. Ella le pregunto lo mismo cuando se conocieron por primera vez cuando Todo era un niño de primaria. Desde ese momento, Yuki acepto a Todo como su alumno y le enseño todo lo que sabe.</p>
      </div>
      <div className='yukihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='yukifuerza'>Yuki es una combatiente extremadamente poderosa siendo una de los 4 hechiceros de Grado Especial los cuales poseen habilidades impresionantes. Los Altos Mandos y el Cuartel General de Jujutsu no sabian nada sobre los poderes y habilidades de Yuki a pesar de darle el Grado Especial. Gracias a su tecnica, Yuki es la hechicera con mas fuerza bruta, pudiendo acabar con maldiciones de Categoria Especial de un solo golpe y luchar mano a mano, llegando a superar en algunos momentos, a hechiceros de altisimo nivel como Kenjaku.</p>
        <p className='yukivelocidadresistencia'>Su velocidad no se queda atras, y aunque no sea tan veloz como Maki, Yuji o Gojo, pudo competir contra la velocidad de Kenjaku y seguirle el ritmo durante toda su batalla. Yuki es extremadamente resistente para ser un humano. Aun teniendo un daño severo en la cabeza y un brazo completamente roto, Yuki no solo pudo seguir moviendose a pesar de sus heridas, sino tambien pudo seguir usando su tecnica y peleo en terminos iguales en combate cuerpo a cuerpo contra Kenjaku.</p>
        <p className='yukiskill'>Yuki es una combatiente cuerpo a cuerpo la cual complementa sus artes marciales junto a su tecnica innata permitiendole lanzar ataques devastadores. En su primer encuentro cuerpo a cuerpo contra Kenjaku, ella pudo literalmente atravesar su defensa rompiendole ambos brazos y lanzarlo volando varios metros lejos. Durante toda su pelea, se demostro que Yuki era superior a Kenjaku en el combate cercano.</p>
        <p className='yukiaprendiz'>Aunque debido a su personalidad no lo parezca, Yuki es muy inteligente y analiza cualquier situacion. Usando su conocimiento de jujutsu, Yuki analiza cada movimiento de su oponente, tomando notas de cada tecnica que use y como contrarestarlas.</p>
        <img src={yukiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='yukilineas'>
          <div className= "yukiblue-line-subtopA">
          <h5 className='yukilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "yukiblue-line-subtopB"></div>
          <div className= "yukiblue-line-subtopC"></div>
          <div className= "yukiblue-line-subtopD"></div>
        </div>

        <div className='yukisublineas'>
          <div className= "yukiblue-line-subtopA-1"></div>
          <div className= "yukiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Tecnicas Innatas de "Informacion Expandida" */} 

        <div className='yukilineas2'>
          <div className= "yukiblue-line-subtopA">
          <h5 className='yukilineassubtitulo2'>Tecnica Innata</h5>
          </div>
          <div className= "yukiblue-line-subtopB2"></div>
          <div className= "yukiblue-line-subtopC2"></div>
          <div className= "yukiblue-line-subtopD2"></div>
        </div>

        <div className='yukisublineas2'>
          <div className= "yukiblue-line-subtopB2-1"></div>
        </div>

    {/* Lineas de Tecnicas Antidominio de "Informacion Expandida" */}     

        <div className='yukilineas3'>
          <div className= "yukiblue-line-subtopA">
          <h5 className='yukilineassubtitulo2'>Tecnicas Antidominio</h5>
          </div>
          <div className= "yukiblue-line-subtopB3"></div>
          <div className= "yukiblue-line-subtopC3"></div>
          <div className= "yukiblue-line-subtopD3"></div>
        </div>

        <div className='yukisublineas3'>
          <div className= "yukiblue-line-subtopB3-1"></div>
        </div>  

    {/* Lineas de Expansion de Dominio de "Informacion Expandida" */} 

      <div className='yukilineas4'>
          <div className= "yukiblue-line-subtopA">
          <h5 className='yukilineassubtitulo2'>Expansión de Dominio</h5>
          </div>
          <div className= "yukiblue-line-subtopB4"></div>
          <div className= "yukiblue-line-subtopC4"></div>
          <div className= "yukiblue-line-subtopD4"></div>
        </div>

        <div className='yukisublineas4'>
          <div className= "yukiblue-line-subtopB4-1"></div>
        </div>  
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="yukiinfo-todo">
           <div className="yukiinfo-left">
              <div className="yukicantidadenergia">
              <h3> ● Inmensa Cantidad de Energia Maldita</h3>
              <p>Yuki es de Grado Especial, eso significa que tiene una reserva de energia maldita muy superior a la de un Primer Grado. Es capaz de controlar su energia maldita a la perfeccion, pudiendo facilmente cambiar entre su tecnica innata, tecnica inversa y tecnicas antidominio como el Dominio Simple. </p>
              </div>
              <div className="yukitecnicainversa">
              <h3> ● Tecnica Inversa (Reverse Curse Technique)</h3>
              <p>Una tecnica que se crea multiplicando energia maldita, la cual es energia negativa debido a que proviene de los sentimientos negativos de las personas, para asi crear energia positiva. Tiene varios usos, pero su uso principal es para curar heridas e incluso tecnicas desgastadas despues de realizar una expansion de dominio. Yuki uso la tecnica inversa en la batalla dentro del reino del Mestro Tengen, cuando fue herida de gravedad por el factor de nunca fallar del dominio de Kenjaku.</p>
              </div>
           </div> 
           <div className="yukiinfo-right">
              <img src={yukienergiamaldita} alt="" className="yukitecnicas1"/>
              <img src={yukitecnicainversa} alt="" className="yukitecnicas2"/>
              </div>
        </div>

    {/* Informacion Tecnicas Innatas de "Informacion Expandida" */}

        <div className="yukiinfo-todo2">
           <div className="yukiinfo-left2">
              <div className="yukifuriaestelar">
              <h3> ● Furia Estelar (Star Rage)</h3>
              <p>Tecnica que permite al usuario añadirse masa virtual de forma infinita lo que incrementa drasticamente el poder destructivo. Yuki tiene un Shikigami llamado Garuda que esta conectado directamente con su tecnica innata. Yuki tambien puede añadir masa a Garuda, siendo capaz de usarlo como herramienta maldita en combate y pudiendo crear situaciones donde peleen juntos. </p>
              </div>
           </div> 
           <div className="yukiinfo-right2">
              <img src={yukitecnica} alt="" className="yukitecnicas1"/>
              </div>
        </div> 

    {/* Informacion Tecnicas Antidominio de "Informacion Expandida" */}

        <div className="yukiinfo-todo3">
           <div className="yukiinfo-left3">
              <div className="yukidominiosimple">
              <h3> ● Dominio Simple (Simple Domain)</h3>
              <p>Conocido como "El dominio de los debiles". Fue creada por Sadatsuna Ashiya durante la Era Heian. Expande un pequeño dominio en los pies del usuario. Yuki le enseño a Todo a como usar el dominio simple. Contra Kenjaku, el dominio simple de Yuki fue rapidamente neutralizado por Profusión del Útero.</p>
              </div>
           </div> 
           <div className="yukiinfo-right3">
              <img src={yukidominiosimple} alt="" className="yukitecnicas1"/>
           </div>
        </div> 

    {/* Informacion Expansion de Dominio de "Informacion Expandida" */}

        <div className="yukiinfo-todo4">
           <div className="yukiinfo-left4">
              <div className="yukidominio">
              <h3> ● Expansión de Dominio de Yuki</h3>
              <p>Aunque nunca se mostró, Yuki es capaz de expandir su dominio. Yuki y Tengen hablaron sobre si Yuki deberia expandir su dominio contra Kenjaku, pero para evitar que su tecnica innata se quemara despues de expandir el dominio, Tengen le sugerió que usara el Dominio Simple para contrarrestar el dominio de Kenjaku.</p>
              </div>
           </div> 
           <div className="yukiinfo-right4">
              <img src={signointerrogacion} alt="" className="yukitecnicas1"/>
           </div>
        </div>     
    </div>  
    </div>
  )
}

export default Yuki
