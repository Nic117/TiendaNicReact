import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const categories = ['Celulares', 'Laptops', 'Auriculares', 'Monitores']; // Lista de categorías

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'orange' }}>
    <a className="navbar-brand" href="#">NicSoft</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {categories.map((category, index) => (
          <li className="nav-item" key={index}>
            <a className="nav-link" href="#">{category}</a>
          </li>
        ))}
      </ul>
    </div>
    <CartWidget />
  </nav>
  
  );
};

export default NavBar;
