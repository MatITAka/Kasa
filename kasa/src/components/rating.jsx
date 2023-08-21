import { useState } from "react";

function StarRating({ rating }) {
  const [selectedStars, setSelectedStars] = useState(rating);

  const handleStarClick = (selectedRating) => {
    setSelectedStars(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= selectedStars ? "fa-star-selected" : "fa-star";
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${starClass}`}
          onClick={() => handleStarClick(i)}
        ></i>
      );
    }
    return stars;
  };

  return <div className="flex-stars">{renderStars()}</div>;
}

export default StarRating;
