import React from "react";

// Redux stuffs
import { useDispatch, useSelector } from "react-redux";

// Actions do redux
import { manualTimeUpdate, timeUpdate } from "../../../actions/videoActions";

const TimeController = (props) => {
    // Capturando o state do video
    const stateVideo = useSelector((state) => state);

    // Chamando o hook que me permite usar as funcões dos actions
    const dispatch = useDispatch();

    function handleManualTimeUpdate(e) {
        // Pegando o valor em %
        const currentTimePercentage = e.target.value;

        // Passando o valor par o video em tempo de video
        props.videoPlayerRef.current.currentTime =
            (props.videoPlayerRef.current.duration / 100) *
            currentTimePercentage;

        // Salvando o estado em porcentage
        dispatch(manualTimeUpdate(currentTimePercentage));
    }

    return (
        <div className="video-controls-time-container">
            <input
                className="video-controls-time-range input-range"
                value={stateVideo.percentage}
                onChange={handleManualTimeUpdate}
                type="range"
                min="0"
                max="100"
            ></input>
        </div>
    );
};

export default TimeController;
