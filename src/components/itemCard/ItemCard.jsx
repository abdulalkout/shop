import React from "react";
import "./itemCard.css";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img className="itemImg" src={item.image} />
      <div>
        <h4>{item.title}</h4>
      </div>
    </div>
  );
}

export default ItemCard;
