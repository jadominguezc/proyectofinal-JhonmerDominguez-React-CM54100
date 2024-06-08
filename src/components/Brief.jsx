// BRIEF.JSX
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../css/brief.css';

const Brief = () => {
  const { cart, incrementCartCount, decrementCartCount, removeItemById, getTotal } = useContext(CartContext);

  const totalAmount = getTotal();

  return (
    <div className="brief">
      <h2>PEDIDO DE COMPRAS</h2>
      <table className="brief-table-head">
        <thead>
          <tr>
            <th>CANT</th>
            <th>DESCRIPCIÓN</th>
            <th>PRECIO UNITARIO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody  className="brief-table-body">
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.qty}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <button className="brief-action-button" onClick={() => incrementCartCount(item.id)}>+</button>
                <button className="brief-action-button" onClick={() => decrementCartCount(item.id)}>-</button>
                <button className="brief-action-button" onClick={() => removeItemById(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h3>TOTAL A PAGAR: ${totalAmount}</h3>
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default Brief;
