import ButtonAvatar from "./ButtonAvatar.js";

const avantages = [
  {
    title: 'Visibilité Totale',
    desc: 'Suivi précis de l\'avancement, des budgets et des ressources en temps réel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Collaboration Renforcée',
    desc: 'Outils partagés pour une communication fluide et une meilleure coordination des équipes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Gestion des Risques',
    desc: 'Anticipez et atténuez les risques potentiels avant qu\'ils n\'impactent le projet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Adaptabilité Agilité',
    desc: 'Capacité à ajuster les plans rapidement face aux imprévus et aux changements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

export default function Avantages() {
  return (
    <section id="avantages">
      <div className="section-wrapper">
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: '#fff', textAlign: 'center', margin: '0 0 48px' }}>
          Les bénéfices d'un pilotage de projet optimisé
        </h2>

        <div className="avantages-grid">
          {avantages.map((item) => (
            <div key={item.title} className="avantage-card">
              <div className="avantage-icon">{item.icon}</div>
              <p className="avantage-title">{item.title}</p>
              <p className="avantage-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#contact" className="hero-btn">
            <ButtonAvatar />
            Prendre contact avec un expert
          </a>
        </div>

      </div>
    </section>
  );
}