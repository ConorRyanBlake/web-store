import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/register" element={<RegisterForm setUser={setUser} />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
