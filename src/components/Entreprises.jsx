import sky from '../assets/4_SKY_GROUP.png';
import airjay from '../assets/airjay.png';
import rjayna from '../assets/rjayna.png';
import la2g from '../assets/LA2G.png';

const entreprises = [
  {
    img: sky,
    alt: '4 SKY GROUP',
    name: 'Vauban Associés',
    desc: 'Gestion privée, épargne, placements financiers et fiscalité.',
    highlight: false,
  },
  {
    img: airjay,
    alt: 'Logo Deauvhills',
    name: 'Deauvhills',
    desc: 'Location courte durée clé en main et gestion de biens immobiliers.',
    highlight: true,
  },
  {
    img: rjayna,
    alt: 'Logo A2T Invest',
    name: 'A2T Invest',
    desc: 'Holding dédiée aux investissements immobiliers et financiers.',
    highlight: false,
  },
  {
    img: la2g,
    alt: 'LA2G',
    name: 'Vauban & Associés',
    desc: 'Gestion privée, épargne, placements financiers et fiscalité.',
    highlight: false,
  },
];

export default function Entreprises() {
  return (
    <section id="entreprises">
      <div className="section-wrapper">
        <h2 className="entreprises-title">Découvrez mes entreprises.</h2>
        <div className="entreprises-grid">
          {entreprises.map((e) => (
            <div key={e.name} className={`entreprise-card${e.highlight ? ' entreprise-card--highlight' : ''}`}>
              <div className={`entreprise-logo${e.highlight ? ' entreprise-logo--circle' : ''}`}>
                <img src={e.img} alt={e.alt} />
              </div>
              <p className="entreprise-name">{e.name}</p>
              <p className="entreprise-desc">{e.desc}</p>
              <a href="#" className="entreprise-btn">En savoir plus</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}