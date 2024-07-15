import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalCost,
  selectShipmentMethod,
  selectShipmentCost,
  clearCart,
} from "../../store/cartSlice";
import ShipmentSelection from "./ShipmentSelection";
import "./CartPage.css";

const CartPage = () => {
  // Selectors to get cart items, total cost, shipment method, and shipment cost from the Redux store
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);
  const shipmentMethod = useSelector(selectShipmentMethod);
  const shipmentCost = useSelector(selectShipmentCost);

  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State to store alert message

  const dispatch = useDispatch();

  //Function for handling checkout logic, clears cart and alerts user
  const handleCheckout = () => {
    if (shipmentMethod) {
      
      setAlertMessage(`Checkout was successful`);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setTimeout(() => dispatch(clearCart()), 3000);
    } else {
      setAlertMessage(`Please select a shipment method before checkout`);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="cart-page">
      <h1> Your Cart </h1>
      <div className="Cart-container">
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-items">
              {showAlert && ( // Displaying alert if showAlert is true
                <div className="alert">{alertMessage}</div>
              )}
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="product">
                    <img src={item.image} alt={item.name} />
                    <div className="product-details">
                      <h3>{item.name}</h3>
                      <p>Edition: {item.edition}</p>
                    </div>
                  </div>
                  <div className="price">R{item.price.toFixed(2)}</div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <h2>Cart Total</h2>
              <p>Cart Subtotal: R{totalCost.toFixed(2)}</p>
              <ShipmentSelection />
              {shipmentMethod && (
                <p>Selected Shipment Method: {shipmentMethod}</p>
              )}
              <p className="total">
                Cart Total: R{(totalCost + shipmentCost).toFixed(2)}{" "}
              </p>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
