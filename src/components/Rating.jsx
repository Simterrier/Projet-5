import fullStar from "../assets/FullStar.png"; 
import emptyStar from "../assets/EmptyStar.png"; 

export default function Rating({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= value ? fullStar : emptyStar}
        alt={i <= value ? "Étoile pleine" : "Étoile vide"}
        className="rating__star"
      />
    );
  }

  return <div className="rating">{stars}</div>;
}