import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="ok"
          >
            olen täysi-ikäinen
          </button>
          
          <div className="footer">
          <button
            onClick={() => {
                setOpenModal(true);
            }}
            id="cancelBtn"
          >
           En ole täysi-ikäinen
          </button>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Modal;