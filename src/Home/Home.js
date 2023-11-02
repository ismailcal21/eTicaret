import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import Loading from "../Loading/Loading";

const Home = () => {
  // const [filteredProducts, setFilteredProducts] = useState([]);
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
          // setFilteredProducts={setFilteredProducts}
          products={products}
        />
        <></>
      </div>
    </div>
  );
};

export default Home;
