import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ItemCount />
      <nav className="cart-widget-icon">
        <Link to="/brief">
          <FaShoppingCart />
        </Link>
      </nav>
    </div>
  );
};

export default CartWidget;
