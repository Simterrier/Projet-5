import Banner from "../components/Banner";
import bannerImg from "../assets/banner.png";

import logements from "../data/logements.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />

      <section className="listing">
        <div className="listing__inner">
          <div className="grid">
            {logements.map((l) => (
              <Card key={l.id} id={l.id} title={l.title} cover={l.cover} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}