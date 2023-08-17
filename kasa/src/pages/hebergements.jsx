// import Slider from '../components/slider'

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../components/collapse";

function Hebergements() {
  const params = useParams();
  const navigate = useNavigate();

  const [hebergement, setHebergement] = useState({});

  useEffect(() => {
    fetch("../../data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.find((log) => log.id === params.id)) {
          setHebergement(data.find((log) => log.id === params.id));
        } else {
          navigate("/LogementNonTrouvable");
        }
      });
  }, [navigate, params.id]);

  const [firstName, lastName] = hebergement.host.name.split(' ');

  return (

    <>
      {/* < Slider /> */}

      <div class="flex-proprietaire">
        <h1>{hebergement.title}</h1>

        <figure class="host_profile">
          <p>

            {firstName} <br/> {lastName} 
          </p>
          <img src={hebergement.host.picture} alt="aa" />
        </figure>
      </div>


      <p class="localisation">{hebergement.location}</p>

      <div class="flex-btn-star">
      <div class="flex-buttons">
        {hebergement.tags && hebergement.tags[0] && (
          <button>{hebergement.tags[0]}</button>
        )}
        {hebergement.tags && hebergement.tags[1] && (
          <button>{hebergement.tags[1]}</button>
        )}
        {hebergement.tags && hebergement.tags[2] && (
          <button>{hebergement.tags[2]}</button>
        )}
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
        <Collapse title="Description" content={hebergement.description} />
        <Collapse title="Equipements" content={hebergement.equipments} />
      </section>
    </>
  );
}

export default Hebergements;
