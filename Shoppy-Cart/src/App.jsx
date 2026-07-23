import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProductModal from "./components/AddProductModal";
import CartModal from "./components/CartModal";
import "./App.css";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 45 },
    { id: 3, name: "USB-C Cable", price: 8 },
    { id: 4, name: "Laptop Stand", price: 30 },
    { id: 5, name: "Headphones", price: 60 },
  ]);
  const [cart, setCart] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showCart, setShowCart] = useState(false);
  function addProduct(product) {
    setProducts([...products, product]);
  }
  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }
  function changeQty(id, delta) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  }
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  let cartCount = 0;
  cart.forEach((item) => {
    cartCount += item.qty;
  });
  return (
    <div>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />
      <ProductList
        products={products}
        onAddToCart={addToCart}
        onOpenAdd={() => setShowAdd(true)}
      />
      {showAdd && (
        <AddProductModal
          onAddProduct={addProduct}
          onClose={() => setShowAdd(false)}
        />
      )}
      {showCart && (
        <CartModal
          cart={cart}
          onChangeQty={changeQty}
          onRemove={removeFromCart}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  );
}
export default App;
