import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const SearchInput = ({ setFilteredProducts, products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   // Ürünleri ara ve filtrele
  //   const filtered = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchTerm, products]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  if (products === null) {
    return <Loading />;
  }

  return (
    <div style={styles.inputContainer}>
      <input
        style={styles.input}
        type="text"
        placeholder="Kategori Ara"
        value={searchTerm}
        onChange={handleInputChange}
      />
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
