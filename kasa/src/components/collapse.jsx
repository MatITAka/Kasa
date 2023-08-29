import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="collapse-container">
      <div className="collapse" onClick={() => handleToggle()}>
        <p>{title}</p>
        <i
          id="icon"
          className={`fa-solid fa-chevron-${isOpen ? "down" : "up"}`}
        ></i>
      </div>

      
        <div className= {`collapse-text ${isOpen ? "open" : "closed" }`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((element, i) => (
                <li key={i}>{element}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
    </div>
    </>
  );
}

export default Collapse;
