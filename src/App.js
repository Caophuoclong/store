import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios"

import { useStore, actions } from "StoreContext";

import Nav from "components/Nav"
import Footer from "components/Footer"
import Header from "components/Header"
import ToTop from "components/ToTop"
import CartBtn from "components/CartBtn"

import HomePage from "pages/Home"
import CartPage from "pages/Cart"
import ContactPage from "pages/Contact"
import NewsPage from "pages/News"
import SalesPage from "pages/Sales"
import WarrantyPage from "pages/Warranty"

function App() {
  const [state, dispatch] = useStore();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(product => {
        dispatch(actions.addProduct(product))
      })
      .catch(error => {
        const product = [{ image: "loadding...", description: "loadding..." }, { image: "loadding...", description: "loadding..." }, { image: "loadding...", description: "loadding..." }, { image: "loadding...", description: "loadding..." }, { image: "loadding...", description: "loadding..." }]
        dispatch(actions.addProduct(product));
      })
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? dispatch(actions.setTop(false)) : dispatch(actions.setTop(true));
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <Nav />
      <Header />
      <ToTop />
      {!state.isTop && <Link to="/cart"><CartBtn moveable /></Link>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/warranty" element={<WarrantyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
