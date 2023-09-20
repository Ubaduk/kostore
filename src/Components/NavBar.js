import React from 'react'

import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Ko Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/category/BoxingGloves">Boxing Gloves</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/MMAGloves"> MMA Gloves</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/ShinGuards">Shin Guards</Link>
        </li>
      </ul>
      <div className="navbar-text">
      <Link to="/cart" > <CartWidget/> </Link>
      </div>
    </div>
  </div>
</nav>
  </div>
  )
}

export default NavBar