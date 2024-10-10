"use client"; // Required for managing state in client-side components

import { createContext, useContext, useState } from "react";

// Create the modal context
const ModalContext = createContext();

// Modal provider to manage the modal state
export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to access modal state and functions
export const useModal = () => useContext(ModalContext);
