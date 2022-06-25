import "./Cart.css";

const Cart = ({ cartItems, onAddHandler, onRemoveHandler, onRemoveCart }) => {
  // Getting Total
  const getTotal = () => {
    let total = 0;
    // // itrating each element of the array
    for (let i = 0; i < cartItems.length; i++) {
      // finding total price of the element
      total += cartItems[i].price * cartItems[i].qty;
      console.log("Each item price", cartItems[i].price);
      console.log("Quantity of each item ", cartItems[i].qty);
    }
    console.log("Total Amount", total);
    return total;
  };
  //  Alert message
  const myAlert = () => {
    alert("Thanks for Shoping with us!");
  };

  return (
    <article>
      {cartItems.map((item) => (
        <div key={item.id} className="cart_box">
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
          <div>
            <button className="minus" onClick={() => onRemoveHandler(item)}>
              -
            </button>
            <button> {item.qty}</button>
            <button className="plus" onClick={() => onAddHandler(item)}>
              +
            </button>
          </div>
          <div>
            <span>Rs {item.price}</span>
            <button onClick={() => onRemoveCart(item)}> Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs {getTotal()}</span>
      </div>
      <button onClick={() => myAlert()} className="order">
        {" "}
        Order Now
      </button>
    </article>
  );
};

export default Cart;
