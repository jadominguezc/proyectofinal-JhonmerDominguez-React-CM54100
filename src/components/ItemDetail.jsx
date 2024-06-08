import React from 'react';
import '../css/itemDetail.css';

const ItemDetail = ({ name, description, category, price, picture }) => {
  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{category}</p>
      <h3>$ {price}</h3>
      <img src={`/pictures/${picture}`} alt={name} />
    </div>
  );
};

export default ItemDetail;
