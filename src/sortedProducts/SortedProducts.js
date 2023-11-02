import React, { useState, useEffect } from "react";
import "./style.css"; // Stil dosyasını ekleyin

const SortedProductList = ({ products, setSortedProducts }) => {
  const [sortOrder, setSortOrder] = useState("asc"); // varsayılan sıralama artan sıra

  useEffect(() => {
    // products dizisini kopyalayın ve sıralayın
    const sorted = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSortedProducts(sorted);
  }, [products, sortOrder, setSortedProducts]);

  const handleSort = () => {
    // Sıralama düzenini tersine çevirin
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="button-container">
        <button className="sort-button" onClick={handleSort}>
          {sortOrder === "asc" ? "Artan" : "Azalan"} Fiyata Göre Sırala
        </button>
      </div>
      {/* <ul>
        {sortedProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SortedProductList;
