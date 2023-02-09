export default (
    state = {
        playing: false,
        volume: 50,
        muted: false,
        percentage: 0,
        speed: 1,
    },
    action
) => {
    switch (action.type) {
        case "TOGGLE_PLAY":
            return { ...state, playing: !state.playing };

        case "TOGGLE_MUTE":
            return { ...state, muted: !state.muted };

        case "TIME_UPDATE":
            return { ...state, percentage: action.payload };

        case "MANUAL_TIME_UPDATE":
            return {
                ...state,
                percentage: action.payload,
            };

        case "RESTART":
            return {
                ...state,
                percentage: 0,
                playing: false,
            };

        case "MANUAL_VOLUME_UPDATE":
            return { ...state, volume: action.payload };

        case "MANUAL_SPEED_UPDATE":
            return { ...state, speed: action.payload };

        default:
            return state;
    }
};
