import React from 'react';
import './Footer.css';
import logo from './assets/logo.png'; // adapte le chemin selon ton projet

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Bloc gauche : Logo + Description */}
        <div className="footer-left">
          <img src={logo} alt="Logo Sunflow" className="footer-logo" />
          <p>Sunflow® – Régulateur solaire intelligent MPPT 100% Algérien, au service de la performance énergétique durable.</p>
        </div>

        {/* Bloc centre : Services */}
        <div className="footer-services">
          <h4>Nos Services</h4>
          <ul>
            <li>Régulation MPPT</li>
            <li>Installation solaire</li>
            <li>Formation technique</li>
            <li>Support & Maintenance</li>
          </ul>
        </div>

        {/* Bloc droite : Contacts */}
        <div className="footer-contacts">
          <h4>Contact</h4>
          <div className="contact-entry">
            <span>Kerrouche Moadh</span>
            <a
  href="mailto:kerrouche.moadh@gmail.com?subject=Demande%20d'information%20Sunflow&body=Bonjour%20Moadh,%0AJe%20souhaite%20en%20savoir%20plus%20sur%20le%20produit%20Sunflow."
  className="email-link"
>
  kerrouche.moadh@gmail.com
</a>
          </div>
          <div className="contact-entry">
            <span>Kaid Abderrahmene</span>
            <a href="mailto:Gaidabderrahmene23@gmail.com" className="email-link">
  Gaidabderrahmene23@gmail.com
</a>          </div>
          
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sunflow. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
