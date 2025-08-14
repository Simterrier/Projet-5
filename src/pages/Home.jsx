import Banner from "../components/Banner";
import bannerImg from "../assets/banner.png";

import logements from "../data/logements.json";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
        <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />

      <h1>Accueil</h1>
      <ul>
        {logements.map((l) => (
          <li key={l.id}>
            <Link to={`/logement/${l.id}`}>{l.title}</Link> — {l.location}
          </li>
        ))}
      </ul>
    </>
  );
}