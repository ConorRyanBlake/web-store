import React from "react";
import "./HelpModal.css";

const HelpModal = ({ onClose, options }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Shipping Options</h2>
        <ul>
          {options.map(
            (
              option //Mapping through options to render each shipping option
            ) => (
              <li key={option.id}>
                <strong>{option.name}</strong>: R{option.cost}{" "}
                {/* Displaying option name and cost */}
                <p>
                  {option.name === "Standard Shipping"
                    ? "Delivered within 5-7 business days."
                    : "Delivered within 1-2 business days."}{" "}
                  {/* Conditional rendering based on option name */}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default HelpModal;
