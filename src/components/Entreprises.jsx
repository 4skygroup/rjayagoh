import sky from '../assets/4_SKY_GROUP.png';
import airjay from '../assets/airjay.png';
import rjayna from '../assets/rjayna.png';
import la2g from '../assets/LA2G.png';
import playtosky from '../assets/playtosky.png';

const entreprises = [
  {
    img: sky,
    alt: '4 SKY GROUP',
    name: '4 SKY GROUP',
    desc: 'Société de Project Management et de Strategy Consulting',
    highlight: false,
    link: 'https://4skygroup.com/',
  },
  {
    img: airjay,
    alt: 'Airjay',
    name: 'AIRJAY GROUP',
    desc: 'Société de participation (Holding)\n',
    highlight: true,
    link: '#',
  },
  {
    img: rjayna,
    alt: 'RJAYNA',
    name: 'RJAYNA',
    desc: 'Société de Project Management spécialisée dans le secteur du Luxe.',
    highlight: false,
    link: '#',
  },
  {
    img: la2g,
    alt: 'LA2G',
    name: 'LA2G',
    desc: 'Société de Strategy Consulting.',
    highlight: false,
    link: '#',
  },
  {
    img: playtosky,
    alt: 'playtosky',
    name: 'Play To Sky',
    desc: 'Groupe de Marketing\n',
    highlight: false,
    link: 'https://www.playtosky.com/',
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
              <a href={e.link} className="entreprise-btn">En savoir plus</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}