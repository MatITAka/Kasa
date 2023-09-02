import arrowLeft from "../assets/images/arrow_back_ios-24px 1.png";
import arrowRight from "../assets/images/arrow_forward_ios-24px 1.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";



function Slider () {
  const [activeSlide, setActiveSlide] = useState(0);


  const goToNexSlide = () => {
    setActiveSlide((prevIndex) =>
       prevIndex === hebergement.pictures.length - 1 ? 0 : prevIndex + 1
    );
 };
 
 const goToPreviousSlide = () => { 
    setActiveSlide((prevIndex) =>
       prevIndex === 0 ? hebergement.pictures.length - 1 : prevIndex - 1
    );
 };

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
        const foundHebergement = data.find((item) => item.id === params.id);
        if (foundHebergement) {
          setHebergement(foundHebergement);
        } else {
          navigate("/LogementNonTrouvable");
        }
      });
  }, [navigate, params.id]);

return (
<>
<div className="img_hebergements">
  <div className="img_selected">
    <img src={hebergement.pictures && hebergement.pictures[activeSlide]}
            alt="Selected Hebergement" />
  </div>
 
  <div className="img_slider">
          {hebergement.pictures && hebergement.pictures.length > 1 && (
            <>
              <div className="arrow-left">
                <img
                  onClick={goToPreviousSlide}
                  src={arrowLeft}
                  alt="arrow-left"
                />
              </div>

              <div className="arrow-right">
                <img
                  onClick={goToNexSlide}
                  src={arrowRight}
                  alt="arrow-right"
                />
              </div>
            </>
          )}

          {hebergement.pictures && hebergement.pictures.length > 1 && (
            <p>
              {hebergement.pictures && `${activeSlide + 1}/${hebergement.pictures.length}`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Slider;





