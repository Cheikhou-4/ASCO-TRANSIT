import { ScrollReveal } from '../../hooks/useAnimations';
import './WhyUs.css';

const reasons = [
  {
    icon: '⚡',
    title: 'Réactivité',
    desc: 'Traitement rapide de vos dossiers. Délais optimisés pour une logistique sans accroc.',
  },
  {
    icon: '🛡️',
    title: 'Conformité Garantie',
    desc: 'Respect strict des normes sénégalaises, UEMOA et CEDEAO en vigueur.',
  },
  {
    icon: '💰',
    title: 'Tarifs Compétitifs',
    desc: 'Honoraires transparents et adaptés à la taille de vos opérations.',
  },
  {
    icon: '🤝',
    title: 'Accompagnement Dédié',
    desc: 'Un interlocuteur unique pour un suivi personnalisé et constant de A à Z.',
  },
];

const marqueeItems = [
  'Dédouanement', 'Transit', 'Logistique', 'Conseil', 'Import', 'Export',
  'Fret', 'Commissionnaire', 'Conformité', 'CEDEAO', 'UEMOA', 'Dakar',
  'Dédouanement', 'Transit', 'Logistique', 'Conseil', 'Import', 'Export',
  'Fret', 'Commissionnaire', 'Conformité', 'CEDEAO', 'UEMOA', 'Dakar',
];

export default function WhyUs() {
  return (
    <section className="why-us" id="whyus">
      <div className="why-us__bg-grid" />
      <div className="why-us__orb" />
      <div className="why-us__orb" />

      <div className="container">
        <ScrollReveal>
          <div className="why-us__header">
            <div className="why-us__label">✦ Pourquoi Nous Choisir</div>
            <h2 className="why-us__title">
              L'excellence au service de vos ambitions
            </h2>
            <p className="why-us__subtitle">
              Nos engagements fondamentaux qui font la différence pour chacun de
              nos clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="why-us__grid">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.12} direction="scale">
              <div className="why-us__card">
                <div className="why-us__card-icon">{r.icon}</div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Animated marquee */}
        <div className="marquee">
          <div className="marquee__track">
            {marqueeItems.map((item, i) => (
              <div className="marquee__item" key={i}>
                <span className="marquee__dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
