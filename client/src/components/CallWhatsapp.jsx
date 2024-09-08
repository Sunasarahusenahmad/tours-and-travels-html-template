import React from "react";

const CallWhatsapp = () => {
  return (
    <div className="row d-flex justify-content-between">
      <div id="call-now">
        <a
          href="tel:+1234567890"
          target="_blank"
          className="d-flex align-items-center"
          rel="noopener noreferrer"
        >
          <i className="fa fa-phone"></i>
        </a>
      </div>
      <div id="whatsapp-now">
        <a
          href="tel:+1234567890"
          target="_blank"
          className="d-flex align-items-center"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp text-light"></i>
        </a>
      </div>
    </div>
  );
};

export default CallWhatsapp;
