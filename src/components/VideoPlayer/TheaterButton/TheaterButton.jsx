import React from "react";

const TheaterButton = (props) => {
    return (
        <button
            className="video-controls-button"
            onClick={props.toggleTheaterMode}
        >
            <img
                src="/assets/icons/theater_icon.svg"
                alt="Theater Mode Button"
            />
        </button>
    );
};

export default TheaterButton;
