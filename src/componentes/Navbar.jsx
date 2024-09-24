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
    } else {
      // Redirigir a la página de checkout
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-brand">
          <div className="logo">
            <img src={logoImage} alt="Logo Meraki" />
          </div>
          <div className="brand">Meraki</div> {/* Texto sin subrayado */}
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

      {/* Sidebar del carrito */}
      <div className={`cart-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={handleCartClick}>Cerrar</button>
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
