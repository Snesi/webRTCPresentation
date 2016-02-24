function initSlides() {
    var slidesToRemove;
    if (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia) {
        slidesToRemove = document.querySelectorAll(".no-webrtc");
    } else {
        slidesToRemove = document.querySelectorAll(".webrtc");
    }

    for (var i = 0; i < slidesToRemove.length; i++) {
        var slideToRemove = slidesToRemove[i];
        slideToRemove.parentElement.removeChild(slideToRemove);
    }
}

function sendMessage(msg) {
    if(broadcaster) {
        broadcaster.send(msg);
    }
}

