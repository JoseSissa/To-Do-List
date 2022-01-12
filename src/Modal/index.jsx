import React from "react";
import ReactDom from "react-dom";
import './Modal.css';

function Modal({ children }) {
    return ReactDom.createPortal(
        <section className="ModalBackground">
            <div className="ModalBackground_form">
                { children }
            </div>
        </section>,
        document.getElementById('modal')
    );
};

export { Modal };