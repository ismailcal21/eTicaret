import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./products/ProductList";
import Header from "./components/header/Header";
import Giris from "./Giris/Giris";
import Home from "./Home/Home";
import { useEffect } from "react";
import axios from "axios";
import { setCategories } from "./redux/reducers/myCategories";
import ProductListDetails from "./products/components/ProductListDetails";
import Category from "./category/Category";

function App() {
  const product = useSelector((state) => state.product.categories);
  console.log("product", product);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        //console.log("categoryRes", res);
        dispatch(
          setCategories({
            categories: res.data,
          })
        );
      })
      .catch((err) => {
        console.log("categoryErr", err);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route
            path="/productList/:productId"
            element={<ProductListDetails />}
          />
          <Route path="/productList/:categoryName" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
