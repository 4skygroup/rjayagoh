import { useEffect, useRef } from 'react';

export default function Contact() {
    const calendlyRef = useRef(null);
    const initialized = useRef(false);

    // https://calendly.com/rjayagoh/nouvelle-reunion
    useEffect(() => {
        if (window.Calendly && calendlyRef.current && !initialized.current) {
            initialized.current = true;
            window.Calendly.initInlineWidget({
                url: 'https://calendly.com/rjayagoh/nouvelle-reunion',
                parentElement: calendlyRef.current,
            });
        }
    }, []);

    return (
        <section id="contact" className="formulaire" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div>
                <div className="hero-badge">
                    Planifier un call stratégique
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: 1.25,
                    margin: 0
                }}>
                    Lancez votre projet en <br /> seulement 3 étapes.
                </h2>

                <p className="inv-subtitle" style={{ maxWidth: '450px', margin: 0 }}>
                    <br />
                    Pilotez vos actifs et vos projets comme un pro, avec un pro.
                    Pas de lignes inutiles, pas de perte de temps, juste l'exécution millimétrée que vous méritez pour structurer, sécuriser et propulser votre avenir et celui de vos proches
                    <br /><br />
                    → Rendez-vous gratuit et sans engagement.
                </p>
            </div>

            <div style={{ maxWidth: '700px', width: '100%' }}>
                <div
                    ref={calendlyRef}
                    className="calendly-inline-widget"
                    style={{
                        minWidth: '320px',
                        height: '600px',
                        width: '100%',
                    }}
                />
            </div>
        </section>
    );
}