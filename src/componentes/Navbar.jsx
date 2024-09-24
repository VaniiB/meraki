import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../css/navbar.css';
import logoImage from '../resources/Mesa de trabajo 1.png';

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuBtnActive, setIsMobileMenuBtnActive] = useState(false);

  const location = useLocation();

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro de que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoggedIn(false);
      }
    });
  };

  const handleCartClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      // Redirigir a registro si no está logueado
      // Cambiar a la lógica de redirección si es necesario
    } else {
      // Redirigir a la página de checkout
      window.location.href = '/checkout';
    }
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      // Mostrar opciones de usuario en lugar de redirigir
      // Podrías alternar un estado para mostrar el menú desplegable de usuario aquí
    } else {
      window.location.href = '/iniciarsesion';
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuBtnActive(!isMobileMenuBtnActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileMenuBtnActive(false);
  };

  const getActiveMenuText = () => {
    switch (location.pathname) {
      case '/':
        return 'Inicio';
      case '/paquetes':
        return 'Paquetes';
      case '/comotrabajamos':
        return 'Cómo Trabajamos';
      case '/servicios':
        return 'Servicios';
      default:
        return 'Menú';
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-brand">
          <div className="logo">
            <img src={logoImage} alt="Logo Meraki" />
          </div>
          <div className="brand">Meraki</div>
        </Link>

        <div className="menu">
          <ul>
            <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/paquetes' ? 'active' : ''}`}>
              <Link to="/paquetes">Paquetes</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/comotrabajamos' ? 'active' : ''}`}>
              <Link to="/comotrabajamos">Cómo Trabajamos</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
              <Link to="/servicios">Servicios</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-buttons">
          {isLoggedIn ? (
            <>
              <button className="cart-btn" onClick={handleCartClick}>
                <FaShoppingCart />
              </button>
              <button className="profile-btn" onClick={handleLogout}>Cerrar sesión</button>
              <div className="profile-dropdown">
                <Link to="/misdatos"><FaUserCircle /> Mis Datos</Link>
                <Link to="/seguimientos">Seguimientos</Link>
              </div>
            </>
          ) : (
            <>
              <button className="cart-btn" onClick={handleCartClick}>
                <FaShoppingCart />
              </button>
              <Link to="/registro">
                <button className="register-btn">Registrarse</button>
              </Link>
              <Link to="/ingresar">
                <button className="login-btn">Ingresar</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <div className="mobile-logo">
          <img src={logoImage} alt="Logo Meraki" />
        </div>
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'menu-open' : ''} ${isMobileMenuBtnActive ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          {getActiveMenuText()}
        </button>
        <div className="mobile-icons">
          <FaShoppingCart onClick={handleCartClick} />
          <FaUserCircle onClick={handleUserIconClick} />
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <ul>
            <li className={`mobile-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
            </li>
            <li className={`mobile-menu-item ${location.pathname === '/paquetes' ? 'active' : ''}`}>
              <Link to="/paquetes" onClick={closeMobileMenu}>Paquetes</Link>
            </li>
            <li className={`mobile-menu-item ${location.pathname === '/comotrabajamos' ? 'active' : ''}`}>
              <Link to="/comotrabajamos" onClick={closeMobileMenu}>Cómo Trabajamos</Link>
            </li>
            <li className={`mobile-menu-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
              <Link to="/servicios" onClick={closeMobileMenu}>Servicios</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Sidebar del carrito */}
      <div className={`cart-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={handleCartClick}>&times;</div> {/* Cruz para cerrar */}
        {cartItems.length === 0 ? (
          <p>Carrito de compras vacío.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
        <button onClick={handleCheckout}>Comprar</button>
      </div>
    </>
  );
};
