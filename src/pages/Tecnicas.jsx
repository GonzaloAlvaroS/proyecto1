import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Tecnicas.css"
import manipulacionenergia from "../assets/manipulacionenergia.png"
import tecnicainnata from "../assets/tecnicainnata.png"
import expansiondominio from "../assets/expansiondominio.png"
import tecnicaantidominio from "../assets/tecnicaantidominio.png"
import tecnicabarrera from "../assets/tecnicabarrera.png"

const Tecnicas = () => {
  const navigate = useNavigate();

  const TecnicasMDEM = () => {
    navigate('/tecnicasMDEM');  // Navegar a la página de Personajes
  };
  const TecnicasINN = () => {
    navigate('/tecnicasINN');  // Navegar a la página de Personajes
  };
  const TecnicasBARR = () => {
    navigate('/tecnicasBARR');  // Navegar a la página de Personajes
  };
  const TecnicasAD = () => {
    navigate('/tecnicasAD');  // Navegar a la página de Personajes
  };
  const TecnicasEXD = () => {
    navigate('/tecnicasEXD');  // Navegar a la página de Personajes
  };



  return (
    <div className='tecnicastodo'>
          <li>
          <p className="tecnicasmalditas">Tecnicas Malditas</p>
          <h1 className='tecnicasmalditas1'>Las tecnicas malditas son habilidades creadas a partir de energia maldita. Pueden ser usadas tanto por hechiceros como maldiciones. Hay diferentes tipos de ellas como Tecnicas Innatas, Tecnicas de Barrera, etc. </h1>
          <h1 className='tecnicasmalditas2'>Si comparamos la energia maldita como electricidad, las tecnicas malditas serian electrodomesticos que usamos para distintos usos. Para activar y usar una tecnica ritual normalmente se requiere hacer señales con las manos o usar encantamientos usando palabras. </h1>
              <div className="tiposdetecnica">
              <div className="tiposdetecnica-left">
                <img src={manipulacionenergia} alt="" className='manipulacionenergia' onClick={TecnicasMDEM}/>          
                 <h3 className='tiposdetecnicasub'>Manipulación de Energia Maldita</h3>
                 <img src={tecnicabarrera} alt="" className='tecnicabarrera' onClick={TecnicasBARR}/>          
                 <h3 className='tiposdetecnicasub'>Tecnica de Barrera</h3>
                 </div>
                 <div className="tiposdetecnica-right">
                 <img src={tecnicainnata} alt="" className='tecnicainnata' onClick={TecnicasINN}/>          
                 <h3 className='tiposdetecnicasub'>Tecnica Innata</h3>
                <img src={tecnicaantidominio} alt="" className='tecnicaantidominio' onClick={TecnicasAD}/>          
                 <h3 className='tiposdetecnicasub'>Tecnica Antidominio</h3>
                 </div>
                 </div>
                <div className="tiposdetecnica-center">
                <img src={expansiondominio} alt="" className='expansiondominio' onClick={TecnicasEXD}/>          
                 <h3 className='tiposdetecnicasub1'>Expansión de Dominio</h3>
                </div>
           </li>
           </div>
           
  )
}

export default Tecnicas
