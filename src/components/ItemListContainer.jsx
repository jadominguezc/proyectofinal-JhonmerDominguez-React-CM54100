import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './DataBase';
import ItemList from './ItemList';
import { CartContext } from './CartContext';
import '../css/itemListContainer.css';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const { addToCart } = useContext(CartContext); // Usar addToCart del contexto

  useEffect(() => {
    const fetchItems = async () => {
      let q;
      if (categoryId) {
        q = query(collection(db, "items"), where("category", "==", categoryId));
      } else {
        q = query(collection(db, "items"));
      }
      const querySnapshot = await getDocs(q);
      const itemsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsArray);
    };

    fetchItems();
  }, [categoryId]);

  const handleButtonClick = (item) => {
    addToCart(item); // Usar addToCart para agregar el artículo al carrito
    console.log('Button clicked', item);
  };

  return (
    <div className="item-list-container">
      <h2 className='item-title-page'>PRODUCTOS</h2>
      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item-wrapper">
            <Link to={`/item/${item.id}`} className="item-link">
              <ItemList
                id={item.id}
                picture={item.picture}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </Link>
            <button 
              className="item-card-button" 
              onClick={() => handleButtonClick(item)}
            >
              AÑADIR AL CARRO
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
