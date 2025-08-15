import Banner from "../components/Banner";
import bannerImg from "../assets/BannerAPropos.png"; // remplace si tu as une image dédiée
import Accordion from "../components/Accordion";

const items = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes sont à votre écoute pour vous garantir une expérience parfaite. N'hésitez pas à nous contacter pour toute question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Pour chaque logement, nos hôtes s’engagent à respecter un ensemble de critères établis par nos services.",
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