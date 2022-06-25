import React from "react";

const Card = ({ item, onAddHandler, getQuantity, onRemoveHandler }) => {
  const { id, name, description, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="imageOfgift" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{description}</p>
        <p>Price: Rs {price} </p>
        <div>
          <button className="btn" onClick={() => onRemoveHandler(item)}>
            -
          </button>
          <button className="btn"> {getQuantity(id)}</button>
          <button onClick={() => onAddHandler(item)}>+</button>
        </div>
        <button onClick={() => onAddHandler(item)}> + Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
