import { ScrollReveal } from '../../hooks/useAnimations';
import './StudiesTraining.css';

export default function StudiesTraining() {
  const mainOffers = [
    {
      title: 'DÉCLARANT EN DOUANE',
      inscription: '100.000 FCFA',
      mensualite: '50.000 FCFA',
      duree: 'Licence 1, 2 et 3',
    },
    {
      title: 'ASSISTANT DÉCLARANT',
      inscription: '50.000 FCFA',
      mensualite: '25.000 FCFA',
      duree: 'Formation intensive',
    },
    {
      title: 'TRANSPORT LOGISTIQUE',
      inscription: 'À consulter',
      mensualite: 'À consulter',
      duree: 'Supply Chain Management',
    },
  ];

  const allFormations = [
    'Déclarants en douanes',
    'Assistant déclarant',
    'Transport logistique (Supply Chain)',
    'Transit douane',
    'Commerce international',
    'Logistique pétrolière',
    'Comptabilité et Gestion',
  ];

  return (
    <section
      className="training training--formations"
      id="formation"
      aria-label="Nos formations IADL"
    >
      <div className="container">
        <ScrollReveal>
          <div className="formations__header">
            <div className="formations__branding">
              <div className="formations__logo-wrapper">
                <img 
                  src="/formations/IADL logo.png" 
                  alt="Logo IADL" 
                  className="formations__logo-img"
                />
              </div>
              <div className="formations__title-group">
                <span className="formations__brand-tag">IADL</span>
                <h2 className="formations__title-main">
                  Institut Africain des Déclarants en Douane et de la Logistique
                </h2>
              </div>
            </div>
            <p className="formations__description">
              L’IADL joue un rôle crucial dans le développement des compétences et la préparation 
              pour des carrières stratégiques dans les secteurs de la douane et de la logistique.
            </p>
          </div>
        </ScrollReveal>

        <div className="formations__mission-grid">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="formations__mission-card">
              <h3 className="formations__mission-title">Notre Mission</h3>
              <p>
                Préparer efficacement nos apprenants à l'insertion professionnelle ou à l'entreprenariat, 
                grâce à des formations en Licence 1, 2 et 3, adaptées aux besoins réels du marché de l'emploi.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.3}>
            <div className="formations__mission-card formations__mission-card--alt">
              <h3 className="formations__mission-title">Une École tournée vers l'avenir</h3>
              <p>
                Rejoindre l’IADL c’est intégrer une école dynamique qui place l’insertion professionnelle 
                rapide et le développement de l’entreprenariat au cœur de sa pédagogie.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="formations__offersWrap" aria-label="Offres de formation">
          <div className="formations__deliveryPill">
            Inscriptions Ouvertes : Licence 1, 2 & 3
          </div>

          <div className="formations__offers">
            {mainOffers.map((offer, i) => (
              <ScrollReveal key={offer.title} delay={i * 0.1} direction="up">
                <div className="formations__card">
                  <div className="formations__cardTitle">{offer.title}</div>

                  <div className="formations__pricing">
                    <div className="formations__priceLine">
                      <span className="formations__check" aria-hidden="true">✓</span>
                      <span className="formations__priceText">
                        Inscription : <strong>{offer.inscription}</strong>
                      </span>
                    </div>
                    <div className="formations__priceLine">
                      <span className="formations__check" aria-hidden="true">✓</span>
                      <span className="formations__priceText">
                        Mensualité : <strong>{offer.mensualite}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="formations__duration">{offer.duree}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="formations__program">
            <h3 className="formations__programTitle">Nos Domaines de Formation</h3>
            <div className="formations__programBox">
              <ul className="formations__all-list">
                {allFormations.map((item) => (
                  <li key={item} className="formations__programItem">
                    <span className="formations__programBullet" aria-hidden="true">✓</span>
                    <span className="formations__programItemText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="formations__contactBar" aria-label="Contact">
          <div className="formations__contactPhones">
            Tel: <strong>77 791 13 31</strong> / <strong>78 267 48 00</strong>
          </div>
          <div className="formations__contactAddress">
            Golf Sud, 2e étage, Lot N°24, Dakar
          </div>
        </div>
      </div>
    </section>
  );
}

