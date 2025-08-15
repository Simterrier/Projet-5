import fullStar from "../assets/FullStar.png"; // étoile pleine
import emptyStar from "../assets/EmptyStar.png"; // étoile vide si tu en as une

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