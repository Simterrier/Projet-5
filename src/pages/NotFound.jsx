import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retour à l’accueil</Link>
    </>
  );
}