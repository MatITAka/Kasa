import React, { useState } from 'react';


const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
  setIsOpen(!isOpen);
};

function Collapse() {
    return (
       <>
        
   
        <section class="flex-container-about">
   
   
   
   
           <div class="collapse-container-about" onClick={handleToggle}>
             <p>{about.title}</p>
             <i id="icon" class={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
           </div>
   
           {isOpen && (
             <div class={`collapse-text ${isOpen ? 'open' : ''}`}>
               <p>
               {about.content}
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

   export default Collapse;