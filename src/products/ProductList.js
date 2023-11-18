// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { setProduct } from "../redux/reducers/myReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SortedProductList from "../sortedProducts/SortedProducts";
import "./style/style.css";
import Header from "../components/header/Header";
import Loading from "../Loading/Loading";
import { addItem } from "../redux/reducers/cartSlice";

function ProductList() {
  //const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const products = useSelector((state) => state.product.categories);
  //console.log("productsDtay", products);
  const cart = useSelector((state) => state);
  console.log("cart", cart);
  console.log("itemsInCart", itemsInCart);

  const dispatch = useDispatch();

  // const addToCart = (product) => {
  //   dispatch(addItem(product));
  // };

  const addToCart = (product) => {
    setItemsInCart([...itemsInCart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = itemsInCart.filter((item) => item.id !== product.id);
    setItemsInCart(updatedCart);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        //console.log("res", res);
        //setProducts(res.data);
        dispatch(
          setProduct({
            categories: res.data,
          })
        );
      })
      .catch((err) => {
        console.log("productlist err", err);
      });
  }, []);

  if (products === null) {
    return <Loading />;
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
            <div>
              <Link
                to={`/productList/${product.id}`}
                className="btn btn-success me-2"
              >
                Detail
              </Link>
              <Link
                // onClick={() => addToCart({ product })}
                onClick={() => addToCart(product)}
                className="btn btn-sm me-2 btn-warning"
              >
                Sepete Ekle
              </Link>
              <Link
                // onClick={() => addToCart({ product })}
                onClick={() => removeFromCart(product)}
                className="btn btn-sm btn-danger"
              >
                Sepetten Cikar
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductList;

//https://api.themoviedb.org/3/discover/movie
