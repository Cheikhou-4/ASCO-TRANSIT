import { useTypewriter, useParallax } from '../../hooks/useAnimations';
import './Hero.css';

const typewriterTexts = [
  'Commerce International',
  'Dédouanement',
  'Transit & Logistique',
  'Fret Maritime',
];

export default function Hero() {
  const typedText = useTypewriter(typewriterTexts, 90, 2000);
  const parallax = useParallax(0.015);

  return (
    <section className="hero" id="accueil">
      <div className="hero__bg">
        <img
          src="/hero.png"
          alt="Port de Dakar — Transit et logistique"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px) scale(1.05)`,
          }}
        />
        <div className="hero__overlay" />
      </div>

      {/* Floating particles */}
      <div className="hero__particles">
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
        <div className="hero__particle" />
      </div>

      {/* Morphing blobs */}
      <div className="hero__decor">
        <div className="hero__blob" />
        <div className="hero__blob" />
        <div className="hero__blob" />
      </div>

      <div className="container hero__content">
        <div className="hero__text-wrapper">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Commissionnaire Agréé en Douane — Dakar
          </div>

          <h2 className="hero__title">
            Simplifiez vos opérations de
          </h2>

          <div className="hero__typewriter-line">
            <span className="hero__typewriter">{typedText}</span>
            <span className="hero__cursor" />
          </div>

          <p className="hero__desc">
            ASCO TRANSIT SUARL assure le dédouanement, le transit et la logistique
            de vos marchandises au Sénégal. Expertise reconnue, réactivité et
            conformité absolue pour chaque opération.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn-primary">
              Obtenir un Devis Gratuit
              <span className="btn-arrow">→</span>
            </a>
            <a href="#services" className="hero__btn-secondary">
              ▶ Découvrir nos Services
            </a>
          </div>
        </div>


      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span className="hero__scroll-text">Défiler</span>
      </div>
    </section>
  );
}
