import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from './pages/Home';
import Err404 from './pages/Erreur404';
import About from './pages/about';
import Hebergements from './pages/hebergements';
import Header from './components/header';
import Footer from './components/footer';


import './assets/css/general.scss'



function App() {
  return (
    <>
      <Header />
        <BrowserRouter>        
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/hebergements/:id" element={<Hebergements/>}/>
            {/* Tout les root non disponible */}
            <Route path="*" element={<Err404 />}/>
          </Routes>
      </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;