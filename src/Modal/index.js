import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal(props) {
  const closeModal=(e)=> {
    if (e.target.className === "ModalBackground"){
      props.setOpenModal(!props.openModal);
    };
  };
  return ReactDOM.createPortal(
    <div className="ModalBackground" onClick={closeModal}>
      {props.children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
