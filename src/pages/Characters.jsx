import React from 'react'
import { useNavigate } from 'react-router-dom';
import itadori from "../assets/itadori.png"
import megumi from "../assets/megumi.png"
import nobara from "../assets/nobara.png"
import maki from "../assets/maki.png"
import inumaki from "../assets/inumaki.png"
import panda from "../assets/panda.png"
import yuta from "../assets/yuta.png"
import todo from "../assets/todo.png"
import noritoshi from "../assets/noritoshi.png"
import momo from "../assets/momo.png"
import mechamaru from "../assets/mechamaru.png"
import miwa from "../assets/miwa.png"
import mai from "../assets/mai.png"
import nitta from "../assets/nitta.png"
import gojo from "../assets/gojo.png"
import yuki from "../assets/yuki.png"
import nanami from "../assets/nanami.png"
import mei from "../assets/mei.png"
import kusakabe from "../assets/kusakabe.png"
import ino from "../assets/ino.png"
import utahime from "../assets/utahime.png"
import shoko from "../assets/shoko.png"
import yaga from "../assets/yaga.png"
import gakuganji from "../assets/gakuganji.png"
import ijichi from "../assets/ijichi.png"
import akari from "../assets/akari.png"
import geto from "../assets/geto.png"
import miguel from "../assets/miguel.png"
import junpei from "../assets/junpei.png"
import kenjaku from "../assets/kenjaku.png"
import uraume from "../assets/uraume.png"
import haruta from "../assets/haruta.png"
import toji from "../assets/toji.png"
import sukuna from "../assets/sukuna.png"
import mahito from "../assets/mahito.png"
import jogo from "../assets/jogo.png"
import hanami from "../assets/hanami.png"
import dagon from "../assets/dagon.png"
import choso from "../assets/choso.png"

import "./Characters.css"




const Characters = () => {
  const navigate = useNavigate();

  const Itadori = () => {
    navigate('/itadori');  // Navegar a la página de Personajes
  };

  const Megumi = () => {
    navigate('/megumi');  // Navegar a la página de Personajes
  };

  const Nobara = () => {
    navigate('/nobara');  // Navegar a la página de Personajes
  };

  const Maki = () => {
    navigate('/maki');  // Navegar a la página de Personajes
  };

  const Inumaki = () => {
    navigate('/inumaki');  // Navegar a la página de Personajes
  };

  const Panda = () => {
    navigate('/panda');  // Navegar a la página de Personajes
  };

  const Todo = () => {
    navigate('/todo');  // Navegar a la página de Personajes
  };

  const Noritoshi = () => {
    navigate('/noritoshi');  // Navegar a la página de Personajes
  };

  const Momo = () => {
    navigate('/momo');  // Navegar a la página de Personajes
  };

  const Mechamaru = () => {
    navigate('/mechamaru');  // Navegar a la página de Personajes
  };

  const Miwa = () => {
    navigate('/miwa');  // Navegar a la página de Personajes
  };

  const Mai = () => {
    navigate('/mai');  // Navegar a la página de Personajes
  };

  const Arata = () => {
    navigate('/arata');  // Navegar a la página de Personajes
  };

  const Yuki = () => {
    navigate('/yuki');  // Navegar a la página de Personajes
  };

  const Nanami = () => {
    navigate('/nanami');  // Navegar a la página de Personajes
  };

  const Mei = () => {
    navigate('/mei');  // Navegar a la página de Personajes
  };

  const Kusakabe = () => {
    navigate('/kusakabe');  // Navegar a la página de Personajes
  };





  return (
    <div className='characters'>
      <div className="blue-line-top">
      <p className="subtitulocharacters">Estudiantes de la Escuela de Hechicería de Tokio</p>
      </div>
      <div className="blue-line-subtop">
      <p className="subtitulocharacters1">Estudiantes de Primer Año</p>
      </div>
      <div className="characters-left">
        <img src={itadori} alt="" className='personajes1'/>
        <img src={megumi} alt="" className='personajes1'/>
        <img src={nobara} alt="" className='personajes1'/>
        <div className='characters-left perso1'>
        <div className="blue-line-subtop1">
        <p className="subtitulocharacters1">Estudiantes de Segundo Año</p>
        </div>
        <img src={maki} alt="" className='personajes1'/>
        <img src={inumaki} alt="" className='personajes1'/>
        <img src={panda} alt="" className='personajes1'/>
        <img src={yuta} alt="" className='personajes1'/>
        <div className='characters-left perso2'>
        <div className="blue-line-top1">
        <p className="subtitulocharacters">Estudiantes de la Escuela de Hechicería de Kioto</p>
        </div>
        <div className="blue-line-subtop2">
        <p className="subtitulocharacters1">Estudiantes de Tercer Año</p>
        </div>
        </div>
        <img src={todo} alt="" className='personajes1'/>
        <img src={noritoshi} alt="" className='personajes1'/>
        <img src={momo} alt="" className='personajes1'/>
        <div className='characters-left perso3'>
        <div className="blue-line-subtop3">
        <p className="subtitulocharacters1">Estudiantes de Segundo Año</p>
        </div>
        </div>
        <img src={mechamaru} alt="" className='personajes1'/>
        <img src={miwa} alt="" className='personajes1'/>
        <img src={mai} alt="" className='personajes1'/>
        <div className='characters-left perso4'>
        <div className="blue-line-subtop4">
        <p className="subtitulocharacters1">Estudiantes de Primer Año</p>
        </div>
        </div>
        <img src={nitta} alt="" className='personajes1'/>
        <div className='characters-left perso5'>
        <div className="blue-line-top2">
        <p className="subtitulocharacters">Hechiceros asociados a las Escuelas de Hechicería </p>
        </div>
        </div>
        <img src={gojo} alt="" className='personajes1'/>
        <img src={yuki} alt="" className='personajes1'/>
        <img src={nanami} alt="" className='personajes1'/>
        <img src={mei} alt="" className='personajes1'/>
        <img src={kusakabe} alt="" className='personajes1'/>
        <img src={ino} alt="" className='personajes1'/>
        <img src={utahime} alt="" className='personajes1'/>
        <img src={shoko} alt="" className='personajes1'/>
        <img src={yaga} alt="" className='personajes1'/>
        <img src={gakuganji} alt="" className='personajes1'/>
        <div className='characters-left perso6'>
        <div className="blue-line-subtop5">
        <p className="subtitulocharacters1">Asistentes de las Escuelas de Hechicería</p>
        </div>
        </div>
        <img src={ijichi} alt="" className='personajes1'/>
        <img src={akari} alt="" className='personajes1'/>
        <div className='characters-left perso7'>
        <div className="blue-line-top3">
        <p className="subtitulocharacters">Hechiceros Maléficos</p>
        </div>
        </div>
        <img src={geto} alt="" className='personajes1'/>
        <img src={miguel} alt="" className='personajes1'/>
        <img src={junpei} alt="" className='personajes1'/>
        <img src={kenjaku} alt="" className='personajes1'/>
        <img src={uraume} alt="" className='personajes1'/>
        <img src={haruta} alt="" className='personajes1'/>
        <div className='characters-left perso8'>
        <div className="blue-line-top4">
        <p className="subtitulocharacters">Usuarios sin Hechicería</p>
        </div>
        </div>
        <img src={toji} alt="" className='personajes1'/>
        <div className='characters-left perso9'>
        <div className="blue-line-top5">
        <p className="subtitulocharacters">Maldiciones</p>
        </div>
        </div>
        <img src={sukuna} alt="" className='personajes1'/>
        <img src={mahito} alt="" className='personajes1'/>
        <img src={jogo} alt="" className='personajes1'/>
        <img src={hanami} alt="" className='personajes1'/>
        <img src={dagon} alt="" className='personajes1'/>
        <img src={choso} alt="" className='personajes1'/>
        </div>
      </div>
      <div className='characters-right'>
      <div className="infocharacters1">
        <h2>Yuji Itadori</h2>
        <p>El protagonista de la obra. Un joven con una vida normal el cual nació con un propósito, pero aún no sabe cual.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Itadori}>Mas Información</button>
        </div>
        <div className="infocharacters2">
        <h2>Megumi Fushiguro</h2>
        <p>Rechazó a su familia desde pequeño. Un hechicero que heredó la poderosa Técnica de las 10 Sombras.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Megumi}>Mas Información</button>
        </div>
        <div className="infocharacters3">
        <h2>Nobara Kugisaki</h2>
        <p>Una chica que escapó de su pueblo para tener un futuro mejor, pero el destino la llevó al mundo de la hechiería.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Nobara}>Mas Información</button>
      </div>
      <div className='perso1'>
      <div className="infocharacters4">
        <h2>Maki Zenin</h2>
        <p>Despreciada por su clan por nacer sin energia maldita, huyó para convertirse en una hechicera para probarles lo contrario.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Maki}>Mas Información</button>
      </div>
      <div className="infocharacters5">
        <h2>Toge Inumaki</h2>
        <p>Miembro del clan Inumaki y poseedor de la peligrosa Tecnica del Discurso Maldito.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Inumaki}>Mas Información</button>
      </div>
      <div className="infocharacters6">
        <h2>Panda</h2>
        <p>Nacido mediante la Tecnica Ritual de Masamichi Yaga, Panda es un Cuerpo Maldito convertido en hechicero.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Panda}>Mas Información</button>
      </div>
      <div className="infocharacters7">
        <h2>Yuta Okkotsu</h2>
        <p>Acompañado por el espíritu vengativo de su amada cuando era niño, Yuta es un prodigio de la hechicería.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className='perso2'>
      <div className="infocharacters8">
        <h2>Aoi Todo</h2>
        <p>El hechicero de Primer Grado mas completo. Posee una tecnica simple y compleja a la vez.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Todo}>Mas Información</button>
      </div>
      <div className="infocharacters9">
        <h2>Noritoshi Kamo</h2>
        <p>Futuro heredero del mandato del Clan Kamo y poseedor de la tecnica principal del clan: La Manipulación de Sangre.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Noritoshi}>Mas Información</button>
      </div>
      <div className="infocharacters10">
        <h2>Momo Nishimiya</h2>
        <p>Experta en la manipulación de herramientas. Puede manipular su escoba telepaticamente para múltiples usos.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Momo}>Mas Información</button>
      </div>
      <div className='perso3'>
      <div className="infocharacters11">
        <h2>Kokichi Muta (Mechamaru)</h2>
        <p>Nacio con una Restricción Celestial, la cual le otorgó una gran cantidad de energía maldita a cambio de un cuerpo muy debil.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Mechamaru}>Mas Información</button>
      </div>
      <div className="infocharacters12">
        <h2>Kasumi Miwa</h2>
        <p>Aprendiz del hechicero Atsuya Kusakabe. Desde pequeña empezó a masterizar el arte de la espada. 
        </p>
        <button className='btn dark-btn btn-characters' onClick={Miwa}>Mas Información</button>
      </div>
      <div className="infocharacters13">
        <h2>Mai Zenin</h2>
        <p>Al igual que su hermana, Maki Zenin, fue despreciada por su clan, pero Mai nunca escapó con ella.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Mai}>Mas Información</button>
      </div>
      <div className='perso4'>
      <div className="infocharacters14">
        <h2>Arata Nitta</h2>
        <p>Hermano menor de Akari Nitta. Posee una tecnica que le permite detener el dolor proveniente de heridas, pero no sanarlas.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Arata}>Mas Información</button>
      </div>
      <div className='perso5'>
      <div className="infocharacters15">
        <h2>Satoru Gojo</h2>
        <p>Poseedor de la Tecnica del Infinito y de los Seis Ojos. El hechicero mas poderoso de la Era Moderna.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters16">
        <h2>Yuki Tsukumo</h2>
        <p>Una de los 4 hechiceros de Grado Especial. Le enseño a Aoi Todo todo lo que este sabe.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Yuki}>Mas Información</button>
      </div>
      <div className="infocharacters17">
        <h2>Kento Nanami</h2>
        <p>En el pasado fue un hechicero y tiempo despues un hombre de negocios. Volvió a ser hechicero porque creía que era lo correcto.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Nanami}>Mas Información</button>
      </div>
      <div className="infocharacters18">
        <h2>Mei Mei</h2>
        <p>Hechicera de Primer Grado. A Mei Mei solo le importa una cosa en el mundo: El dinero.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Mei}>Mas Información</button>
      </div>
      <div className="infocharacters19">
        <h2>Atsuya Kusakabe</h2>
        <p>Maestro en las tecnicas que involucran la espada. Kusakabe es considerado como el hechicero de Primer Grado mas poderoso.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Kusakabe}>Mas Información</button>
      </div>
      <div className="infocharacters20">
        <h2>Takuma Ino</h2>
        <p>Aprendiz de Kento Nanami, el cual respeta mucho. Tiene el potencial de ascender a Semi-Primer Grado si el quiere.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters21">
        <h2>Utahime Lori</h2>
        <p>Maestra de la Escuela de Hechiería de Kioto. Es muy paciente y amable con todos, menos con Satoru Gojo.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters22">
        <h2>Shoko Ieiri</h2>
        <p>Doctora principal de las escuelas de hechiceria. Posee un estupendo uso de la Tecnica Inversa, permitiendole curar a otros.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters23">
        <h2>Masamichi Yaga</h2>
        <p>Director de la Escuela de Hechiería de Tokio y antiguo maestro de Satoru Gojo, Suguru Geto y Shoko Ieri.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters24">
        <h2>Yoshinobu Gakuganji</h2>
        <p>Director de la Escuela de Hechicería de Kioto y miembro de los Altos Mandos.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className='perso6'>
      <div className="infocharacters25">
        <h2>Kiyotaka Ijichi</h2>
        <p>Fue compañero de Satoru Gojo y Suguru Geto en su epoca de estudiante. Es el asistente director de las escuelas de hechicería.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters26">
        <h2>Akari Nitta</h2>
        <p>Hermana mayor de Arata Nitta y asistente auxiliar de las escuelas de hechicería.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className='perso7'>
      <div className="infocharacters27">
        <h2>Suguru Geto</h2>
        <p>Fue el mejor amigo de Satoru Gojo en la escuela, pero un suceso inesperado hizo que tomara el camino del mal.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters28">
        <h2>Miguel Oduol</h2>
        <p>Seguidor de Suguru Geto en el Desfile Nocturno de los Cien Demonios. Tiempo despues se convertiría en el tutor de Yuta Okkotsu.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters29">
        <h2>Junpei Yoshino</h2>
        <p>Sufrió abusos por parte de sus compañeros de clase y fue manipulado por Mahito para usarlo a su favor.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters30">
        <h2>Kenjaku</h2>
        <p>Considerado el hechicero mas malvado de la historia. Gracias a su Tecnica Ritual, vive desde hace mas de 1000 años.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters31">
        <h2>Uraume</h2>
        <p>Fiel suborniado de Ryomen Sukuna en la Era Heian y apodado como la Estrella Congelada.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters32">
        <h2>Haruta Shigemo</h2>
        <p>Hechicero Maléfico que le encanta hacer daño a seres mas debiles que el. Posee una tecnica que ni el mismo sabe como funciona.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className='perso8'>
      <div className="infocharacters33">
        <h2>Toji Fushiguro/Zenin</h2>
        <p>Nacido con una Restricción Celestial, otorgándole capacidades físicas sobrehumanas a cambio de no poseer ni una pizca de energía maldita.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className='perso9'>
      <div className="infocharacters34">
        <h2>Ryomen Sukuna</h2>
        <p>El Rey de las Maldiciones. Nacido en la Era Heian y considerado el hechicero mas poderoso de la historia.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters35">
        <h2>Mahito</h2>
        <p>Una de las Maldiciones Desastre. Es la maldición mas poderosa de su categoria y considera a Yuji Itadori como su enemigo natural.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters36">
        <h2>Jogo</h2>
        <p>Una de las Maldiciones Desastre. Manipula el fuego y puede crear volcanes con una potencia abismal.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters37">
        <h2>Hanami</h2>
        <p>Una de las Maldiciones Desastre. Tiene una piel super resistente y puede crear ramas de arboles como forma de ataque.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters38">
        <h2>Dagon</h2>
        <p>Una de las Maldiciones Desastre. Puede manipular el agua a su antojo y crear Shikigamis con apariencia de peces.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
      <div className="infocharacters39">
        <h2>Choso</h2>
        <p>El hermano mayor de los 9 Uteros Malditos: Pinturas de la Muerte. Para el, la familia lo es todo y es su deber protegerla a toda costa.
        </p>
        <button className='btn dark-btn btn-characters' onClick={Characters}>Mas Información</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Characters
