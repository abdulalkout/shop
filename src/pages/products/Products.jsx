import React, { useEffect, createContext, useState } from "react";
import Nav from "../../components/nav/Nav";
import ItemCard from "../../components/itemCard/ItemCard";
import ProductDetails from "../../components/productDetails/ProductDetails";
import "./products.css";

function Products() {
  const [pulledData, setPulledData] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const [openedProduct, setOpenedProduct] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

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

  const selectProduct = (item) => {
    setSelectedItem(item);
    setOpenedProduct(true);
  };

  const closeProduct = () => {
    setOpenedProduct(false);
  };

  const openProduct = (selectedItem) => {
    return (
      <div>
        <Nav />
        <button className="backButton" onClick={closeProduct}>{`<`}</button>
        <ProductDetails selectedItem={selectedItem} />
      </div>
    );
  };

  const allProducts = () => {
    return (
      <div>
        <Nav />
        <div className="itemsDiv">
          {pulledData.map((item, index) => {
            return (
              <a
                onClick={() => {
                  selectProduct(item);
                }}
                key={index}
              >
                <ItemCard item={item} />
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return openedProduct ? openProduct(selectedItem) : allProducts();
}

export default Products;
