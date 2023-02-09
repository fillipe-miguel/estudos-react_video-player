import React from "react";

const FullScreenButton = (props) => {
    return (
        <button
            className="video-controls-button"
            onClick={props.toggleFullScreenMode}
        >
            <img
                src="/assets/icons/theater_icon.svg"
                alt="Theater Mode Button"
            />
        </button>
    );
};

export default FullScreenButton;
