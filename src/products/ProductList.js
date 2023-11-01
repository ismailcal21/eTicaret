// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { setProduct } from "../redux/reducers/myReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // JSON Server API'sini tanımlayın
    const apiUrl = "";

    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        console.log("res", res);
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

  return (
    <>
      <div style={styles.inputContainer}>
        <SearchInput
          setFilteredProducts={setFilteredProducts}
          products={products}
          style={styles.input}
        />
      </div>
      <div style={styles.productList}>
        {filteredProducts.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Fiyat: {product.price} TL</p>
            <p style={styles.productCategory}>Kategori: {product.category}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;

//https://api.themoviedb.org/3/discover/movie
const styles = {
  inputContainer: {
    width: "100%",
    maxHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "50%",
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",

    borderColor: "black",
  },
  productCard: {
    width: "30%",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  productImage: {
    maxWidth: "100%",
    maxHeight: "150px",
  },
  productName: {
    fontSize: "16px",
  },
  productPrice: {
    fontSize: "14px",
  },
  productCategory: {
    fontSize: "14px",
  },
};
