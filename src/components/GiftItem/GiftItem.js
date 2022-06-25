import React from "react";
import productList from "../data/data";
import Card from "../Card";
import "./GiftItem.css";

const GiftItem = ({ onAddHandler, onRemoveHandler, cartItems }) => {
  // getting quantity of each item
  const getQuantity = (itemId) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === itemId) {
        console.log("cartItems[i].id", cartItems[i].id);
        console.log("itemId", itemId);
        return cartItems[i].qty; // returning the quantity of item that is present in cart
      }
      console.log("cartItems[i].qty", cartItems[i].qty);
    }
    return 0;
  };

  return (
    // rendering items into the Card
    <section>
      {productList.map((item) => (
        <Card
          key={item.id}
          item={item}
          onRemoveHandler={onRemoveHandler}
          onAddHandler={onAddHandler}
          getQuantity={getQuantity}
        />
      ))}
    </section>
  );
};

export default GiftItem;
