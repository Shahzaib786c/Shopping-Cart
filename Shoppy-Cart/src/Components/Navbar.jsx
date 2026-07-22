import CartIcon from "./CartIcon";
const Navbar = (cartCount, onCartClick) => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Quick Shop</h1>
        <button className="Cart-Btn">
          <CartIcon />
          {cartCount}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
