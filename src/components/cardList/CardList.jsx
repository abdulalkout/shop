import React from "react";
import "./cardList.css";
import { useContext } from "react";
import { shopProductsContext } from "../../App";
import Card from "../cards/Card";

function CardList() {
  const shopProducts = useContext(shopProductsContext);

  return (
    <div className="cardList">
      {shopProducts.map((product, index) => {
        return (
          <div key={index}>
            <Card product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
