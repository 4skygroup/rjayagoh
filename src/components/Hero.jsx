import robin from '../assets/robbin.png';
import ButtonAvatar from "./ButtonAvatar.js";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          Déjà +1 000 clients me font confiance
        </div>

        <h1 className="main-title">
          Construisez des entreprises. Structurez des stratégies. <br /> Pensez long terme.
        </h1>

        <p>
          Ceo de IA2G, j'ai choisi de bâtir un écosystème de structures complémentaires plutôt que de poursuivre une seule entreprise. Le commercial, le marketing et la finance ne sont pas des silos pour moi, ce sont les trois faces d'une même réalité que je pilote au quotidien.
        </p>

        <a href="#contact" className="hero-btn">
          <ButtonAvatar />
          Planifier un rendez-vous
        </a>

        {/* Stats */}
        <div className="hero-stats">
          <span>✔ La vision 360° intégrée</span>
          <span>✔ La discipline du bâtisseur</span>
          <span>✔ L'horizon long terme</span>
        </div>

      </div>

      {/* Section image */}
      <div className="hero-bottom">
        <div className="hero-image">
          <img src={robin} alt="img logo" loading="lazy"/>
        </div>
      </div>

    </section>
  );
}