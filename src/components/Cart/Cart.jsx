import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.qunatity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1 className="cart__h1">Products in your cart</h1>
      {products?.map((item) => (
        <div className="cart__item" key={item.id}>
          <img className="cart__item-img" src={item.img} alt={item.title} />
          <div className="cart__item-details">
            <h2 className="cart__h2">{item.title}</h2>
            <p className="cart__p">{item.desc?.substring(0, 100)}</p>
            <div className="cart__price-wrapper">
              {" "}
              {item.qunatity} x ${item.price}
            </div>
          </div>

          <DeleteOutlinedIcon
            className="cart__delete-icon"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="cart__summary">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="cart__checkout-btn">PROCEED TO CHECKOUT</button>
      <span
        className="cart__reset"
        onClick={() => {
          dispatch(resetCart());
        }}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
