import React, { useState } from 'react'
import "./Maki.css"
import infomaki from "../../assets/infomaki.png"
import makiactual from "../../assets/makiactual.png"
import makiprincipio from "../../assets/makiprincipio.png"
import makiinfoimagen1 from "../../assets/makiinfoimagen1.png"
import makienergiamaldita from "../../assets/makienergiamaldita.png"
import makirestriccioncelestial1 from "../../assets/makirestriccioncelestial1.png"
import makirestriccioncelestial2 from "../../assets/makirestriccioncelestial2.png"


const Maki = () => {
  const [showActual, setShowActual] = useState(true);

  const handleVerClick= () => {
    setShowActual(!showActual);
  };


  return (

    /* Lineas de "Informacion General" */

    <div className='infomakitodo'>
    <div className='infomakilineastodo'>
      <div className= "makiblue-lineA">
      <h5 className='makilineastitulo'>Maki Zenin </h5>
    </div>
      <div className= "makiblue-lineC"></div>
      <div className= "makiblue-linemini1"></div>
      <div className= "makiblue-linemini2"></div>
      <div className= "makiblue-linemini3"></div>
      <div className= "makiblue-linemini4"></div>
      <div className= "makiblue-linemini5"></div>
      <div className= "makiblue-linemini6"></div>
      <div className= "makiblue-linemini7"></div>
      <div className= "makiblue-linemini8"></div>
    </div>

    {/* Contenido de "Informacion General"  */}

    <div className='makigeneral'>
      <img src={infomaki} alt="" className='infomaki'/>
      <p className='makinombre'><b>Nombre:</b> Maki Zenin</p>
      <p className='makiedad'><b>Edad:</b> 16</p>
      <p className='makigenero'><b>Genero:</b> Femenino</p>
      <p className='makiespecie'><b>Especie:</b> Humano</p>
      <p className='makiocupacion'><b>Ocupación:</b> Hechicera / Estudiante</p>
      <p className='makidebut'><b>Primera Aparicion:</b> Capitulo 5</p>
      <p className='makiestado1'><b>Estado:</b></p>
      <p className={`makiestado2 ${showActual ? '' : 'hidden'}`}> ?</p>
      <p className={`makiestado3 ${showActual ? 'hidden' : ''}`}>Viva</p>
      <p className='makiestado'><b>Estado:</b></p>
      <p className='makiestadover' onClick={handleVerClick}>Ver</p>
      <p className={`makiestadopricipio ${showActual ? '' : 'hidden'}`}>[Principio]</p>
      <p className={`makiestadoactual ${showActual ? 'hidden' : ''}`}>[Actual]</p>
      <div className='makicomparacion'>
      <img src={makiprincipio} alt="" className={`makiprincipio ${showActual ? '' : 'hidden'}`}/>
      <img src={makiactual} alt="" className={`makiactual ${showActual ? 'hidden' : ''}`}/>
      </div>
    </div>

    {/* Contenido de "Informacion Expandida" */}

    <div className='makiinformacionexpandida'>
      <div className='makidescripcion'>
        <h1>Descripción:</h1>
        <p>Maki Zenin es un personaje secundario importante en Jujutsu Kaisen. Hija de Ogi Zenin y hermana mayor de Mai Zenin, Maki nacio dentro del Clan Zenin. Al nacer sin energia maldita, Maki fue despreciada y completamente excluida dentro de su clan y desea ser una hechicera importante para fastidiar a su familia y probarles lo equivocados que estaban con ella.</p>
      </div>
      <div className='makiap_per'>
        <h1>Apariencia y Personalidad:</h1>
        <p className='makiapariencia'>Maki es una mujer alta (1.70cm) y atletica. Posee ojos dorados y un cabello largo de color verde oscuro, normalmente atado en una coleta. Tambien usa unos lentes especializados en ver maldiciones debido a su Restricción Celestial. Despues del Incidente de Shibuya, debido a haber sido quemada severamente por Jogo, Maki ahora posee multiples cicatrices por todo el cuerpo y su cabello ahora solo le llega hasta sus orejas.</p>
        <p className='makipersonalidad'>Debido a su personalidad puede llegar a aparentar ser una persona fria, pero no lo es del todo. Es una persona testaruda y directa la cual siempre intenta valerse por si misma. Es extremadamente determinada, capaz y motivada a escapar de los estandares que le fueron puestos por su propia familia.</p>
      </div>
      <div className='makihab_pod'>
        <h1>Habilidades y Poderes:</h1>
        <p className='makifuerza'>Maki es una hechicera de Cuarto Grado, pero su grado no va de acuerdo a sus habilidades. Nacio casi sin energia maldita, pero a cambio recibio habilidades fisicas impresionantes debido a su Restricción Celestial. Satoru Gojo y Mei Mei estan de acuerdo de que Maki deberia ser de Segundo Grado como minimo. Su fuerza le permite dañar severamente a maldiciones de Categoria Especial con la ayuda de herramientas malditas. Despues de abandonar su energia maldita por completo, la fuerza de Maki aumento a tal punto de ser mas fuerte que Toji Fushiguro.</p>
        <p className='makivelocidadresistencia'>Su velocidad esta a la par con su fuerza, siendo capaz de esquivar e incluso atrapar balas con las manos. Despues de abandonar su energia maldita, el cuerpo de Maki podia moverse y reaccionar a una velocidad que podia competir contra la tecnica maldita de Naoya, la cual le permitia romper la velocidad subsónica. Actualmente Maki ha mejorado su velocidad, pudiendose moverse 3 veces mas que la velocidad del sonido. Su resistencia no se queda atras. Su cuerpo de acero le permite soportar poderosos ataques de tecnicas malditas.</p>
        <p className='makiskill'>Maki es una experta en el uso de armas y herramientas malditas, siendo la mas habilidosa de todos los hechiceros. Tambien es una experta en el combate cuerpo a cuerpo, rivalizando con las habilidades de Yuji Itadori, pero no superandolo. </p>
        <p className='makiaprendiz'>Su intelecto es superior al promedio debido a que se crió en uno de los clanes mas importantes y poderosos que existen. Maki puede neutralizar enemigos con tecnicas poderosas con solo inteligencia, astucia y fuerza bruta como lo hizo con Naoya y Ogi.</p>
        <img src={makiinfoimagen1} alt=""/>
        
    {/* Todo de Tecnicas de "Informacion Expandida" */}   
        
        <h2>Jujutsu:</h2>

    {/* Lineas de Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className='makilineas'>
          <div className= "makiblue-line-subtopA">
          <h5 className='makilineassubtitulo'>Manipulación de Energia Maldita</h5>
          </div>
          <div className= "makiblue-line-subtopB"></div>
          <div className= "makiblue-line-subtopC"></div>
          <div className= "makiblue-line-subtopD"></div>
        </div>

        <div className='makisublineas'>
          <div className= "makiblue-line-subtopB-1"></div>
        </div>

    {/* Lineas de Restricción Celestial de "Informacion Expandida" */} 

        <div className='makilineas2'>
          <div className= "makiblue-line-subtopA">
          <h5 className='makilineassubtitulo2'>Restricción Celestial</h5>
          </div>
          <div className= "makiblue-line-subtopB2"></div>
          <div className= "makiblue-line-subtopC2"></div>
          <div className= "makiblue-line-subtopD2"></div>
        </div>

        <div className='makisublineas2'>
        <div className= "makiblue-line-subtopA2-1"></div>
          <div className= "makiblue-line-subtopB2-1"></div>
        </div>
      </div>

    {/* Informacion Tecnicas de MDEM de "Informacion Expandida" */} 

        <div className="makiinfo-todo">
           <div className="makiinfo-left">
              <div className="makicantidadenergia">
              <h3> ● Cero Energia Maldita</h3>
              <p>Maki originalmente poseía bajos niveles de energia maldita, incluso llegando a tener menos que un humano no hechicero promedio. No podia ver maldiciones, lo cual era el requisito minimo para hacer hechicero, y tenia que usar unos lentes especiales para hacerlo. Esto es debido a que nacio teniendo una gemela, lo cual es condenarse como hechicero. Tambien nacio con una Restricción Celestial, la cual le otorgo capacidades fisicas sobrehumanas a cambio de poseer poca energia maldita. </p>
              </div>
           </div> 
           <div className="makiinfo-right">
              <img src={makienergiamaldita} alt="" className="makitecnicas1"/>
              </div>
        </div>

    {/* Informacion Restricción Celestial de "Informacion Expandida" */}

        <div className="makiinfo-todo2">
           <div className="makiinfo-left2">
              <div className="makirestriccioncelestial1">
              <h3> ● Antes de abandonar su energia maldita por completo</h3>
              <p>A cambio de su poca energia maldita, Maki siempre ha tenido capacidades fisicas excepcionales. Sus capacidades competian directamente con hechiceros que dedicaron toda su vida en entrenar el poder usar energia maldita para potenciar sus capacidades. Todo esto le permitio ejercer como hechicera utilizando herramientas y armas malditas. </p>
              </div>
              <div className="makirestriccioncelestial2">
              <h3> ● Despues de abandonar su energia maldita por completo</h3>
              <p>Despues de abandonar la poca energia maldita que le quedaba, Maki pudo manifestar todo el potencial que su Restricción Celestial le otorgaba. Ahora posee un "cuerpo de acero" y una fuerza y velocidad superiores a la de Toji Fushiguro. Maki tambien puede percibir materia inorganica y percibir cosas que normalmente un humano no puede como cambios en el aire o en la temperatura.</p>
              </div>
           </div> 
           <div className="makiinfo-right2">
              <img src={makirestriccioncelestial1} alt="" className="makitecnicas1"/>
              <img src={makirestriccioncelestial2} alt="" className="makitecnicas2"/>
              </div>
        </div> 
    </div>  
    </div>
  )
}

export default Maki
