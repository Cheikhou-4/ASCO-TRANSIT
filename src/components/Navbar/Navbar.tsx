import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Formation', href: '#formation' },
  { label: 'Studio IA', href: '#studio' },
  { label: 'Pourquoi nous', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
      <div className="container navbar__inner">
        <a href="#accueil" className="navbar__logo" onClick={handleLinkClick}>
          <img src="/logo.png" alt="ASCO TRANSIT" />
          <div className="navbar__logo-text">
            <h1>ASCO TRANSIT</h1>
            <span>Commissionnaire Agréé</span>
          </div>
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={handleLinkClick}>
            Demander un Devis
          </a>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`navbar__overlay ${menuOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </nav>
  );
}
