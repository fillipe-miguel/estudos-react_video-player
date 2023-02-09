import React, { useEffect } from "react";

// Redux stuffs
import { useDispatch, useSelector } from "react-redux";

// Actions do redux
import { restartVideo, togglePlay } from "../../../actions/videoActions";

const ButtonPlayPause = (props) => {
    // Capturando o state do video
    const stateVideo = useSelector((state) => state);

    // Chamando o hook que me permite usar as funcões dos actions
    const dispatch = useDispatch();

    // UseEffect para reproduzir o video
    useEffect(() => {
        stateVideo.playing
            ? props.videoPlayerRef.current.play()
            : props.videoPlayerRef.current.pause();
    }, [stateVideo.playing]);

    if (stateVideo.percentage == 100) {
        return (
            // BOTÃO DE RESTART
            <button className="video-controls-button">
                <img
                    src="/assets/icons/restart_icon.svg"
                    alt="restart button"
                    onClick={() => {
                        dispatch(restartVideo());
                        // GAMBIARRA PQ NAO REPRODUZ RAPIDO
                        setTimeout(() => {
                            dispatch(togglePlay());
                        }, 50);
                    }}
                />
            </button>
        );
    }

    return (
        <button
            className="video-controls-button"
            onClick={() => {
                dispatch(togglePlay());
            }}
        >
            {stateVideo.playing ? (
                <img src="/assets/icons/pause_icon.svg" alt="pause button" />
            ) : (
                <img src="/assets/icons/play_icon.svg" alt="play button" />
            )}
        </button>
    );
};

export default ButtonPlayPause;
