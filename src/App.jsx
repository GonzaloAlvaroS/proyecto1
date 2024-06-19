import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Characters from './pages/Characters';
import Tecnicas from './pages/Tecnicas';
import TecnicasMDEM from './pages/TiposTecnica/TecnicasMDEM';
import TecnicasINN from './pages/TiposTecnica/TecnicasINN';
import TecnicasBARR from './pages/TiposTecnica/TecnicasBARR';
import TecnicasAD from './pages/TiposTecnica/TecnicasAD';
import TecnicasEXD from './pages/TiposTecnica/TecnicasEXD';
import Itadori from './pages/InfoPersonajes/Itadori';
import Megumi from './pages/InfoPersonajes/Megumi';
import Nobara from './pages/InfoPersonajes/Nobara';
import Maki from './pages/InfoPersonajes/Maki';
import Inumaki from './pages/InfoPersonajes/Inumaki';
import Panda from './pages/InfoPersonajes/Panda';
import Todo from './pages/InfoPersonajes/Todo';
import Noritoshi from './pages/InfoPersonajes/Noritoshi';
import Momo from './pages/InfoPersonajes/Momo';
import Mechamaru from './pages/InfoPersonajes/Mechamaru';
import Miwa from './pages/InfoPersonajes/Miwa';
import Mai from './pages/InfoPersonajes/Mai';
import Arata from './pages/InfoPersonajes/Arata';
import Yuki from './pages/InfoPersonajes/Yuki';
import Nanami from './pages/InfoPersonajes/Nanami';
import Mei from './pages/InfoPersonajes/Mei';
import Kusakabe from './pages/InfoPersonajes/Kusakabe';




   function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [ pathname ]); 

    return null;
  }

  const App = () => { 
    const [playState, setPlayState] = useState(false);

  return (
    <Router basename="/proyecto1">
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/" element={
        <div>
         <Hero/>
          <div className="container">
           <Title subTitle="ARCOS ARGUMENTALES" title="Anime:"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Contenido" title="Tecnicas malditas"/>
        <Campus/>
        <Title subTitle="Media" title="Openings"/>
        <Testimonials/>
        <Title subTitle="Otros" title="Danos ideas"/>
        <Contact/>
        <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
   </div>
   }/>
   <Route path="characters" element={<Characters />} />
   <Route path="tecnicas" element={<Tecnicas />} />
   <Route path="tecnicasMDEM" element={<TecnicasMDEM />} />
   <Route path="tecnicasINN" element={<TecnicasINN />} />
   <Route path="tecnicasBARR" element={<TecnicasBARR />} />
   <Route path="tecnicasAD" element={<TecnicasAD />} />
   <Route path="tecnicasEXD" element={<TecnicasEXD />} />
   <Route path="itadori" element={<Itadori />} />
   <Route path="megumi" element={<Megumi />} />
   <Route path="nobara" element={<Nobara />} />
   <Route path="maki" element={<Maki />} />
   <Route path="inumaki" element={<Inumaki />} />
   <Route path="panda" element={<Panda />} />
   <Route path="todo" element={<Todo />} />
   <Route path="noritoshi" element={<Noritoshi/>} />
   <Route path="momo" element={<Momo/>} />
   <Route path="mechamaru" element={<Mechamaru/>} />
   <Route path="miwa" element={<Miwa/>} />
   <Route path="mai" element={<Mai/>} />
   <Route path="arata" element={<Arata/>} />
   <Route path="yuki" element={<Yuki/>} />
   <Route path="nanami" element={<Nanami/>} />
   <Route path="mei" element={<Mei/>} />
   <Route path="kusakabe" element={<Kusakabe/>} />
 </Routes>
   </Router>
  )
}

export default App
