import React from "react";
import Hero from "../components/ProductsComp/Hero";
import Products from "../components/ProductsComp/Products";
import AfterProductsSection from "../components/ProductsComp/AfterProductsSection";

const Productspage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Products/>
      <AfterProductsSection/>
    </div>
  );
};

export default Productspage;
