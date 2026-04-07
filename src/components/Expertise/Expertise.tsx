import { ScrollReveal } from '../../hooks/useAnimations';
import './Expertise.css';

const checkItems = [
  'Représentation légale auprès de la Douane sénégalaise',
  'Veille réglementaire permanente (CEDEAO, UEMOA)',
  'Optimisation des coûts et délais logistiques',
  'Sécurisation juridique de vos flux import/export',
  'Interlocuteur unique pour toutes vos opérations',
];

const steps = [
  {
    num: 'Étape 01',
    title: 'Audit & Collecte Documentaire',
    desc: 'Analyse de conformité de vos factures, connaissements et certificats avant toute intervention.',
  },
  {
    num: 'Étape 02',
    title: 'Déclaration & Classification',
    desc: 'Saisie dans le système GAINDE 2000, classification tarifaire SH et valorisation en douane.',
  },
  {
    num: 'Étape 03',
    title: 'Contrôles & Liquidation',
    desc: 'Gestion des contrôles physiques/documentaires et paiement des droits et taxes.',
  },
  {
    num: 'Étape 04',
    title: 'Enlèvement & Livraison',
    desc: 'Coordination logistique pour la sortie portuaire et livraison à destination finale.',
  },
];

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="expertise__grid">
          <ScrollReveal direction="left">
            <div>
              <div className="expertise__label">Notre Expertise</div>
              <h2 className="expertise__title">
                Le Commissionnaire Agréé : Votre Allié Stratégique
              </h2>
              <p className="expertise__desc">
                En tant que commissionnaire agréé en douane, ASCO TRANSIT SUARL
                est l'interface indispensable entre votre entreprise et
                l'administration douanière. Nous assumons la responsabilité
                juridique et financière de vos déclarations.
              </p>
              <div className="expertise__list">
                {checkItems.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="expertise__list-item">
                      <div className="expertise__list-check">✓</div>
                      {item}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="expertise__visual">
              <div className="expertise__float-badge">Depuis 2022</div>
              <div className="expertise__card">
                <h3 className="expertise__card-title">
                  Processus de Dédouanement
                </h3>
                <div className="expertise__timeline">
                  {steps.map((step, i) => (
                    <div className="expertise__step" key={i}>
                      <div className="expertise__step-line">
                        <div className="expertise__step-dot" />
                        <div className="expertise__step-connector" />
                      </div>
                      <div className="expertise__step-content">
                        <div className="expertise__step-number">{step.num}</div>
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
