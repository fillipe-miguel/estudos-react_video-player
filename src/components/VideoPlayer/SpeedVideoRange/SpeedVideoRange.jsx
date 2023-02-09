import React, { useEffect } from "react";

// Redux stuffs
import { useDispatch, useSelector } from "react-redux";

// Actions do redux
import { manualSpeedUpdate } from "../../../actions/videoActions";

const SpeedVideoRange = (props) => {
    // Capturando o state do video
    const stateVideo = useSelector((state) => state);

    // Chamando o hook que me permite usar as funcões dos actions
    const dispatch = useDispatch();

    // UseEffect para atualizar a velocidade do video
    useEffect(() => {
        props.videoPlayerRef.current.playbackRate = stateVideo.speed;
    }, [stateVideo.speed]);

    function handleChangeSpeedVideo(e) {
        const currentSpeedUpdate = e.target.value / 100;
        dispatch(manualSpeedUpdate(currentSpeedUpdate));
    }

    return (
        <div className="video-controls-buttons-right-speed-container">
            <div className="speed-range-wrap">
                <input
                    className="input-range speed-range"
                    type="range"
                    min="10"
                    max="200"
                    value={stateVideo.speed * 100}
                    onChange={handleChangeSpeedVideo}
                ></input>
            </div>
            <div
                className="video-controls-button speed-button"
                // Para resetar a velocidade do video com o click
                onClick={() => {
                    dispatch(manualSpeedUpdate(1));
                }}
            >
                <p>{stateVideo.speed}X</p>
                {/* <img src="\assets\icons\volume_icon.svg" alt="volume" /> */}
            </div>
        </div>
    );
};

export default SpeedVideoRange;
