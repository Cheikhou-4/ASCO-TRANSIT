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
            <a href="https://www.instagram.com/asco_transit2?igsh=czl4MzR6aTFjdTZ2&utm_source=qr" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://x.com/ascotransit9?s=11" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@asco.transit?_r=1&_t=ZS-95IdrpceTXU" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.6c0 1.904-1.543 3.445-3.445 3.445-1.905 0-3.445-1.541-3.445-3.445 0-1.906 1.54-3.446 3.445-3.446.42 0 .816.074 1.185.208V8.92a6.85 6.85 0 0 0-1.185-.102 6.89 6.89 0 0 0-6.89 6.89 6.89 6.89 0 0 0 6.89 6.89 6.89 6.89 0 0 0 6.89-6.89V7.12a8.21 8.21 0 0 0 3.332 1.443V4.992a4.757 4.757 0 0 1-3.212-1.306z"/></svg>
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
