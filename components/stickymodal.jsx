// components/StickyContactModal.js
"use client";

import { useEffect, useState } from "react";

const StickyContactModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down
    if (window.scrollY > 200) {
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
              display: block;
            }

            @media (max-width: 576px) {
              .modal-text-hidden {
                display: none;
              }
              .sticky-contact-modal {
                background-color: transparent;
                border: none;
                padding: 0;
                box-shadow: none;
                width: 70%;
                max-width: 250px;
              }
              .modal-buttons {
                justify-content: center;
              }
            }

            .sticky-contact-modal {
              position: fixed;
              bottom: 20px;
              right: 20px;
              background-color: white;
              border: 1px solid #ccc;
              padding: 10px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              z-index: 1000;
              width: 70%;
              max-width: 400px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-buttons {
              display: flex;
              gap: 10px;
            }

            .btn-call,
            .btn-enquire {
              width: 120px; /* Slightly wider */
              background-color: #28a745;
              color: white;
              border: none;
              padding: 10px 15px; /* Adjusted padding */
              cursor: pointer;
              border-radius: 25px; /* Rounded corners */
              font-size: 16px; /* Make text slightly larger */
              transition: background-color 0.3s ease, transform 0.2s ease;
            }

            .btn-enquire {
              background-color: #007bff;
            }

            .btn-call:hover,
            .btn-enquire:hover {
              transform: translateY(-2px); /* Slight lift effect */
            }

            .btn-call:hover {
              background-color: #218838;
            }

            .btn-enquire:hover {
              background-color: #0056b3;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default StickyContactModal;
