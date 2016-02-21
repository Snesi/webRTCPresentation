function showMirror(el) {
    getUserMedia({ video: true, audio: false }, function (err, stream) {
        var videoMirror = document.querySelector("#mirror-success");
        if (err) {
            videoMirror.style.display = "none";
            var failH2 = document.querySelector("section#mirror>h2");
            failH2.innerText = "Mr. B: No te veo...";
        } else {
            var videoTracks = stream.getVideoTracks();
            console.log('Using video device: ' + videoTracks[0].label);
            stream.onended = function () {
                console.log('Stream ended');
            };
            window.currentVideoTrack = videoTracks[0];
            window.stream = stream; // make variable available to browser console
            videoMirror.autoplay = true;
            // videoMirror.classList = "stretch";
            videoMirror.srcObject = stream;
        }
    })
}