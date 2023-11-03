import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import "./style/style.css";
import SortedProductList from "../../sortedProducts/SortedProducts";

const ProductListDetails = () => {
  const [urunDetay, setUrunDetay] = useState([]);
  const products = useSelector((state) => state.product.categories);
  console.log("productsDtay", products);
  const params = useParams();

  console.log("params", params.productId);

  useEffect(() => {
    const arananUrun = products.find(
      (product) => product.id == params.productId
    );
    setUrunDetay(arananUrun);
  }, []);

  return (
    <div>
      <Header />

      <div class="container">
        <div class="card">
          <img src={urunDetay.image} alt="" />
          <div class="info">
            <h1>{urunDetay.name}</h1>

            <p>{urunDetay.description}</p>
            <button>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListDetails;
