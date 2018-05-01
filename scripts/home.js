/*function scroll() {
    console.log("scrolled");
    var x = document.getElementById("subcontent");
    var y = document.getElementById("footer");
    x.style.opacity = "1";
    y.style.opacity = "1";
    
    document.getElementById("about").style.opacity = "1";
    document.getElementById("about").style.transitionDelay = "200ms";
    document.getElementById("skills").style.opacity = "1";
    document.getElementById("skills").style.transitionDelay = "400ms";
    document.getElementById("works").style.opacity = "1";
    document.getElementById("works").style.transitionDelay = "600ms";
    document.getElementById("contact").style.opacity = "1";
    document.getElementById("contact").style.transitionDelay = "800ms";

}*/

function hoverDescription(hover_id) {
    var x = document.getElementById(hover_id);
    var x2 = document.getElementById(hover_id + "Title");
    var x3 = document.getElementById(hover_id + "Description");
    var y = "url(../assets/" + hover_id + "Hover.png)";
    x.style.backgroundImage = y;
    x.style.transitionDelay = "0ms";
    x2.style.visibility = "hidden";
    x2.style.transition = "visibility 700ms ease-out 1000ms, opacity 300ms";
    x2.style.opacity = "0";
    console.log("hovered" + hover_id);
    
    
}

function hoverLeave(hover_id) {
    var x = document.getElementById(hover_id);
    let y = "url(../assets/" + hover_id + ".png";    
    x.style.backgroundImage = y
    var x2 = document.getElementById(hover_id + "Title");
    x2.style.visibility = "visible";
    x2.style.transition = "visibility 0s ease-in 1000ms, opacity 300ms";
    x2.style.opacity = "1";
    
}

function test(){
    console.log("clicked");
}