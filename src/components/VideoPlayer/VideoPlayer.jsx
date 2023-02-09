import React, { useRef, useEffect, useState } from "react";

// Redux stuffs
import { useDispatch, useSelector } from "react-redux";

// Biblioteca para deixar o video em fullScreen
import screenfull from "screenfull";

// Actions do redux
import {
    restartVideo,
    timeUpdate,
    togglePlay,
} from "../../actions/videoActions";

// Styles
import "./VideoPlayer.css";

// Components
import ButtonPlayPause from "./ButtonPlayPause/ButtonPlayPause";
import FullScreenButton from "./FullScreenButton/FullScreenButton";
import SpeedVideoRange from "./SpeedVideoRange/SpeedVideoRange";
import TheaterButton from "./TheaterButton/TheaterButton";
import TimeController from "./TimeController/TimeController";
import VolumeRange from "./VolumeRange/VolumeRange";

function VideoPlayer(props) {
    console.log("Renderizou");
    const [theaterMode, setTheaterMode] = useState(false);

    // Pegando a referencia da tag video para controlar
    const $videoPlayer = useRef({});

    // Pegando a referencia da tag video para controlar
    const $containerVideoPlayer = useRef(null);

    // Chamando o hook que me permite usar as funcões dos actions
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restartVideo());
    }, [props.urlVideo]);

    function handleTimeUpdate() {
        // Transformando o tempo do video em %
        const currentPercentage =
            ($videoPlayer.current.currentTime / $videoPlayer.current.duration) *
            100;

        dispatch(timeUpdate(currentPercentage));
    }

    function toggleTheaterMode() {
        if (screenfull.isFullscreen) {
            return;
        }
        setTheaterMode(!theaterMode);
    }

    function toggleFullScreenMode() {
        // Se estiver no modo teatro sai para nao gerar bugs visuais
        if (theaterMode) {
            toggleTheaterMode();
        }

        if (screenfull.isEnabled) {
            if (screenfull.isFullscreen) {
                screenfull.exit();
            } else {
                screenfull.request($containerVideoPlayer.current);
            }
        }
    }

    return (
        <div
            ref={$containerVideoPlayer}
            className={
                theaterMode ? "video-container theater-mode" : "video-container"
            }
        >
            <div
                className={
                    theaterMode
                        ? "video-player-container theater-mode-video"
                        : "video-player-container"
                }
            >
                <video
                    ref={$videoPlayer}
                    onClick={() => {
                        dispatch(togglePlay());
                    }}
                    onDoubleClick={() => {
                        toggleFullScreenMode();
                    }}
                    onAuxClick={(e) => {
                        e.preventDefault();
                    }}
                    onTimeUpdate={handleTimeUpdate}
                    src={props.urlVideo}
                ></video>
            </div>
            <div className="video-controls">
                <TimeController videoPlayerRef={$videoPlayer} />

                <div className="video-controls-buttons-container">
                    <div className="video-controls-buttons-left">
                        <ButtonPlayPause videoPlayerRef={$videoPlayer} />
                        <VolumeRange videoPlayerRef={$videoPlayer} />
                    </div>
                    <div className="video-controls-buttons-right">
                        <SpeedVideoRange videoPlayerRef={$videoPlayer} />
                        <TheaterButton toggleTheaterMode={toggleTheaterMode} />
                        <FullScreenButton
                            toggleFullScreenMode={toggleFullScreenMode}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
