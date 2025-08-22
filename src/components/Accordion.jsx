import { useId, useState } from "react";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const uid = useId();

  const toggle = (e) => {
    e.stopPropagation();        
    setIsOpen((o) => !o);
  };

  return (
    <div className={`accordion${isOpen ? " open" : ""}`}>
      <button
        type="button"
        className="accordion__header"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${uid}`}
      >
        <span>{title}</span>
        <img
          src={isOpen ? arrowDown : arrowUp}
          alt=""
          className="accordion__icon"
        />
      </button>

      {}
      {isOpen && (
        <div id={`panel-${uid}`} className="accordion__content" role="region">
          {children}
        </div>
      )}
    </div>
  );
}