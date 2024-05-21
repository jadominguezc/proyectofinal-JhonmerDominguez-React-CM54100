import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (item, qty = 1) => {
        const newItem = {...item, qty};
        
        if(cart.some(product => product.id === newItem.id)){
            const newCart = cart.map(product => {
                if(product.id === newItem.id){
                    product.qty += newItem.qty;
                }
                return product;
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
        setCartCount(cartCount + qty);
    }

    const incrementCartCount = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                item.qty += 1;
            }
            return item;
        });
        setCart(newCart);
        setCartCount(cartCount + 1);
    };

    const decrementCartCount = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id && item.qty > 0) {
                item.qty -= 1;
            }
            return item;
        }).filter(item => item.qty > 0);
        setCart(newCart);
        setCartCount(cartCount - 1);
    };

    const removeItemById = (id) => {
        const itemToRemove = cart.find(item => item.id === id);
        if (itemToRemove) {
            setCartCount(cartCount - itemToRemove.qty);
        }
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    };

    const deleteCart = () => {
        setCart([]);
        setCartCount(0);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    };

    return(
        <CartContext.Provider
            value={{
                cart,
                cartCount,
                setCart,
                addToCart,
                incrementCartCount,
                decrementCartCount,
                removeItemById,
                deleteCart,
                getTotal
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
