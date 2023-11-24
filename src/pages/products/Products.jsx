import React, { useEffect, createContext, useState } from "react";
import Nav from "../../components/nav/Nav";
import ItemCard from "../../components/itemCard/ItemCard";
import "./products.css";
import { Link } from "react-router-dom";

export const productContext = createContext();

function Products() {
  const [pulledData, setPulledData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data[5]);
      setPulledData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openProduct = () => {};

  return (
    <div>
      <Nav />
      <div className="itemsDiv">
        {pulledData.map((item, index) => {
          return (
            <Link onClick={openProduct} to="/productPage" key={index}>
              <ItemCard item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
