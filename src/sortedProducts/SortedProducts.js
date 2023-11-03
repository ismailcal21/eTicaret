import React, { useState, useEffect } from "react";
import "./style.css"; // Stil dosyasını ekleyin
import { Link } from "react-router-dom";

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
  }, [products, sortOrder]);

  const handleSort = () => {
    // Sıralama düzenini tersine çevirin
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="button-container">
        <Link className="btn btn-sm btn-danger" onClick={handleSort}>
          {sortOrder == "asc" ? "Artan" : "Azalan"}
          Fiyata Göre Sırala
        </Link>
      </div>
      {
        // <ul>
        //   {sortedProducts.map((product, index) => (
        //     <li key={index}>
        //       {product.name} - ${product.price}
        //     </li>
        //   ))}
        // </ul>
      }
    </div>
  );
};

export default SortedProductList;
