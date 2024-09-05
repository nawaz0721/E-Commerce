import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Slider from "./components/Slider";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
