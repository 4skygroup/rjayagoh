import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

const features = [
  {
    img: feature1,
    alt: 'feature1',
    title: 'Planifiez sur un large choix de méthodologies, même en mode agile.',
    desc: 'Mes équipes et moi, affinons votre planification selon votre projet, vos contraintes et vos objectifs.',
  },
  {
    img: feature2,
    alt: 'feature2',
    title: 'Un suivi de ressources optimisé avec une efficacité visée de +8.26%* en 2026',
    desc: 'Visez une meilleure allocation des ressources avec nos outils de suivi, et collaborez auprès d\'organismes certifiés.',
  },
  {
    img: feature3,
    alt: 'feature3',
    title: 'Un espace de reporting complet et la qualité d\'une vue globale en temps réel.',
    desc: 'Faites le choix d\'un outil d\'analyse puissant, disponible pour répondre à vos questions et vous conseiller au quotidien.',
  },
  {
    img: feature4,
    alt: 'feature4',
    title: 'Sécurisez votre budget actuel, votre planning et vos objectifs clés.',
    desc: 'Profitez de contrôles de risques, de gestions de budget optimisées, de plans de contingence, sans jamais perdre en flexibilité.',
  },
];

export default function Frais() {
  return (
    <section className="frais-section">

      {/* Titre */}
      <div className="frais-header">
        <h2 className="frais-title">
          Tout ça, pour une gestion de projet efficace
        </h2>
      </div>

      {/* Grille frais */}
      <div className="frais-grid">
        <div className="frais-item">
          <span className="frais-item__label">Tâches terminées</span>
          <span className="frais-item__value">98%</span>
        </div>
        <div className="frais-item">
          <span className="frais-item__label">Projets livrés à temps</span>
          <span className="frais-item__value">95%</span>
        </div>
        <div className="frais-item">
          <span className="frais-item__label">Budget respecté</span>
          <span className="frais-item__value">99%</span>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="frais-disclaimer">
        Investir comporte des risques, notamment de perte en capital. Les performances passées ne préjugent pas des performances futures. Simulations à des fins d'illustration seulement.
      </p>

      {/* Grille features */}
      <div className="feat-grid">
        {features.map((feat) => (
          <div key={feat.title} className="feat-card">
            <div className="feat-card__visual">
              <img src={feat.img} alt={feat.alt} loading="lazy"/>
            </div>
            <div className="feat-card__body">
              <h3 className="feat-card__title">{feat.title}</h3>
              <p className="feat-card__desc">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}