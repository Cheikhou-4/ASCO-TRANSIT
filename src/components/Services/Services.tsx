import { useCallback } from 'react';
import { ScrollReveal } from '../../hooks/useAnimations';
import './Services.css';

const services = [
  /* 
    ========================================================================
    🛠️ CONFIGURATION DE VOS PROPRES IMAGES (MODE D'EMPLOI)
    ========================================================================
    1. Placez vos vraies photos dans le dossier : `asco-transit-app/public/services/`
    2. Nommez vos photos exactement : `01-dedouanement.jpg`, `02-gestion-documentaire.jpg`,
       `03-transit-transport.jpg`, `04-conseil-douanier.jpg`, `05-controles.jpg`, `06-fret-international.jpg`
    3. Retirez les `//` devant la ligne `image: '/services/...'` ci-dessous.
    4. Ajoutez `//` devant le grand lien `image: 'https://images.unsplash...'` pour le désactiver.
    ========================================================================
  */
  {
    image: '/services/01-dedouanement.jpg',
    // image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c66364?auto=format&fit=crop&q=80&w=600',
    title: 'Dédouanement Import / Export',
    desc: 'Prise en charge complète des déclarations en douane, classification tarifaire SH et liquidation des droits et taxes.',
  },
  {
    image: '/services/02-gestion-documentaire.jpg',
    // image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
    title: 'Gestion Documentaire',
    desc: "Préparation et contrôle de l'ensemble des documents requis : factures, connaissements, certificats d'origine.",
  },
  {
    image: '/services/03-transit-transport.jpg',
    // image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600',
    title: 'Transit & Transport',
    desc: "Coordination du transport terrestre, aérien et maritime. Solutions flexibles d'entreposage sous douane.",
  },
  {
    image: '/services/04-conseil-douanier.jpg',
    // image: 'https://images.unsplash.com/photo-1531206715517-5c5610817808?auto=format&fit=crop&q=80&w=600',
    title: 'Conseil en Régimes Douaniers',
    desc: 'Orientation vers les régimes les plus avantageux : Admission Temporaire, Perfectionnement Actif/Passif, Transit.',
  },
  {
    image: '/services/05-controles.jpg',
    // image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
    title: 'Contrôles & Conformité',
    desc: 'Préparation aux contrôles physiques ou documentaires, inspections sanitaires et certification technique.',
  },
  {
    image: '/services/06-fret-international.jpg',
    // image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600',
    title: 'Fret International',
    desc: "Solutions multimodales pour l'acheminement de vos marchandises à travers le monde, avec suivi en temps réel.",
  },
];

function ServiceCard({
  image,
  title,
  desc,
  delay,
  num,
  featured,
}: typeof services[0] & { delay: number; num: string; featured?: boolean }) {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <ScrollReveal delay={delay} direction="scale">
      <div
        className={`services__card glow-card${featured ? ' services__card--featured' : ''}`}
        onMouseMove={handleMouseMove}
      >
        <div className="services__card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="services__card-body">
          <div className="services__card-number">{num}</div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__bg-shape" />
      <div className="services__bg-shape" />

      <div className="container">
        <ScrollReveal>
          <div className="services__header">
            <div className="services__label">✦ Nos Solutions</div>
            <h2 className="services__title">
              Des Services Complets pour Votre Logistique
            </h2>
            <p className="services__subtitle">
              Nous couvrons l'intégralité de la chaîne logistique, de la
              préparation documentaire à la livraison finale.
            </p>
          </div>
        </ScrollReveal>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              {...s}
              delay={i * 0.08}
              num={(i + 1).toString().padStart(2, '0')}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
