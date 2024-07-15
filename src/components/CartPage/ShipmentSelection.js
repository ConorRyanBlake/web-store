import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShipmentOptions,
  setShipmentMethod,
  selectShipmentMethod,
} from "../../store/cartSlice";
import HelpModal from "../HelpModal/HelpModal";
import "./CartPage.css";

const ShipmentSelection = () => {
  // Select shipment options and the selected shipment method from the Redux store
  const shipmentOptions = useSelector(selectShipmentOptions);
  const selectedMethod = useSelector(selectShipmentMethod);
  const dispatch = useDispatch();

   // Local state to control the visibility of the help modal
  const [showHelp, setShowHelp] = useState(false);

 // Function to handle changes in shipment method selection
  const handleShipmentChange = (event) => {
    dispatch(setShipmentMethod(event.target.value));
  };

  // Function to toggle the visibility of the help modal
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="shipment-selection">
      <h2>Select Shipment Method</h2>
      <select value={selectedMethod} onChange={handleShipmentChange}>
        <option value="">Select...</option>
        {shipmentOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name} - R{option.cost}
          </option>
        ))}
      </select>
      <button onClick={toggleHelp}>Help</button>
      {showHelp && <HelpModal onClose={toggleHelp} options={shipmentOptions} />}
    </div>
  );
};

export default ShipmentSelection;
