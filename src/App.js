import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import SectionHeader from "./components/SectionHeader";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/cart/cart";

const updateCart = (val) => {
  console.log(val);
};

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Box>
  );
}

export default App;
