import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Men from "./pages/men/Men";
import ProductDetail from "./pages/men/ProductDetail";
import Women from "./pages/women/Women";
import WomenProductDetail from "./pages/women/WomenProductDetail";
import Cart from "./pages/cart/Cart";
import CartSidebar from "./components/cart/CartSidebar";
import Notification from "./components/ui/Notification";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="men" element={<Men />} />
            <Route path="men/:id" element={<ProductDetail />} />
            <Route path="women" element={<Women />} />
            <Route path="women/:id" element={<WomenProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
        <CartSidebar />
        <Notification />
      </Router>
    </CartProvider>
  );
}

export default App;
