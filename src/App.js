import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./products/ProductList";
import Header from "./components/header/Header";
import Giris from "./Giris/Giris";
import Home from "./Home/Home";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const product = useSelector((state) => state.product.categories);
  console.log("product", product);
  useEffect(() => {
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        console.log("categoryRes", res);
      })
      .catch((err) => {
        console.log("categoryErr", err);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Giris />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
