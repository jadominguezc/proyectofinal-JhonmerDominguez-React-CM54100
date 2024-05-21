import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './DataBase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSelectedItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("Ningún Documento!");
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {selectedItem && (
        <ItemDetail
          name={selectedItem.name}
          description={selectedItem.description}
          price={selectedItem.price}
          picture={selectedItem.picture}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
