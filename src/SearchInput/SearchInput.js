import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        //console.log("res", res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Search err", err);
      });
  }, []);

  useEffect(() => {
    //Ürünleri ara ve filtrele
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  if (products === null) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Kategori Ara"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="productList ">
        {filteredProducts.map((product, index) => (
          <div key={index} className="productCard">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;

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
    height: "30px",
    borderRadius: "30px",
    textAlign: "center",
    margin: "20px",
  },
};
