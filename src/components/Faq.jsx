import { useState } from 'react';

const faqs = [
  {
    q: 'Quelles sont vos spécialités en gestion de projet ?',
    a: 'Nous intervenons sur la direction stratégique, l\'optimisation des processus opérationnels et la transformation digitale. Notre approche est "Commando" : nous privilégions l\'exécution rapide, le respect strict des délais (sprints) et l\'atteinte de résultats concrets.',
  },
  {
    q: 'Comment accompagnez-vous le rachat d\'une entreprise ?',
    a: 'Nous vous assistons sur tout le cycle : sourcing de la cible, audit financier (due diligence), montage de la structure de rachat et intégration post-acquisition pour assurer la continuité de l\'activité.',
  },
  {
    q: 'Puis-je racheter une boîte sans mobiliser toute ma trésorerie ?',
    a: 'Oui. Nous maîtrisons les leviers financiers (LBO) permettant de structurer le rachat via une dette bancaire ou un crédit-vendeur, afin d\'optimiser votre apport personnel tout en maximisant votre capacité d\'acquisition.',
  },
  {
    q: 'Quel est votre rôle exact une fois le projet lancé ?',
    a: 'En tant que Project Manager 360, nous agissons comme le chef d\'orchestre. Nous coordonnons les équipes techniques (développeurs, prestataires), suivons les KPIs en temps réel et nous assurons que la vision initiale est respectée jusqu\'à la livraison finale.',
  },
  {
    q: 'Êtes-vous indépendant des institutions financières ?',
    a: 'Totalement. Notre conseil est impartial. Que ce soit pour une stratégie d\'investissement ou un rachat, nous sélectionnons les solutions et partenaires les plus performants du marché en fonction de vos seuls intérêts.',
  },
  {
    q: 'À quelle fréquence se font les suivis de projet ?',
    a: 'Nous fonctionnons avec des reporting hebdomadaires et un accès en temps réel à un tableau de bord de pilotage. Cette transparence totale permet d\'ajuster la stratégie instantanément en cas d\'imprévus.',
  },
  {
    q: 'Quelle est la taille des entreprises que vous aidez à racheter ?',
    a: 'Nous nous concentrons sur les PME et les entreprises à fort potentiel de croissance, dont les structures permettent une optimisation rapide de la rentabilité après l\'intégration dans votre écosystème.',
  },
  {
    q: 'Comment définir une stratégie adaptée à ma situation ?',
    a: 'Tout commence par une analyse de votre structure actuelle et de vos ambitions de croissance. Nous évaluons vos actifs et votre capacité de levier pour bâtir une feuille de route personnalisée, qu\'il s\'agisse de gestion interne ou d\'expansion externe.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <div className="faq-wrapper">

        {/* Colonne gauche */}
        <div className="faq-left">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-heading">Vos questions<br />fréquentes</h2>
        </div>

        {/* Colonne droite : accordéon */}
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={openIndex === i}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <svg className={`faq-chevron${openIndex === i ? ' open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="faq-answer">
                    <p className="faq-answer-inner">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}