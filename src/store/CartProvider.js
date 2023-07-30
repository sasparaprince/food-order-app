import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existiongCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existiongCartItem) {
      const updatedItem = {
        ...existiongCartItem,
        amount: existiongCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existionCartItrmIndex = state.items.findIndex(
      (item)=> item.id === action.id
    );
    const existingItem = state.items[existionCartItrmIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }else{
const updatedItem = {...existingItem, amount : existingItem.amount -1};
updatedItems = [...state.items]
updatedItems[existionCartItrmIndex] = updatedItem;
    }
    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, despatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHnadler = (item) => {
    despatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    despatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHnadler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
