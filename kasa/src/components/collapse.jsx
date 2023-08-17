import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="collapse-container-about" onClick={() => handleToggle()}>
        <p>{title}</p>
        <i
          id="icon"
          className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}
        ></i>
      </div>

      {isOpen && (
        <div className={`collapse-text ${isOpen ? "open" : ""}`}>
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
      )}
    </>
  );
}

export default Collapse;
