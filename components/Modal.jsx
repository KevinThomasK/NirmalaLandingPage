"use client";
import React, { useState } from "react";
import ContactModal from "./ContactModal"; // Import your ContactModal

const FullScreenModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="custom-modal-backdrop" onClick={onClose}>
      <div
        className="custom-modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <div className="custom-modal-content">
          <div className="custom-modal-header">
            <button
              type="button"
              className="custom-close-btn"
              aria-label="Close"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="custom-modal-body">
            <ContactModal />
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated ModalTrigger to take isOpen and onClose props
export const ModalTrigger = ({ isOpen, onClose }) => {
  return (
    <>
      {/* <button
        style={{
          backgroundColor: "#1961FA",
          borderColor: "#1961FA",
          color: "#fff", // White text color
          padding: "10px 20px", // Increased padding
          fontSize: "1rem", // Font size
          borderRadius: "5px", // Rounded corners
          transition: "background-color 0.3s", // Smooth transition for hover effect
        }}
        onClick={onClose} // Close the modal when the button is clicked
      >
        Know Admission Procedures
      </button> */}

      <FullScreenModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
