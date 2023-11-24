import React from "react";
import "./card.css";

function Card({ product }) {
  return (
    <div className="card">
      <img className="productsImg" src={product.image} />
      <h3>{product.name}</h3>
    </div>
  );
}

export default Card;
