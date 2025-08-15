import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`accordion ${open ? "is-open" : ""}`}>
      <button
        className="accordion__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`panel-${title}`}
      >
        <span>{title}</span>
        <span className="accordion__chevron" aria-hidden="true">⌄</span>
      </button>

      <div
        id={`panel-${title}`}
        className="accordion__panel"
        role="region"
        hidden={!open}
      >
        {children}
      </div>
    </div>
  );
}