import Slider from ""





function Hebergements() {
    return (
     <> 

        < Slider />


        <div class="flex-proprietaire">
        
            <h1>Cozy Loft on the Canal Saint Martin</h1>
        
            <figure class="host_profile">
                <p>Alexandre <br/>Dumas</p>
                <img src="IMAGES/Host.png" alt="aa"/>
            </figure>
        
        </div>
        
        <p class="localisation">Paris, Île de France</p>

    <div class="flex-btn-star">
        
        <div class="flex-buttons">
        <button></button>
        <button></button>
        <button></button>
        </div>

        <div class="flex-stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
    </div>


    <section class="flex-container-hebergements">

        <div class="collapse-container-hebergements">
        <div class="collapse-container">
            <p>Fiabilité</p>
            <i id="icon1" class="fa-solid fa-chevron-up"></i>

        </div>

        <div class="collapse-text">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes.</p>
        </div>
    
        </div>

        <div class="collapse-container-hebergements">

        <div class="collapse-container">
            <p>Fiabilité</p>
            <i id="icon1" class="fa-solid fa-chevron-up"></i>

        </div>

        <div class="collapse-text">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes.</p>
        </div>
    
    </div>

    </section>
     
     
     
     
     
     
     
     </>
    );
  }
  
  export default Hebergements;