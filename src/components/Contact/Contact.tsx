import { useState } from 'react';
import { ScrollReveal } from '../../hooks/useAnimations';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms inclut par défaut chaque champ du formulaire dans l'email.
    // Ici, on compose un seul bloc "message" pour éviter l'affichage style formulaire (Nom, Email, etc.).
    const nom = (formData.get('Nom') as string | null) ?? '';
    const entreprise = (formData.get('Entreprise') as string | null) ?? '';
    const email = (formData.get('email') as string | null) ?? '';
    const telephone = (formData.get('Telephone') as string | null) ?? '';
    const sujet = (formData.get('Sujet') as string | null) ?? '';
    const messageUtilisateur = (formData.get('Message') as string | null) ?? '';

    const composedMessage =
      `Demande reçue via le site ASCO TRANSIT.\n\n` +
      `Nom complet: ${nom || '—'}\n` +
      `Entreprise: ${entreprise || '—'}\n` +
      `Email: ${email || '—'}\n` +
      `Téléphone: ${telephone || '—'}\n` +
      `Nature de la Demande: ${sujet || '—'}\n\n` +
      `Message:\n${messageUtilisateur || '—'}`;

    // On envoie seulement: l'email (pour reply-to) + le bloc message.
    formData.set('message', composedMessage);
    formData.delete('Nom');
    formData.delete('Entreprise');
    formData.delete('Telephone');
    formData.delete('Sujet');
    formData.delete('Message');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="contact__header">
            <div className="contact__label">Contact</div>
            <h2 className="contact__title">
              Demande de Devis & Contact
            </h2>
            <p className="contact__subtitle">
              Obtenez un devis personnalisé sous 24h. Notre équipe est prête à
              vous accompagner.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal direction="left">
            <div className="contact__form-wrapper">
              <form
                className="contact__form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="access_key" value="cbe53afb-b721-4191-b377-393f59d09c6f" />
                <input type="hidden" name="subject" value="Nouveau Contact / Devis - Site ASCO TRANSIT" />
                <input type="hidden" name="from_name" value="Site Web ASCO TRANSIT" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="nom">Nom Complet *</label>
                    <input
                      id="nom"
                      type="text"
                      name="Nom"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="entreprise">Entreprise</label>
                    <input
                      id="entreprise"
                      type="text"
                      name="Entreprise"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="tel">Téléphone</label>
                    <input
                      id="tel"
                      type="tel"
                      name="Telephone"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="sujet">Nature de la Demande</label>
                  <input
                    id="sujet"
                    type="text"
                    name="Sujet"
                    placeholder="Ex : Dédouanement véhicule, Transit marchandises..."
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">Message / Détails</label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={5}
                    placeholder="Décrivez votre besoin en détail..."
                  />
                </div>

                <button type="submit" className="contact__form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma Demande'}
                  {status !== 'sending' && <span>→</span>}
                </button>

                {status === 'success' && (
                  <div style={{ color: 'var(--primary)', marginTop: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
                    ✅ Votre message a bien été envoyé ! Nous vous répondrons très vite.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ color: 'red', marginTop: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
                    ❌ Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion.
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="contact__info">
              <div className="contact__info-card">
                <div className="contact__info-icon">📍</div>
                <div className="contact__info-content">
                  <h4>Localisation</h4>
                  <p>Route du Croisement Cambérène, Dakar, Sénégal</p>
                </div>
              </div>

              <div className="contact__info-card">
                <a href="https://wa.me/221785016571" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                  <div className="contact__info-icon">💬</div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>+221 78 501 65 71</p>
                  </div>
                </a>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-icon">📞</div>
                <div className="contact__info-content">
                  <h4>Téléphone</h4>
                  <p>
                    <a href="tel:+221338515114">+221 33 851 51 14</a>
                  </p>
                </div>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-icon">📧</div>
                <div className="contact__info-content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:ascotransit23@gmail.com">
                      ascotransit23@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-icon">🕐</div>
                <div className="contact__info-content">
                  <h4>Horaires d'Ouverture</h4>
                  <p>
                    Lundi – Vendredi : 08h00 – 18h00
                    <br />
                    Samedi : 09h00 – 13h00
                  </p>
                </div>
              </div>

              <div className="contact__legal">
                <strong>Informations Légales</strong>
                R.C.CM : SN.DKR.2022.B 38578 &nbsp;|&nbsp; NINEA : 009829427
                2R2
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
