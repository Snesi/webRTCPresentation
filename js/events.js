function toggleMedia(event) {
    console.log(event.currentSlide);
    if (event.currentSlide.id === "mirror") {
        showMirror(event.currentSlide);
    } else if (event.currentSlide.id === "microphone") {
        showAudio(event.currentSlide);
    } else if (event.currentSlide.id === "big-brother") {
        initWebRTC();
    }
    

    if (typeof currentVideoTrack !== "undefined") {
        currentVideoTrack.stop();
        currentVideoTrack = undefined;
    }
    if (typeof currentAudioTracks !== "undefined") {
        currentAudioTracks.forEach(function (audioTrack) {
            audioTrack.stop();
        });
        currentAudioTracks = undefined;
    }
    if (typeof broadcaster !== "undefined") {
        broadcaster.stop();
        broadcaster = undefined;
    }
}