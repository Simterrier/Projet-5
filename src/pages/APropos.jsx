import Banner from "../components/Banner";
import bannerImg from "../assets/BannerAPropos.png"; // remplace si tu as une image dédiée
import Accordion from "../components/Accordion";

const items = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function APropos() {
  return (
    <section className="about">
      {/* Bannière sans texte, avec brightness appliqué via SCSS */}
      <Banner image={bannerImg} />

      <div className="about__accordions">
        {items.map(({ title, content }) => (
          <Accordion key={title} title={title}>
            <p className="about__text">{content}</p>
          </Accordion>
        ))}
      </div>
    </section>
  );
}