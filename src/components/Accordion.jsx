import arrowDown from "../assets/arrowDown.png";



export default function Accordion({ title, children, defaultOpen = false }) {
  return (
    <details className="accordion" open={!!defaultOpen}>
      <summary className="accordion__trigger accordion__header">
        <span className="accordion__title">{title}</span>
        <img
          src={arrowDown}
          alt=""
          aria-hidden="true"
          className="accordion__icon"
        />
      </summary>

      <div className="accordion__panel">
        <div className="accordion__panel-inner accordion__content">
          {children}
        </div>
      </div>
    </details>
  );
}