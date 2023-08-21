// import { useState, useEffect } from "react";
import arrowLeft from "../assets/images/arrow_back_ios-24px 1.png";
import arrowRight from "../assets/images/arrow_forward_ios-24px 1.png";

import testImage from "../assets/images/homeBannerImg.png";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";



function Slider () {

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
<>
<div className="img_hebergements">
  <div className="img_selected">
    <img src={testImage} alt="aa" />
  </div>

  <div className="img_slider">
    <div className="arrow-left">
      <img src={arrowRight} alt="aa" />
    </div>

    <div className="arrow-right">
      <img src={arrowLeft} alt="aa" />
    </div>
  </div>
</div>

</>
  
)}

export default Slider