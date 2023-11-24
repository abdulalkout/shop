import React from "react";
import Nav from "../../components/nav/Nav";
import CardList from "../../components/cardList/CardList";
import Card from "../../components/cards/Card";
import { useState, useRef, useContext } from "react";
import { shopProductsContext } from "../../App";

function Home() {
  const shopProducts = useContext(shopProductsContext);
  const searchInput = useRef(null);
  const [productSearched, setProductSearched] = useState("");

  const searchInputValue = (e) => {
    e.preventDefault();
    let newSearchedProduct = searchInput.current.value;
    setProductSearched(newSearchedProduct);
    console.log(productSearched);
  };

  return (
    <div>
      <Nav />
      <form onChange={searchInputValue} className="formClass">
        <input type="text" placeholder="Search" ref={searchInput} />
      </form>
      {productSearched !== "" ? (
        shopProducts
          .filter(
            (product) =>
              productSearched.toLowerCase() === product.name.toLowerCase()
          )
          .map((filteredProduct, index) => (
            <Card key={index} product={filteredProduct} />
          ))
      ) : (
        <CardList />
      )}
    </div>
  );
}

export default Home;
