import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../../App.css";
import Search from "./Search";
import { Link } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand" onClick={handleLogoClick}>
          <img src="./images/logo.png" alt="proshop" />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Routes>
          <Route path="/" element={<Search />} exact />
          <Route path="/search/:keyword" element={<Search />} />
        </Routes>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to ="/login" className="btn ml-4" id="login_btn">
          Login
        </Link>

        <span id="cart" className="ml-3">
          Cart
        </span>
        <span className="ml-1" id="cart_count">
          2
        </span>
      </div>
    </nav>
  );
};

export default Header;
