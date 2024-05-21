import React from 'react';
import '../css/itemList.css';

const ItemList = ({ id, name, description, price, picture, onButtonClick }) => {
  return (
    <div className="item-card">
      <img src={picture} alt={name} className="item-card-picture" />
      <h3 className="item-card-title">{name}</h3>
      <p className="item-card-description">{description}</p>
      <p className="item-card-price">${price}</p>
    </div>
  );
};

export default ItemList;

