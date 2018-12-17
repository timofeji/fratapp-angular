import React from "react";
import './Modal.css';

const Modal = (props) => {
    return (
        <div>
            <div className="form-modal">
                <div className="form-modal-content z-depth-3">
                    <div className="form-modal-header">
                        <span className="close" onClick={props.onClose}>&times;</span>
                        <h2>{props.title}</h2>
                    </div>
                    <br></br>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Modal;

