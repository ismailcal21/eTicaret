import React, { useState } from "react";
import "./css/Header.css"; // Header bileşeninin stil dosyası
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Header = () => {
  const categories = useSelector((state) => state.categories.categories);
  //console.log("categories", categories);

  return (
    <header className="header">
      <div className="left">
        <div className="logo">Your Logo</div>

        <ul className="categories">
          <li className="me-4">
            <Link to="/">Home</Link>
          </li>
          {categories ? (
            <>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/productList/${category.name}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <Loading />
          )}

          <li>
            <Link to="/productList">Fiyata Gore</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="signup">
          Sign up
        </a>
      </div>
    </header>
  );
};

export default Header;
