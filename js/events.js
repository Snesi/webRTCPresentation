function toggleMedia(event) {
    console.log(event.currentSlide);
    if (event.currentSlide.id === "mirror") {
        showMirror(event.currentSlide);
    } else if (event.currentSlide.id === "microphone") {
        showAudio(event.currentSlide);
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
}