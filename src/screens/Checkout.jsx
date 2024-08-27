import CartRecap from "../components/CartRecap";
import PersonalData from "../components/PersonalData";

const Checkout = () => {
  return (
    <div className="w-full bg-amber-200 h-screen">
      <div className="mx-auto w-8/12 bg-white rounded-lg p-4">
        <PersonalData />
        <CartRecap />
      </div>
    </div>
  );
};

export default Checkout;
