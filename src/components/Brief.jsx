import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../css/brief.css';

const Brief = () => {
  const { cart, setCart, setCartCount } = useContext(CartContext);

  const incrementQty = (id) => {
    setCart((prevCart) => prevCart.map((item) => 
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
    setCartCount((prevCount) => prevCount + 1);
  };

  const decrementQty = (id) => {
    setCart((prevCart) => 
      prevCart
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  const removeItem = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);
    setCartCount((prevCount) => prevCount - itemToRemove.qty);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="brief">
      <h2>PEDIDO DE COMPRAS</h2>
      <table className="brief-table-head">
        <thead>
          <tr>
            <th>CANT</th>
            <th>DESCRIPCIÓN</th>
            <th>PRECIO</th>
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
                <button className="brief-action-button" onClick={() => incrementQty(item.id)}>+</button>
                <button className="brief-action-button" onClick={() => decrementQty(item.id)}>-</button>
                <button className="brief-action-button" onClick={() => removeItem(item.id)}>Eliminar</button>
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
