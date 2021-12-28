import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo.jpg';
import Search from 'components/Search';
import CartBtn from 'components/CartBtn';
export default function index() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="this is logo" />
        <span>Store</span>
      </div>
      <Search />
      <Link to="/cart">
        <CartBtn />
      </Link>
    </header>
  );
}
