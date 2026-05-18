export default function Contact() {

  const handleCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/robbinjamesagoh/30min'  // ← corrigé
      });
    } else {
      window.open('https://calendly.com/robbinjamesagoh/30min', '_blank');  // ← corrigé
    }
  };

  return (
    <section id="contact" className="formulaire">
      <div style={{ padding: '0 40px' }}>
        <div className="hero-badge">
          Planifier un call stratégique
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: '#fff', lineHeight: 1.25, margin: 0 }}>
          Lancez votre projet en <br/> seulement 3 étapes.
        </h2>

        <p className="inv-subtitle" style={{ maxWidth: '450px', margin: 0 }}>
          <br/>
          Pilotez vos actifs et vos projets comme un pro, avec un pro.
          Pas de lignes inutiles, pas de perte de temps, juste l'exécution millimétrée que vous méritez pour structurer, sécuriser et propulser votre avenir et celui de vos proches
          <br />
          <br/>
          → Rendez-vous gratuit et sans engagement.
        </p>
      </div>

      <form action="https://formspree.io/f/xjglzekv" method="post" className="contact-form" noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Dupont" required />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" placeholder="Jean" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="jean@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Numéro de téléphone</label>
          <input type="text" id="telephone" name="telephone" placeholder="06 00 00 00 00" />
        </div>
        <div className="form-group">
          <label htmlFor="entreprise">Nom de l'entreprise</label>
          <input type="text" id="entreprise" name="entreprise" placeholder="Acme Corp." />
        </div>
        <div className="form-group">
          <label htmlFor="expertise">Expertise requise</label>
          <select id="expertise" name="expertise" required>
            <option value="" disabled>Sélectionnez un domaine…</option>
            <option>Audit & Conseil</option>
            <option>Stratégie SEO</option>
            <option>Branding de Luxe</option>
            <option>Gestion de Projet 360°</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="budget">Budget mensuel</label>
            <select id="budget" name="budget" required>
              <option value="" disabled>Fourchette…</option>
              <option>Moins de 1 000 €</option>
              <option>1 000 – 5 000 €</option>
              <option>5 000 – 15 000 €</option>
              <option>15 000 – 50 000 €</option>
              <option>Plus de 50 000 €</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="urgence">Urgence du projet</label>
            <select id="urgence" name="urgence" required>
              <option value="" disabled>Délai…</option>
              <option>Immédiat (&lt; 1 semaine)</option>
              <option>Court terme (1 mois)</option>
              <option>Moyen terme (3 mois)</option>
              <option>Long terme (6 mois+)</option>
              <option>Pas encore défini</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Décrivez votre besoin</label>
          <textarea id="description" name="description" rows="4"
            placeholder="Parlez-nous de votre projet, vos objectifs, votre situation actuelle…" />
        </div>

        <button type="button" className="btn-submit" onClick={handleCalendly}>
          Choisir un créneau →
        </button>
        <p className="form-mention">Rendez-vous sans engagement · Réponse sous 24h</p>
      </form>
    </section>
  );
}