import React from "react";

const FloatingButton = (props) => {
    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red" onClick={props.onClick}>
                <i className="large material-icons">{props.icon}</i>
            </a>
        </div>
    )
}

export default FloatingButton;
