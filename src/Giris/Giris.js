import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Giris = () => {
  return (
    <div>
      <p>Welcome to Our Website</p>
      <Link to="home">Please click here to open Home page</Link>
    </div>
  );
};

export default Giris;
