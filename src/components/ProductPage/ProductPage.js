import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../../store/productSlice";
import { addToCart } from "../../store/cartSlice";
import "./ProductPage.css";

const ProductPage = () => {
  //Redux hooks to access state and dispatch actions
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  //Local state for selected editions, product price, and alert display
  const [selectedEditions, setSelectedEditions] = useState({}); // State to track selected editions per product
  const [productPrices, setProductPrices] = useState({}); // State to store adjusted prices per product
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State to store alert message

  // Function to handle adding to cart
  const handleAddToCart = (product) => {
    const edition = selectedEditions[product.id] || "Standard Edition"; // Default to Standard Edition if no edition selected
    const selectPrice = productPrices[product.id] || product.price;
    dispatch(addToCart({ ...product, edition, price: selectPrice }));
    setAlertMessage(`${product.name} (${edition}) was added to the cart`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  // Function to handle edition selection
  const handleSelectEdition = (productId, edition) => {
    setSelectedEditions((prevEditions) => ({
      ...prevEditions,
      [productId]: edition,
    }));

    const basePrice = products.find((p) => p.id === productId).price;
    const adjustment = getAdjustmentForEdition(edition); // Getting price adjustment based on selected edition
    const newPrice = basePrice + adjustment; // Calculating new price

    setProductPrices((prevPrices) => ({
      ...prevPrices,
      [productId]: newPrice,
    }));
  };

  // Function to get price adjustment based on edition
  const getAdjustmentForEdition = (edition) => {
    switch (edition) {
      case "Standard Edition":
        return 0;
      case "Deluxe Edition":
        return 200;
      case "Ultimate Edition":
        return 500;
      default:
        return 0;
    }
  };

  return (
    <div className="container mt-3">
      <h1>Products</h1>
      {showAlert && ( // Displaying alert if showAlert is true
        <div className="alert">{alertMessage}</div>
      )}
      <div className="product-container">
        <div className="row">
          {products.map(
            (
              product // Mapping through products to render each product card
            ) => (
              <div className="col-sm-4 mb-3" key={product.id}>
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img"
                    alt={product.name}
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">Genre: {product.genre}</p>
                    <p className="card-text">
                      R
                      {productPrices[product.id] // Displaying adjusted price if available, otherwise original price
                        ? productPrices[product.id].toFixed(2)
                        : product.price.toFixed(2)}
                    </p>
                    <select
                      value={selectedEditions[product.id] || "Standard Edition"} // Controlled select for edition
                      onChange={(e) =>
                        handleSelectEdition(product.id, e.target.value)
                      }
                    >
                      <option value="Standard Edition">Standard Edition</option>
                      <option value="Deluxe Edition">Deluxe Edition</option>
                      <option value="Ultimate Edition">Ultimate Edition</option>
                    </select>
                    <button
                      className="btn mt-2 buy-btn"
                      onClick={() => handleAddToCart(product)} // Click handler to add product to cart
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
