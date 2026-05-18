export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Col 1 : Brand */}
        <div className="footer__brand">
          <div className="footer__logo">Robbin<br />James.</div>
          <p className="footer__desc">
            Entrepreneur dans la finance et conseiller en gestion de patrimoine depuis +10 ans, je vous donne un accès exclusif aux meilleurs solutions d'investissements du marché pour construire et sécuriser votre avenir.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Robbin-James
            </a>
            <a href="#" className="footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Robbin-James
            </a>
          </div>
        </div>

        {/* Col 2 : Navigation */}
        <nav className="footer__nav" aria-label="Navigation principale">
          <h3 className="footer__nav-title">Navigation</h3>
          <ul>
            {['Qui suis-je ?', 'Assurance-vie', 'Défiscalisation', 'Produits structurés', 'Portefeuille sur-mesure', 'Fonctionnement', 'Mes entreprises', 'Prendre rendez-vous'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>

        {/* Col 3 : Liens utiles */}
        <nav className="footer__nav" aria-label="Liens utiles">
          <h3 className="footer__nav-title">Liens utiles</h3>
          <ul>
            {['Avis clients', 'Médias', 'FAQ', 'LinkedIn', 'Instagram', 'Mail'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© 2026 Robbin-James – Tous droits réservés – Site créé par <em>Antoine CHEN</em></p>
        <a href="#" className="footer__legal">Politique de confidentialité &amp; Cookies</a>
      </div>
    </footer>
  );
}