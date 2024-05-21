import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../css/itemCount.css';

const ItemCount = () => {
  const { cartCount, incrementCartCount } = useContext(CartContext);

  return (
    <div className="item-count">
      <span>{cartCount}</span>
    </div>
  );
};

export default ItemCount;
