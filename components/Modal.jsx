// components/Modal.js
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'unset'; // Enable scrolling when modal is closed
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
          <button type="button" onClick={onClose} className="ml-2 px-4 py-2 bg-gray-300 rounded">Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
