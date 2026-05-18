const steps = [
  {
    title: 'Définition et Cadrage du Projet',
    desc: 'Clarifiez les objectifs, les livrables et le périmètre pour aligner toutes les parties prenantes.',
  },
  {
    title: 'Planification et Allocation',
    desc: 'Structurez le planning, affectez les ressources et définissez les jalons critiques de votre projet.',
  },
  {
    title: 'Exécution, Suivi et Pilotage',
    desc: 'Pilotez l\'avancement en temps réel, gérez les risques et optimisez la performance globale.',
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="section-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: '32px' }}>
            Investissez dès maintenant
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: '#fff', lineHeight: 1.25, margin: 0 }}>
            Commencez à investir en<br />seulement 3 étapes.
          </h2>
        </div>

        <div className="process-inner">

          {/* Étapes gauche */}
          <div className="process-steps">
            {steps.map((step) => (
              <div key={step.title} className="step-card">
                <p className="step-title">{step.title}</p>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Image droite */}
          <div className="process-visual">
            <div className="image-placeholder" style={{ width: '100%', height: '100%', minHeight: '320px', borderRadius: '16px' }}>
              Illustration checklist / stratégie
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}