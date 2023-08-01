import Home from './pages/Home';
import Err404 from './pages/Erreur404';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';
import React from 'react';
import Routes from 'react-router-dom';
import generalStyle from './assets/css/general'



function App() {
  return (
  <>

  < Routes />


   < Header />
   
   < Home 
   />
   < Err404/>

   < About />

   < Footer/>

  </>
  );
}

export default App;
