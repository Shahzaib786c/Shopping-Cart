// import { useState } from "react";
import Navbar from "./Components/Navbar";
// import CartIcon from "./Components/CartIcon";
// import ProductCard from "./Components/ProductCard";
import ProductList from "./Components/ProductList";
import "./App.css";
import { useState } from "react";

function App() {
  // const [products, setProducts] = useState([
  //   {
  //     title: "Iphone",
  //     price: 1200,
  //   },
  //   {
  //     title: "SamSung",
  //     price: 1200,
  //   },
  // ]);

  const onCartClick = () => {};
  return (
    <>
      <Navbar cartCaount={4} onCartClick={onCartClick} />
      <ProductList />
      {/* <ProductCard/> */}
    </>
  );
}

export default App;
