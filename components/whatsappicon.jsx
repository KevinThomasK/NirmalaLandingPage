// components/WhatsappIcon.js

"use client"; // This line makes it a client component

import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} />
      </a>
      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 120px;
          right: 20px;
          background-color: #25d366; /* WhatsApp green */
          border-radius: 50%;
          padding: 15px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 1000; /* Ensure it stays above other content */
        }
        .whatsapp-icon a {
          color: white; /* Icon color */
        }
      `}</style>
    </div>
  );
};

export default WhatsappIcon;
