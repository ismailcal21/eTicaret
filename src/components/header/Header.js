import React from "react";
import "./css/Header.css"; // Header bileşeninin stil dosyası

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <div className="logo">Your Logo</div>
        <ul className="categories">
          <li>
            <a href="#">Kategori 1</a>
          </li>
          <li>
            <a href="#">Kategori 2</a>
          </li>
          <li>
            <a href="#">Kategori 3</a>
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
