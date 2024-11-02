import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from "./store";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);

  const handleApplyCoupon = () => {
    switch (couponCode) {
      case 'DIWALI10':
        setCouponDiscountPercentage(10);
        setMessage("10% coupon applied successfully");
        break;
      case 'DIWALI20':
        setCouponDiscountPercentage(20);
        setMessage("20% coupon applied successfully");
        break;
      case 'DIWALI30':
        setCouponDiscountPercentage(30);
        setMessage("30% coupon applied successfully");
        break;
      default:
        setCouponDiscountPercentage(0);
        setMessage("Invalid coupon code");
    }
  };

  const discountedPrice = (total * discount) / 100;
  const couponDiscountAmount = (total * couponDiscountPercentage) / 100;
  const netAmount = total - discountedPrice - couponDiscountAmount;

  return (
    <>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.name}>
              {item.name} - Price: ${item.price.toFixed(2)} - Quantity: {item.quantity}
              <button onClick={() => dispatch(incrementQuantity({ name: item.name }))}>+</button>
              <button onClick={() => dispatch(decrementQuantity({ name: item.name }))}>-</button>
              <button style={{ color: "blue" }} onClick={() => dispatch(removeFromCart({ name: item.name }))}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <input 
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={handleApplyCoupon}>Apply Coupon</button>
      <p>{message}</p>

      <button onClick={() => setDiscount(10)}>Apply 10% Discount</button>
      <button onClick={() => setDiscount(20)}>Apply 20% Discount</button>
      <button onClick={() => setDiscount(30)}>Apply 30% Discount</button>

      <h3>Total: ${total.toFixed(2)}</h3>
      {discount > 0 && <h3>Discounted Price ({discount}% off): -${discountedPrice.toFixed(2)}</h3>}
      {couponDiscountPercentage > 0 && <h3>Coupon Discount ({couponDiscountPercentage}% off): -${couponDiscountAmount.toFixed(2)}</h3>}
      <h3>Net Amount: ${netAmount.toFixed(2)}</h3>
    </>
  );
};

export default Cart;
