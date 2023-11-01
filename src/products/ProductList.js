// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { setProduct } from "../redux/reducers/myReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SortedProductList from "../sortedProducts/SortedProducts";
import "./style/style.css";
import Header from "../components/header/Header";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // JSON Server API'sini tanımlayın

    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        //console.log("res", res);
        setProducts(res.data);
        dispatch(
          setProduct({
            categories: res.data,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (products === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div>
        <SortedProductList
          products={products}
          setSortedProducts={setSortedProducts}
        />
      </div>

      <div className="productList ">
        {sortedProducts.map((product, index) => (
          <Link key={index} className="productCard">
            <img
              src={product.image}
              alt={product.name}
              className="productImage"
            />
            <h3 className="productName">{product.name}</h3>
            <p className="productPrice">Fiyat: {product.price} TL</p>
            <p className="productCategory">Kategori: {product.category}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductList;

//https://api.themoviedb.org/3/discover/movie
