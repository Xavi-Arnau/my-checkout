const CartRecapLine = ({ product }) => {
  console.log(product);

  return (
    <div className="flex flex-row items-center">
      <div className="w-1/4">
        <img className="object-cover h-24 w-24" src={product.img} alt="" />
      </div>
      <div className="w-1/4">{product.name}</div>
      <div className="w-1/4 "></div>
    </div>
  );
};

export default CartRecapLine;
