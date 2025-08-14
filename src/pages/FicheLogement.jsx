import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

export default function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </>
  );
}