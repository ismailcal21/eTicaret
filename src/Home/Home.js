import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import Loading from "../Loading/Loading";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.product.categories);

  //console.log("product1", products);

  if (products == null) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <div>
        <SearchInput
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
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
              <div>
                <Link
                  to={`/productList/${product.id}`}
                  className="btn btn-success me-2"
                >
                  Detail
                </Link>
                <Link className="btn btn-warning">Duzenle</Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
