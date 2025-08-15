import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Accordion from "../components/Accordion";

export default function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((l) => String(l.id) === String(id));

  if (!logement) return <Navigate to="*" replace />;

  const {
    title,
    location,
    host = {},
    rating,
    tags = [],
    pictures = [],
    description,
    equipments = [],
  } = logement;

  return (
    <section className="lodging">
      {/* 1) Carrousel */}
      <Carousel pictures={pictures} title={title} />

      {/* 2) En-tête infos */}
      <div className="lodging__header">
        <div className="lodging__left">
          <h1 className="lodging__title">{title}</h1>
          <p className="lodging__location">{location}</p>
          <ul className="lodging__tags">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        </div>

        <div className="lodging__right">
          <div className="host">
            <p className="host__name">{host.name}</p>
            {host.picture && (
              <img className="host__avatar" src={host.picture} alt={host.name} />
            )}
          </div>
          <Rating value={rating} />
        </div>
      </div>

      {/* 3) Accordéons */}
      <div className="lodging__accordions">
        <Accordion title="Description" defaultOpen>
          <p className="lodging__desc">{description}</p>
        </Accordion>

        <Accordion title="Équipements">
          <ul className="lodging__equipments">
            {equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </section>
  );
}