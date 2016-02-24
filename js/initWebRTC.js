var broadcaster;
function initWebRTC() {
    broadcaster = PHONE({
        number        : "BROADCASTER",  // If you want more than one broadcaster, use unique ids
        publish_key   : 'pub-c-f9b642ff-c435-4519-b121-78d72a7b4c5e',
        subscribe_key : 'sub-c-3e8402ec-d9a1-11e5-8758-02ee2ddab7fe',
        ssl           : true,
        media: {video: true}
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Wait for New Viewers to Join
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    broadcaster.receive(function(new_viewer){
        document.getElementById("broadcaster").src = broadcaster.video.src;
        new_viewer.connected(function(viewer){
            console.log("New viewer joined!", viewer);
        }); // new viewer joined
        new_viewer.ended(function(viewer){
            console.log("Viewer left!", viewer);
        });  // viewer left
        //new_viewer.hangup();  // if you want to block the viewer
    });
    
    broadcaster.message(function(session, message) {
        console.log("MESSAGE: ", message);
        console.log("Message sent by", session);
    });
}