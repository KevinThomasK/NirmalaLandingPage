"use client"; // This is crucial to mark the component as a client component

import { useState } from "react";
import Modal from "./Modal"; // Modal component from the previous example
import contactModal from "./contactModal";

const ClientModalHandler = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {/* Buttons to trigger the modal */}
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={openModal}
      >
        Open Contact Form
      </button>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={openModal}
      >
        Open Contact Form (Another)
      </button>

      {/* Modal that wraps the ContactForm */}
      <Modal isVisible={isModalVisible} closeModal={closeModal}>
        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
        <contactModal />
      </Modal>
    </div>
  );
};

export default ClientModalHandler;
