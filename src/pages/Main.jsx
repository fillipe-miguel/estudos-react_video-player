import React, { useState } from "react";

// Redux stuffs
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import videoReducer from "../reducers/videoReducer";

// Components
import Header from "../components/Header/Header";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

// Styles
import "./Main.css";

const store = createStore(videoReducer);

function Main() {
    const [urlVideo, setUrlVideo] = useState("/assets/videos/video_example_football.mp4");

    return (
        <Provider store={store}>
            <Header />
            <div className="main">
                <VideoPlayer urlVideo={urlVideo} />
                <div className="change-video-container">
                    <h3>MUDE O VIDEO DE VISUALIAÇÃO</h3>
                    <div className="buttons-change-video-wrapper">
                        <img
                            className="change-video-button"
                            src="/assets/images/covers/coverVideo_football.png"
                            alt="FootBall Video"
                            onClick={() => {
                                setUrlVideo(
                                    "/assets/videos/video_example_football.mp4"
                                );
                            }}
                        />
                        <img
                            className="change-video-button"
                            src="/assets/images/covers/coverVideo_storm.png"
                            alt="Storm Video"
                            onClick={() => {
                                setUrlVideo(
                                    "/assets/videos/video_example_storm.mp4"
                                );
                            }}
                        />
                        <img
                            className="change-video-button"
                            src="/assets/images/covers/coverVideo_musicBox.png"
                            alt="video 3"
                            onClick={() => {
                                setUrlVideo(
                                    "/assets/videos/video_example_musicBox.mp4"
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Main;
