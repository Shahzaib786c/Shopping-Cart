import Modal from "./Modal";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
function CartModal({ cart, onChangeQty, onRemove, onClose }) {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
  });
  return (
    <Modal title="Your Cart" onClose={onClose}>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onChangeQty={onChangeQty}
              onRemove={onRemove}
            />
          ))}
          <h3>Total: ${total}</h3>
          <CheckoutForm cart={cart} total={total} />
        </>
      )}
    </Modal>
  );
}
export default CartModal;
