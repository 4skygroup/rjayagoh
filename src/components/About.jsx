import ButtonAvatar from "./ButtonAvatar.js";

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <section className="about">

        {/* Colonne gauche : photo */}
        <div className="about__photo-wrap">
          <img src="/robbin.png" alt="Robbin-James AGOH" />

          <div className="about__photo-bottom">
            <span className="about__name-label">Robbin-James AGOH</span>
            <div className="about__socials">
              <a className="about__social" href="https://www.instagram.com/rjayagoh?igsh=eHdnY2xmdHIyeTc1" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a className="about__social" href="https://www.linkedin.com/in/robbin-james-agoh-adedze-86a7902b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite : texte */}
        <div id="about" className="about__content">

          <div className="inv-badge">Qui suis-je ?</div>

          <h2 className="about__title">
            À vos côtés de +5 ans pour structurer,
            piloter et faire grandir
            vos projets les plus ambitieux.
          </h2>

          <div className="about__body">
            <p>À vos côtés depuis plus de 5 ans pour porter votre ambition financière, j'ai bâti mon parcours loin du confort ou de la sécurité du salariat. Mon expertise s'est forgée par un travail constant et cette volonté de donner 500 % chaque jour, une exigence que j'applique au sein du Groupe 4 SKY en pilotant vos ambitions à travers mes sociétés de project management, Linesky et McKinsky.</p>
            <p>Je sais ce que signifie bâtir à partir de rien, une réalité que je vis au cœur du Groupe 4 SKY en dirigeant IA2G et Rjayna, où j'assume également le rôle de Project Manager Principal. Ma mission est d'inspirer les entrepreneurs et les professions libérales à croire en leur potentiel, en mettant ma double culture de dirigeant et d'expert de terrain au service exclusif de la réussite de leur entreprise.</p>
            <p>Pendant que vous vous consacrez pleinement à votre métier et à votre passion, je mets toute ma force d'exécution et ma maîtrise stratégique au service de votre croissance. Aucune excuse, aucun compromis : je gère le développement et le pilotage de vos structures avec vous, pour vous, avec la même détermination qui anime la direction de mes propres entités.</p>
          </div>

          <div className="about__actions">
            <a href="#contact" className="about__btn-rdv">
              <ButtonAvatar />
              Planifier un rendez-vous
            </a>
            <a href="#" className="about__btn-ghost">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Découvrir en vidéo
            </a>
          </div>

        </div>
      </section>

      {/* STATS BAR */}
      <div className="about-stats">
        <div className="about-stat">
          <span className="about-stat__label">Planification de projet</span>
          <span className="about-stat__number">Complète</span>
        </div>
        <div className="about-stat">
          <span className="about-stat__label">Suivi des ressources</span>
          <span className="about-stat__number">Automatique</span>
        </div>
        <div className="about-stat">
          <span className="about-stat__label">Contrôle budgétaire</span>
          <span className="about-stat__number">Précis</span>
        </div>
      </div>
    </>
  );
}