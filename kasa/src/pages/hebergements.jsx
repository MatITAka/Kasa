import Slider from '../components/slider'

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../components/collapse";
import StarRating from '../components/rating';

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
  
  return (
    hebergement.id &&
    <>
      < Slider />

      <div className="flex-proprietaire">
        <h1 className ="hebergement_title">{hebergement.title}</h1>

        <figure className="host_profile">
            <p>
           {hebergement.host.name}
          </p>
          <img src={hebergement.host.picture} alt="aa" />
        </figure>
      </div>


      <p className="localisation">
        {hebergement.location}
      </p>

      <div className="flex-btn-star">
      <div className="flex-buttons">
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


        <div className="flex-stars">


        <StarRating rating={parseInt(hebergement.rating)} /> {/* Utilisation du composant StarRating */}
          {/* <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i> */}
        </div>
      </div>

      <section className="flex-container-hebergements">
        <Collapse title="Description" content={hebergement.description} />
        <Collapse title="Equipements" content={hebergement.equipments} />
      </section>
    </>
  );
}

export default Hebergements;
