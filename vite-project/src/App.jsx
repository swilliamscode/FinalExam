import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
      </Routes>
      
    </Router>
    
  );
};

export default App;