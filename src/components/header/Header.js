import React, { useState } from "react";
import "./css/Header.css"; // Header bileşeninin stil dosyası
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [linkEnabled, setLinkEnabled] = useState(true);
  const categories = useSelector((state) => state.categories.categories);
  //console.log("categories", categories);

  const handleClick = () => {
    if (linkEnabled) {
      // Bağlantı işlemini gerçekleştirin
      setLinkEnabled(false);
      // Ardışık tıklamaları engellemek için bağlantıyı devre dışı bırakın
      setTimeout(() => {
        setLinkEnabled(true);
      }, 1000); // 1 saniye sonra bağlantıyı tekrar etkinleştirin
    }
  };

  if (categories === null) {
    return <p>Loading...</p>;
  }
  return (
    <header className="header">
      <div className="left">
        <div className="logo">Your Logo</div>

        <ul className="categories">
          <li>
            <Link to="/">Home</Link>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href="">{category.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/productList" onClick={handleClick}>
              Fiyata Gore
            </Link>
          </li>

          {/* Diğer kategorileri buraya ekleyin */}
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
