import { useState } from 'react';
import robin from '../assets/robin.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <a href="index.html">
            <img src={robin} className="logo" alt="logo" />
          </a>

          {/* Menu desktop */}
          <ul className="nav-menu">
            <li><a href="#about">Qui suis-je ?</a></li>

            {/* Dropdown Solutions */}
            <li className="dropdown">
              <a href="#solutions">Solutions ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#solutions">Assurance vie</a></li>
                <li><a href="#solutions">Défiscalisation</a></li>
                <li><a href="#solutions">Produits structurés</a></li>
                <li><a href="#solutions">Portefeuille sur-mesure</a></li>
              </ul>
            </li>
            <li><a href="#process">Fonctionnement</a></li>
          </ul>

          {/* CTA */}
          <a href="#contact" className="cta-button">
            <span className="cta-avatar">👤</span>
            Planifier un rendez-vous
          </a>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {/* Menu mobile */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Qui suis-je ?</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Fonctionnement</a>
          <a href="#contact" className="cta-button" onClick={() => setMenuOpen(false)}>Planifier un rendez-vous</a>
        </div>

      </nav>
    </header>
  );
}