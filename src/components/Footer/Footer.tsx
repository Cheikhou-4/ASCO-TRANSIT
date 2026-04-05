import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2>ASCO TRANSIT SUARL</h2>
            <div className="footer__brand-sub">Commissionnaire Agréé en Douane</div>
            <p>
              Votre partenaire de confiance pour le dédouanement, le transit et
              la logistique internationale au Sénégal. Expertise, réactivité et
              conformité.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#whyus">Avantages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Dédouanement</a></li>
              <li><a href="#services">Transit</a></li>
              <li><a href="#services">Fret International</a></li>
              <li><a href="#services">Conseil Douanier</a></li>
              <li><a href="#services">Gestion Documentaire</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>Route du Croisement Cambérène, Dakar, Sénégal</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>+221 33 851 51 14</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📧</span>
              <span>ascotransit23@gmail.com</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">🕐</span>
              <span>Lun–Ven : 8h–18h | Sam : 9h–13h</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 ASCO TRANSIT SUARL. Tous droits réservés.</span>
          <div className="footer__socials">
            <a href="https://www.facebook.com/share/1Hr3Cnc5zv/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href="https://wa.me/221785016571" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.408 2.445 1.103 3.407l-.722 2.637 2.712-.712c.907.515 1.954.81 3.07.81 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.38 8.191c-.131.37-.769.712-1.062.75-.293.037-.656.075-1.022-.038-.365-.112-.768-.262-1.221-.45-1.928-.787-3.187-2.737-3.281-2.868-.094-.131-.769-.975-.769-1.856s.469-1.312.637-1.481c.169-.169.375-.206.488-.206.112 0 .225 0 .319.019.094.019.225-.038.356.262.131.3.45 1.087.488 1.162.037.075.056.169 0 .281-.056.112-.094.187-.187.3-.094.112-.187.206-.281.337-.112.131-.225.262-.112.45.112.187.488.806 1.05 1.312.712.656 1.312.862 1.5 1 .187.131.3.112.412 0 .112-.112.488-.562.619-.75.131-.187.262-.15.45-.075.187.075 1.181.562 1.387.675.206.112.337.169.394.262.056.094.056.544-.075.914zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
