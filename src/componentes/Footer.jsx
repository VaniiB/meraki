import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaDribbble } from 'react-icons/fa';
import '../css/footer.css'; // Importamos el archivo CSS
import logoImage from '../resources/Mesa de trabajo 1.png'; // Importar el logo

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">
          <img src={logoImage} alt="Logo Meraki" className="footer-logo" /> Meraki
        </h2>
        <p className="footer-text">
          ¿Listo para elevar tu presencia online? Contáctanos hoy para discutir tu proyecto y descubrir cómo podemos hacer realidad tu visión.
        </p>

        <nav className="footer-nav">
          <a href="/" className="footer-link">Inicio</a>
          <a href="/proyectos" className="footer-link">Proyectos</a>
          <a href="/como-trabajamos" className="footer-link">Como trabajamos</a>
          <a href="/servicios" className="footer-link">Servicios</a>
        </nav>

        <div className="footer-icons">
          <FaInstagram className="footer-icon" />
          <FaLinkedin className="footer-icon" />
          <FaTiktok className="footer-icon" />
          <FaDribbble className="footer-icon" />
        </div>

        <div className="footer-credits">
          <span className="footer-heart-icon">❤️</span> Hecho con amor y potenciado por <a href="https://merakiwebsolution.com.ar" className="footer-credit-link">merakiwebsolution.com.ar</a>
        </div>
      </div>
    </footer>
  );
}

