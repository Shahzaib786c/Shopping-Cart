import CartIcon from "./CartIcon";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Quick Shop</h1>
      <button className="cart-btn" onClick={onCartClick} type="button">
        <CartIcon />
        {cartCount > 0 && <span className="badge">{cartCount}</span>}
      </button>
    </nav>
  );
};

export default Navbar;
