import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CreditCardIcons from "./components/CreditCardIcons";
import Banner2 from "./components/Banner2";
import SearchBar from "./components/SearchBar";
import OfferingCards from "./components/OfferingCards";

import "./App.css";

const App = () => {
  return (

    <Router>
      <Banner />
      <Banner2 />
      <SearchBar />
      <Navbar />
      <OfferingCards />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <CreditCardIcons />
      <Footer />
    </Router>
   
  );
};

export default App;
