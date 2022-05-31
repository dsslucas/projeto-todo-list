import React from "react";

export default props => {
    //Caso não apareça
    if (props.hide) {
        return null
    }
    else {
        return (
            <button
                className={'btn btn-' + props.style}
                onClick={props.onClick}
            >
                <i className={'fa fa-' + props.icon}></i>
            </button>
        )
    }
}
