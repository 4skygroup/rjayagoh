import { useState } from 'react';
import robbin from '../assets/robbin.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <a href="index.html">
            <img src={robbin} className="logo" alt="logo" />
          </a>

          {/* Menu desktop */}
          <ul className="nav-menu">
            <li><a href="#about">Qui suis-je ?</a></li>

            {/* Dropdown Solutions */}
            <li className="dropdown">
              <a href="#solutions">Solutions ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#solutions">Analyse et Audit</a></li>
                <li><a href="#solutions">Pilotage Stratégique</a></li>
                <li><a href="#solutions">Optimisation</a></li>
                <li><a href="#solutions">Ingénierie de Réussite</a></li>
              </ul>
            </li>
            <li><a href="#process">Fonctionnement</a></li>
          </ul>

          {/* CTA */}
          <a href="#contact" className="cta-button">
            {/*<ButtonAvatar />*/}
            <img
                src="/avatar.png"
                alt="Avatar"
                className="hero-btn-avatar"
            />
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