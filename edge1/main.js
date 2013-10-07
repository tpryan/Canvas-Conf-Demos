/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, document, AdobeEdge */
var comp;
AdobeEdge.bootstrapCallback(function (compId) {
    comp = AdobeEdge.getComposition(compId).getStage();
});

function vc_stop() {
    comp.stop();
}
function vc_play() {
    comp.play();
}
        


document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var link = document.querySelector("#toggleSpeakers");

       
    link.addEventListener('click', function () {
        vc_play();
        
        
    }, false);
    
});