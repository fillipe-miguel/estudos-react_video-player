import React, { useEffect } from "react";

// Redux stuffs
import { useDispatch, useSelector } from "react-redux";

// Actions do redux
import { manualVolumeUpdate, toggleMute } from "../../../actions/videoActions";

const VolumeRange = (props) => {
    // Capturando o state do video
    const stateVideo = useSelector((state) => state);

    // Chamando o hook que me permite usar as funcões dos actions
    const dispatch = useDispatch();

    // UseEffect para modificar o volume
    useEffect(() => {
        // Dividido por 100 pq o range da props volume é de 0 a 1
        props.videoPlayerRef.current.volume = stateVideo.volume / 100;
    }, [stateVideo.volume]);

    // UseEffect para mutar o video
    useEffect(() => {
        stateVideo.muted
            ? (props.videoPlayerRef.current.muted = true)
            : (props.videoPlayerRef.current.muted = false);
    }, [stateVideo.muted]);

    function handleManualVolumeUpdate(e) {
        let currentUpdateVolume = e.target.value;
        dispatch(manualVolumeUpdate(currentUpdateVolume));
    }

    return (
        <div className="video-controls-buttons-left-volume-container">
            <button
                onClick={() => {
                    dispatch(toggleMute());
                }}
                className="video-controls-button button-volume"
            >
                {stateVideo.muted ? (
                    <img
                        src="\assets\icons\volume_muted_icon.svg"
                        alt="volume muted"
                    />
                ) : (
                    <img src="\assets\icons\volume_icon.svg" alt="volume" />
                )}
            </button>
            <div className="volume-range-wrap">
                <input
                    className="input-range volume-range"
                    type="range"
                    value={stateVideo.volume}
                    min="0"
                    max="100"
                    onChange={handleManualVolumeUpdate}
                ></input>
            </div>
        </div>
    );
};

export default VolumeRange;
