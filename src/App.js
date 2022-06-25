import { useState, useEffect } from "react";
import Cart from "./Cart/Cart";
import GiftItem from "./components/GiftItem/GiftItem";
import Home from "./components/Home/Home";

// if data is present in localStorage, displaying that data on UI

const getlocalItems = () => {
  let cartItems = localStorage.getItem("cartItems");
  console.log("cartItemsInLocalStorage", cartItems);
  if (cartItems) {
    return (cartItems = JSON.parse(localStorage.getItem("cartItems")));
  } else {
    return [];
  }
};

const App = () => {
  const [show, setShow] = useState(true);
  const [cartItems, setCartItems] = useState(getlocalItems());

  console.log("cartItems ", cartItems);

  // adding data to localStorage

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("JSON.stringify(cartItems) :-", JSON.stringify(cartItems));
  }, [cartItems]);

  // Adding item in the Cart
  const onAddHandler = (item) => {
    console.log("Item to be added to cart", item);
    let isItemPresent = false;
    // itrating each element of the array
    for (let i = 0; i < cartItems.length; i++) {
      console.log("Item present in cart", cartItems);
      // increasing the quantity of item by 1 when item is already present up to 3
      if (cartItems[i].id === item.id) {
        console.log("Id of the item added in cart", cartItems[i].id);
        isItemPresent = true; // if if matches then item is present

        cartItems[i].qty = cartItems[i].qty + (item.qty < 3 ? 1 : 0);
        // after increasing item quantity updating array
      }
      console.log("Item in cart", cartItems);
    }
    // if item not present in the array
    if (!isItemPresent) {
      item.qty = 1; // initial quantity of item to be added in the array
      cartItems.push(item); // adding item in the array
      // updating the array
    }
    setCartItems([...cartItems]);
    console.log("cartItem:- ", JSON.stringify(cartItems));
  };
  // Removing Items from the cart

  const onRemoveHandler = (item) => {
    console.log("Item to be Removed :- ", item);
    // itrating each element of the array
    for (let i = 0; i < cartItems.length; i++) {
      console.log("index:- ", i);
      console.log("item present in Cart ", JSON.stringify(cartItems));
      console.log("CartItem ", cartItems[i]);
      // finding the item in the array to be removed
      if (cartItems[i].id === item.id) {
        console.log("Id of cartItems :-", cartItems[i].id);
        console.log("Id of Item ", item.id);
        //removing the item from array if quantity of item is 1,
        if (cartItems[i].qty === 1) {
          // removing ith element from the array
          for (let j = i; j < cartItems.length - 1; j++) {
            cartItems[i] = cartItems[i + 1];
            console.log("cartItems[i] ", cartItems[i]);
          }
          cartItems.splice(i, 1);
        } else {
          // if quqntity of item other than 1, decreasing item quantity br 1
          cartItems[i].qty = cartItems[i].qty - 1;
          console.log("remaning quantity ", cartItems[i].qty);
        }
        // updating the cart
        setCartItems([...cartItems]);
      }
      console.log("Item in Cart", cartItems);
    }
  };

  // deleting Cart items by remove button
  const onRemoveCart = (item) => {
    // itrating each element of the array
    for (let i = 0; i < cartItems.length; i++) {
      console.log("index:- ", i);
      console.log("item present in Cart ", cartItems);
      // matching id of item to the id of array element
      if (cartItems[i].id === item.id) {
        console.log("Id of cartItems :-", cartItems[i].id);
        console.log("Id of Item ", item.id);
        console.log("CartItem ", cartItems[i]);

        if (cartItems[i].qty > 0) {
          // removing ith element from the array
          // for (let j = i; j < cartItems.length - 1; j++) {
          //   cartItems[i] = cartItems[i + 1];
          //   console.log("cartItems[i+1] ", cartItems[i + 1]);
          // }
          cartItems.splice(i, 1);
        }
        // after removing updating array
        setCartItems([...cartItems]);
      }
      console.log("Item in Cart", cartItems);
    }
  };

  return (
    <div>
      <Home countCartItems={cartItems.length} setShow={setShow} />

      {show ? (
        <GiftItem
          cartItems={cartItems}
          onRemoveHandler={onRemoveHandler}
          onAddHandler={onAddHandler}
        /> //if true it will be render
      ) : (
        <Cart
          onAddHandler={onAddHandler}
          onRemoveHandler={onRemoveHandler}
          cartItems={cartItems}
          onRemoveCart={onRemoveCart}
        /> //if false it will be render
      )}
    </div>
  );
};

export default App;
