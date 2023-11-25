import React from "react";
import "./productDetails.css";

function ProductDetails({ selectedItem }) {
  return (
    <div className="productDetailsDiv">
      <img className="imgDetail" src={selectedItem.image} />
      <h3>{selectedItem.title}</h3>
      <p>{selectedItem.description}</p>
      <h4>${selectedItem.price}</h4>
      {/* <img src={selectedItem.rating} /> */}
      <button>By Now</button>
    </div>
  );
}

export default ProductDetails;

//id, title, price, description, category, image, rating
