import {
  createContext, useContext, useReducer,
} from 'react';

export const shoppingCartContext = createContext();
export const useShoppingCartContext = () => useContext(shoppingCartContext);

const ADD_TO_CART = 'add-to-cart';
const REMOVE_FROM_CART = 'remove-from-cart';
const EMPTY_CART = 'empty-cart';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productFound = state.find(
        (cartItem) => cartItem.id === action.payload.id,
      );

      if (productFound) {
        // return the same cart but update quantity and total price
        const newShoppingCart = state.map((cartItem) => {
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
        return newShoppingCart;
      }
      // if product is not found then  add it to the cart for the first time
      const newCartItem = {
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      };
      return { ...state, newCartItem };
    }

    case REMOVE_FROM_CART: {
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
      // const newShoppingCart = state.filter((cartItem) => cartItem.id !== action.payload.id);
      // return {
      //   ...cartItem,
      //   quantity: cartItem.quantity - 1,
      //   total: cartItem.price * (cartItem.quantity - 1),
      // };
    }

    case EMPTY_CART: {
      return [];
    }

    default: {
      return state;
    }
  }
};

function ShoppingCartContextProvider(props) {
  const { children } = props;
  const shoppingCartInitialState = [];
  const [shoppingCart, dispatch] = useReducer(reducer, shoppingCartInitialState);

  const addToCart = (productData) => dispatch({ type: ADD_TO_CART, payload: productData });

  const removeFromCart = (productData) => dispatch({ type: REMOVE_FROM_CART, payload: productData });

  const emptyCart = () => dispatch({ type: EMPTY_CART });

  return (
    <shoppingCartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
