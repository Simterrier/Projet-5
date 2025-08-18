import logoblanc from "../assets/logoblanc.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoblanc} alt="Kasa" />
       <p className="footer__legal">
    © 2020 Kasa. All{'\n'}rights reserved
  </p>
    </footer>
  );
}