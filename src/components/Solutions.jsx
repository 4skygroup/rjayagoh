import solution1 from '../assets/solution1.png';
import solution2 from '../assets/solution2.png';
import solution3 from '../assets/solution3.png';
import solution4 from '../assets/solution4.png';
import ButtonAvatar from "./ButtonAvatar.js";

const cards = [
  {
    img: solution1,
    alt: 'solution1',
    title: 'Analyse et Audit',
    desc: 'Diagnostiquer vos performances pour identifier vos leviers de croissance.',
    items: [
      'Immersion dans vos processus actuels pour cartographier les flux et les ressources.',
      'Identification précise des goulots d\'étranglement et des pertes de rentabilité.',
      'Étude de marché et scoring des leviers de croissance à fort ROI',
      'Évaluation de la capacité de l\'organisation à absorber le changement.',
    ],
    reverse: false,
  },
  {
    img: solution2,
    alt: 'solution2',
    title: 'Pilotage Stratégique',
    desc: 'Transformer vos objectifs en une feuille de route concrète et offensive.',
    items: [
      'Alignement des ambitions de la direction avec des objectifs SMART et KPI chiffrés.',
      'Budgétisation prévisionnelle et allocation stratégique des capitaux.',
      'Séquençage du projet en jalons critiques avec une gestion stricte des délais.',
      'Mise en place des instances de décision et des circuits de communication.',
    ],
    reverse: true,
  },
  {
    img: solution3,
    alt: 'solution3',
    title: 'Optimisation Opérationnelle',
    desc: 'Structurer vos processus pour une efficacité maximale sur le terrain.',
    items: [
      'Rédaction de protocoles standardisés (SOP) pour garantir la qualité.',
      'Sélection et intégration d\'outils technologiques (CRM, ERP, Automation) sur mesure.',
      'Optimisation du temps de travail et de la chaîne de valeur.',
      'Accompagnement des équipes pour une adoption immédiate des nouvelles méthodes.',
    ],
    reverse: false,
  },
  {
    img: solution4,
    alt: 'solution4',
    title: 'Ingénierie de Réussite',
    desc: 'Déployer les solutions nécessaires pour faire passer un cap à votre entreprise.',
    items: [
      'Exécution rapide des solutions techniques et commerciales prioritaires.',
      'Analyse en temps réel des résultats par rapport aux objectifs fixés.',
      'Consolidation des nouveaux processus pour éviter tout retour en arrière.',
      'Préparation de l\'entreprise à une croissance exponentielle et durable.',
    ],
    reverse: true,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="inv-section">

      <div className="inv-header">
        <div className="hero-badge">Mes solutions</div>
        <h2 className="inv-title">
          Une approche stratégique<br />
          rigoureuse et performante, orientée résultats.
        </h2>
        <p className="inv-subtitle">
          J'analyse, structure et optimise chaque levier de votre activité afin de construire une stratégie claire, efficace et durable. De l'audit initial jusqu'au pilotage opérationnel, chaque action est pensée pour accélérer votre croissance et faire évoluer votre entreprise avec précision.
        </p>
      </div>

      <div className="inv-grid">
        {cards.map((card) => (
          <div key={card.title} className={`inv-card${card.reverse ? ' inv-card--reverse' : ''}`}>
            <div className="inv-card-visual">
              <img src={card.img} alt={card.alt} />
            </div>
            <div className="inv-card-body">
              <div className="inv-card-text">
                <h3 className="inv-card-title">{card.title}</h3>
                <p className="inv-card-desc">{card.desc}</p>
                <ul className="inv-checklist">
                  {card.items.map((item, i) => (
                    <li key={i}>
                      <span className="inv-check-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="inv-cta">
                <ButtonAvatar />
                Planifier un rendez-vous
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}