import { useSelector } from "react-redux";
import CartRecapLine from "./CartRecapLine";

const CartRecap = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <h3 className="text-2xl font-bold text-Red">
        Your Cart ({cartItems.length || 0})
      </h3>
      {cartItems.map((product) => (
        <CartRecapLine key={product.name} product={product} />
      ))}
    </div>
  );
};

export default CartRecap;
