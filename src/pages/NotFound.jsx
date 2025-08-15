import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound" aria-labelledby="notfound-title">
      <h1 id="notfound-title" className="notfound__code">404</h1>
      <p className="notfound__msg">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}