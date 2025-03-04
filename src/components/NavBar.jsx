import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './cart/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Inicio</Link>
      <div className="navbar-links">
        <Link to="/Productos" className="navbar-link">Productos</Link>
        <Link to="/category/men's clothing" className="navbar-link">Vestimenta Hombre</Link>
        <Link to="/category/jewelery" className="navbar-link">Joyeria</Link>
        <Link to="/category/electronics" className="navbar-link">Electronica</Link>
        <Link to="/category/women's clothing" className="navbar-link">Vestimenta de Mujer</Link>
      </div>
      <CartWidget></CartWidget>
    </nav>
  );
};

export default NavBar;