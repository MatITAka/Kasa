import aboutImg from "../assets/images/test.png";

import React, { useState } from 'react';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div class="img_about">
        <img src={aboutImg} alt="aa" />
      </div>

      <section class="flex-container-about">


        <div class="collapse-container-about" onClick={handleToggle}>
          <p>Fiabilité</p>
          <i id="icon" class={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </div>

        {isOpen && (
          <div class={`collapse-text ${isOpen ? 'open' : ''}`}>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
              toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        )}

        <div class="collapse-container-about" onClick={handleToggle}>
          <p>Respect</p>
          <i id="icon" class={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </div>

        {isOpen && (
          <div class={`collapse-text ${isOpen ? 'open' : ''}`}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </div>
        )}

        
        <div class="collapse-container-about" onClick={handleToggle}>
             <p>Service</p>
             <i id="icon" class={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
         </div>
        
        {isOpen && (

            <div class={`collapse-text ${isOpen ? 'open' : ''}`}>
             <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                 perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div> 
        )}

        <div class="collapse-container-about" onClick={handleToggle}> 
             <p>Sécurité</p>
             <i id="icon" class={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
         </div>

            {isOpen && ( 

         <div class={`collapse-text ${isOpen ? 'open' : ''}`}>
             <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                 correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                 locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                 également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
        )};





      </section>
    </>
  );
}

export default About;