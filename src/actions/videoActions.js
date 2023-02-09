export function togglePlay() {
    return { type: "TOGGLE_PLAY" };
}

export function toggleMute() {
    return { type: "TOGGLE_MUTE" };
}

export function timeUpdate(currentPercentage) {
    return { type: "TIME_UPDATE", payload: currentPercentage };
}

export function manualTimeUpdate(currentTimePercentage) {
    return { type: "MANUAL_TIME_UPDATE", payload: currentTimePercentage };
}

export function manualVolumeUpdate(currentVolumeUpdate) {
    return { type: "MANUAL_VOLUME_UPDATE", payload: currentVolumeUpdate };
}

export function restartVideo() {
    return { type: "RESTART" };
}

export function manualSpeedUpdate(currentSpeedUpdate) {
    return { type: "MANUAL_SPEED_UPDATE", payload: currentSpeedUpdate };
}
