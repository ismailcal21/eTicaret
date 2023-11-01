import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.product.categories);
  //console.log("product1", products);

  if (products == null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <div>
        <SearchInput
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
        <>
          <div className="productList ">
            {filteredProducts.map((product, index) => (
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
      </div>
    </div>
  );
};

export default Home;
