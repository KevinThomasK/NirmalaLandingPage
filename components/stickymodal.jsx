// components/StickyContactModal.js
"use client";

import { useEffect, useState } from "react";

const StickyContactModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down
    if (window.scrollY > 200) {
      // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="sticky-contact-modal">
          <div className="modal-content">
            <div className="modal-text">
              <p className="modal-text-hidden">
                Need Free Counselling? Contact us now!
              </p>
            </div>
            <div className="modal-buttons">
              <button className="btn-call">Call Now</button>
              <button className="btn-enquire">Enquire Now</button>
            </div>
          </div>
          <style jsx>{`
            .modal-text-hidden {
              /* Default visibility */
              display: block;
            }

            @media (max-width: 576px) {
              .modal-text-hidden {
                /* Hide text on small screens */
                display: none;
              }
            }

            .sticky-contact-modal {
              position: fixed;
              bottom: 20px;
              right: 20px;
              background-color: white;
              border: 1px solid #ccc;
              padding: 15px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              z-index: 1000; /* Ensure it stays above other content */
            }

            .modal-buttons {
              display: flex;
              gap: 10px; /* Space between buttons */
            }

            .btn-call {
              background-color: #28a745; /* Green color for "Call Now" button */
              color: white;
              border: none;
              padding: 10px 20px;
              cursor: pointer;
              transition: background-color 0.3s ease; /* Smooth transition */
            }

            .btn-enquire {
              background-color: #007bff; /* Blue color for "Enquire Now" button */
              color: white;
              border: none;
              padding: 10px 20px;
              cursor: pointer;
              transition: background-color 0.3s ease; /* Smooth transition */
            }

            .btn-call:hover {
              background-color: #218838; /* Darker shade for "Call Now" button hover */
            }

            .btn-enquire:hover {
              background-color: #0056b3; /* Darker shade for "Enquire Now" button hover */
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default StickyContactModal;
