import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import SignIn from "./pages/signInPage/SignIn";
import shopProducts from "./module/module";
import { createContext } from "react";

export const shopProductsContext = createContext();

function App() {
  return (
    <div>
      <shopProductsContext.Provider value={shopProducts}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signInPage" element={<SignIn />} />
        </Routes>
      </shopProductsContext.Provider>
    </div>
  );
}

export default App;
