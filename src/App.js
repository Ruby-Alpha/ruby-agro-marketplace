import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <>
    {/* This is to define or tell us all the routes we have on our website */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* If someone clicks on the products, it will show the Products Page */}
      {/* <Route path="/products" element={<ProductsPage />} /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
    </Routes>
  </>
  );
}

export default App;
