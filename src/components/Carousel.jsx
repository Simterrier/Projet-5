import { useState } from "react";

export default function Carousel({ pictures = [], title }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  if (!total) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="carousel" aria-label={`Photos de ${title}`}>
      <img
        className="carousel__img"
        src={pictures[index]}
        alt={`${title} — photo ${index + 1} sur ${total}`}
      />

      {total > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Précédent">
            ‹
          </button>
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Suivant">
            ›
          </button>
          <div className="carousel__count" aria-hidden="true">
            {index + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}