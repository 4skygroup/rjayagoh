import CreatedBy from "./CreatedBy.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Col 1 : Brand */}
        <div className="footer__brand">
          <div className="main-title">Robbin-James.</div>
          <p className="footer__desc">
            Entrepreneur dans le project management et le conseil stratégique depuis plus de 5 ans, J'orchestre le déploiement opérationnel et les solutions d'affaires les plus performantes du marché pour structurer, pérenniser et propulser votre avenir économique. Pas de fioritures, une exécution millimétrée.
          </p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/robbin-james-agoh-adedze-86a7902b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Robbin-James
            </a>
            <a href="https://www.instagram.com/rjayagoh?igsh=anNocGxmdDFqc3J3" className="footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Robbin-James
            </a>
          </div>
          <p className="footer__desc">contact@rjayagoh.com</p>
        </div>

        {/* Col 2 : Navigation */}
        <nav className="footer__nav" aria-label="Navigation principale">
          <h3 className="footer__nav-title">Navigation</h3>
          <ul>
            {['Qui suis-je ?', 'Analyse et Audit', 'Pilotage Stratégique', 'Optimisation Opérationnelle', 'Ingénierie de Réussite', 'Fonctionnement', 'Mes entreprises', 'Prendre rendez-vous'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>

        {/* Col 3 : Liens utiles */}
        <nav className="footer__nav" aria-label="Liens utiles">
          <h3 className="footer__nav-title">Liens utiles</h3>
          <ul>
            {['Avis clients', 'FAQ', 'LinkedIn', 'Instagram', 'Mail'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>

      </div>

      <CreatedBy />
    </footer>
  );
}