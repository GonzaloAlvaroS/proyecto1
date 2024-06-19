import React from 'react'
import "./TecnicasEXD.css"
import megumidominio from "../../assets/megumidominio.png"
import yutadominio from "../../assets/yutadominio.png"
import gojodominio from "../../assets/gojodominio.png"
import kenjakudominio from "../../assets/kenjakudominio.png"
import sukunadominio from "../../assets/sukunadominio.png"
import mahitodominio from "../../assets/mahitodominio.png"
import jogodominio from "../../assets/jogodominio.png"
import dagondominio from "../../assets/dagondominio.png"
import dominioincompleto from "../../assets/dominioincompleto.png"
import choquedominio from "../../assets/choquedominio.png"


const TecnicasEXD = () => {
  return (
    <div className='tecnicastEXDtodo'>
      <div className='tecnicasEXDlineas'>
      <div className= "EXDblue-line-subtopA"></div>
      <div className= "EXDblue-line-subtopB"></div>
      <div className= "EXDblue-line-subtopC"></div>
      <div className= "EXDblue-line-subtopD"></div>
      </div>
      <div className='tecnicasEXDsublineas'>
      <div className= "EXDblue-line-subtopA-1"></div>
      <div className= "EXDblue-line-subtopA-2"></div>
      <div className= "EXDblue-line-subtopA-3"></div>
      <div className= "EXDblue-line-subtopA-4"></div>
      <div className= "EXDblue-line-subtopA-5"></div>
      <div className= "EXDblue-line-subtopA-6"></div>
      <div className= "EXDblue-line-subtopA-7"></div>
      <div className= "EXDblue-line-subtopB-1"></div>
      </div> 
      <div className='tecnicasEXDinfo'>
          <h1>Expansión de Dominio</h1>
          <p>Una expansion de dominio es una tecnica avanzada que es consideraba como el pinaculo de la hechiceria y la tecnica mas poderosa que puede tener un hechicero. Es construida teniendo como base el Dominio Innato y la Tecnica Innata del usuario. Una señal con las manos especifica tiene que ser usada para poder expandir un dominio.</p>
          <p>Dentro de un dominio, las tecnicas del usuario son mas efectivas, sus capacidades fisicas son potenciadas y cualquier ataque que este lance al oponente tendran el factor de nunca fallar. Para poder usar una tecnica de este nivel, el usuario tiene que ser muy habilidoso y poseer una gran cantidad de energia maldita.</p>
          <h2 className='incompletodesgaste'>Dominio incompleto y desgaste</h2>
          <p className='incompletodesgastep'>Si el dominio no se cierra con una barrera, este sera un dominio incompleto (como en el caso de Megumi Fushiguro). En el caso de Ryomen Sukuna y Kenjaku, ellos pueden expandir su dominio y tener todos sus beneficios sin la necesidad de cerrarlo con una barrera. Tambien un dominio puede ser incompleto si no se imbuye una Tecnica Innata en el al momento de crearlo. Despues de que un dominio desaparezca, el usuario quedara exhausto y no podra usar tecnicas malditas por un periodo de tiempo. Es por eso que casi todos los usuarios solo pueden expandir una vez su dominio al dia.</p>
          <img src={dominioincompleto} alt="" className='dominioincompleto'/>
          <h4 className="dominioincompletosub1"> - Un dominio incompleto debido a que no se imbuyó una Tecnica Innata</h4>
          <h2 className='contramedidas'>Contramedidas</h2>
          <p className='infochoquedominio'>Es practicamente imposible escapar de un dominio desde adentro. Una forma de contrarrestar un dominio es usando una Tecnica Antidominio como el Dominio Simple para denegar el factor de nunca fallar. Otra forma es que el dominio se rompa desde afuera ya que mientras mas resistente sea el dominio por dentro, mas vulnerable es por afuera. Para un usuario, la forma mas efectiva de contrarrestar un dominio es expandiendo su propio dominio. Haciendo esto se creara un Choque de Dominio y el dominio mas refinado sera el vencedor. Tambien la cantidad de energia maldita y el desgaste del propio usuario pueden afectar al resultado.</p>
          <img src={choquedominio} alt="" className='choquedominio'/>
          <h4 className='choquedominiosub2'> - Satoru Gojo y Ryomen Sukuna: Un choque de dominios en igualdad</h4>
          <h2 className='listasub'>Lista de Expansiones de Dominio</h2>
          </div>
          <div className="tecnicasMDEM-todo">
          <div className="tecnicasMDEM-left">
          <div className="megumidominio">
            <h3> ● Jardin Sombrio de Chimeras (Chimera Shadow Garden)</h3>
            <p>En su forma incompleta crea un area espesa hecha de sombras y permite invocar Shikigamis de forma infinita desde esta. Tambien permite al usuario manipular las sombras como el quiera.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD1'>Megumi Fushiguro</p>
            <div className="yutadominio">
            <h3> ● Amor Mutuo Verdadero (Authentic Mutual Love)</h3>
            <p>Un dominio repleto de escombros con forma de cruz e infinitas katanas. Yuta Okkotsu puede usar todas las tecnicas copiadas con anterioridad sin restriccion alguna.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD2'>Yuta Okkotsu</p>
            <div className="gojodominio">
            <h3> ● Vacío Inconmensurable (Unlimited Void)</h3>
            <p>Dominio que atrapa al objetivo en el mismo infinito. Una vez dentro, el dominio manda al cerebro del objetivo informacion de forma infinita paralizandolo por completo.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD3'>Satoru Gojo</p>
            <div className="kenjakudominio">
            <h3> ● Profusión del Útero (Womb Profusion)</h3>
            <p>Dominio que toma forma de un pilar gigante hecho de maldiciones. El pilar es capaz de atacar al objetivo con un poder destructivo usando el factor de nunca fallar.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD4'>Kenjaku</p>
            <div className="sukunadominio">
            <h3> ● Templo del Mal (Malevolent Shrine)</h3>
            <p>El dominio ataca a cualquier cosa que este en su rango de efectividad con ataques cortantes. Ryomen Sukuna puede personalizar el rango del dominio hasta un maximo de 200 metros. Cualquier objetivo que tenga energia maldita recibe Cortar y cualquier objeto inanimado recibe Desmantelar.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD5'>Ryomen Sukuna</p>
            <div className="mahitodominio">
            <h3> ● Autoencarnación de la Perfección (Self-Embodiment of Perfection)</h3>
            <p>Dominio que permite a Mahito manipular el alma de cualquiera que este dentro, descartanto la condición de tener que tocarlos primero.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD6'>Mahito</p>
            <div className="jogodominio">
            <h3> ● Ataud de la Montaña de Hierro (Coffin of the Iron Mountain)</h3>
            <p>Un dominio que atrapa su objetivo dentro de un volcan en el cual Jogo puede realizar ataques basados en el fuego y manipular la tierra dentro del volcan para atacar.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD7'>Jogo</p>
            <div className="dagondominio">
            <h3> ● Horizonte del cautivador Skandha (Horizon of the Captivating Skandha)</h3>
            <p>Dominio basado en una playa que permite a Dagon controlar grandes cantidades de agua asi como invocar decenas de Shikigamis con forma de peces.</p>
            <h4>Usuarios:</h4>
            </div>
            <p className='usuariosEXD8'>Dagon</p>
            </div>
    <div className="tecnicasEXD-right">
    <img src={megumidominio} alt="" className="personajestecnicasEXD1"/>
    <img src={yutadominio} alt="" className="personajestecnicasEXD2"/>
    <img src={gojodominio} alt="" className="personajestecnicasEXD3"/>
    <img src={kenjakudominio} alt="" className="personajestecnicasEXD4"/>
    <img src={sukunadominio} alt="" className="personajestecnicasEXD5"/>
    <img src={mahitodominio} alt="" className="personajestecnicasEXD6"/>
    <img src={jogodominio} alt="" className="personajestecnicasEXD7"/>
    <img src={dagondominio} alt="" className="personajestecnicasEXD8"/>
    </div>
    </div>
    </div>
  )
}

export default TecnicasEXD
