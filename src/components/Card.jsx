import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card" aria-label={title}>
      <div className="card__thumb">
        <img className="card__img" src={cover} alt={title} />
        <div className="card__gradient" aria-hidden="true"></div>
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  );
}