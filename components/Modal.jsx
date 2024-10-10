// Modal.js
import React from "react";

const Modal = ({ isVisible, closeModal, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
