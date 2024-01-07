import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";
import CopyrightFooter from "./components/CopyrightFooter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <CopyrightFooter />
    </BrowserRouter>
  );
}

export default App;
