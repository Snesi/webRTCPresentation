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


function initWebRTC() {
    var broadcaster = PHONE({
        number        : "BROADCASTER",  // If you want more than one broadcaster, use unique ids
        publish_key   : 'pub-c-f9b642ff-c435-4519-b121-78d72a7b4c5e',
        subscribe_key : 'sub-c-3e8402ec-d9a1-11e5-8758-02ee2ddab7fe',
        ssl           : true
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Wait for New Viewers to Join
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    broadcaster.receive(function(new_viewer){
        new_viewer.connected(function(viewer){
            console.log("New viewer joined!", viewer);
        }); // new viewer joined
        new_viewer.ended(function(viewer){
            console.log("Viewer left!", viewer);
        });  // viewer left
        //new_viewer.hangup();  // if you want to block the viewer
    });
}

