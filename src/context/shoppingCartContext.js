import { createContext, useState, useContext } from 'react';

export const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);

function ShoppingCartContextProvider(props) {
  const { children } = props;

  // shopping cart
  const shoppingCartInitialState = [];
  const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);

  console.log('shopping cart state: ', shoppingCart);

  const addToCart = (productData) => {
    // function to check for existing product in cart first to be able to add/change quantity
    const productFound = shoppingCart.find((cartItem) => cartItem.id === productData.id);

    // if found then keep shopping cart but change quantity of item
    if (productFound) {
      const newShoppingCart = shoppingCart.map((cartItem) => {
        if (cartItem.id === productFound.id) {
          const newItemQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newItemQuantity,
            total: newItemQuantity * cartItem.price,
          };
        }
        return cartItem;
      });
      setShoppingCart(newShoppingCart);
    } else {
      // if item is not already found in cart, add it to the cart for the first time
      const newCartItem = { ...productData, quantity: 1, total: productData.price };
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter((cartItem) => cartItem.id !== productId);
    setShoppingCart(newShoppingCart);
  };

  const emptyCart = () => {
    setShoppingCart(shoppingCartInitialState);
  };

  return (
    <shoppingCartContext.Provider value={{
      shoppingCart, addToCart, removeFromCart, emptyCart,
    }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
