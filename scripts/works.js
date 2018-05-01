window.onload = function() {
    splashEntrance1();
    setTimeout(function() {splashExit();},500);
    setTimeout(function() {document.getElementById("wrapper").style.display = "flex";},500);
    setTimeout(function() {heroLoad();}, 800);
    setTimeout(function() {document.getElementById("splash").style.display = "none"}, 1000);
    
    
}

function splashEntrance1() {
    console.log("load event detected");
    var x = this.document.getElementById("splash");
    x.style.opacity = "1";
    x.style.transition = "1s ease-in-out";
    
}

function splashExit() {
    var x = this.document.getElementById("splash");
    x.style.opacity = "0";
    x.style.transition = "1s ease-out";
}

function heroLoad() {
    document.getElementById("desktopHeroImage").style.opacity = "1";
    document.getElementById("desktopHeroImage").style.transition = "1s ease-in-out";
    document.getElementById("number").style.opacity = "1";
    document.getElementById("number").style.transitionDelay = "400ms";
    document.getElementById("hangman").style.opacity = "1";
    document.getElementById("hangman").style.transitionDelay = "600ms";
    document.getElementById("fishtank").style.opacity = "1";
    document.getElementById("fishtank").style.transitionDelay = "800ms";
    document.getElementById("animation").style.opacity = "1";
    document.getElementById("animation").style.transitionDelay = "1000ms";
}





/*function scroll() {
    console.log("scrolled");
    document.getElementById("number").style.opacity = "1";
    document.getElementById("number").style.transitionDelay = "200ms";
    document.getElementById("hangman").style.opacity = "1";
    document.getElementById("hangman").style.transitionDelay = "400ms";
    document.getElementById("fishtank").style.opacity = "1";
    document.getElementById("fishtank").style.transitionDelay = "600ms";
    document.getElementById("animation").style.opacity = "1";
    document.getElementById("animation").style.transitionDelay = "800ms";
}*/


/*function hoverDescription(hover_id) {
    var x = document.getElementById(hover_id);
    
    var x2 = document.getElementById(hover_id + "Title");
    var x3 = document.getElementById(hover_id + "Description");
    var y = "url(../assets/" + hover_id + "Hover.png)";
    x.style.backgroundImage = y;
    x.style.transitionDelay = "0ms";
    x2.style.visibility = "hidden";
    x2.style.transition = "visibility 700ms ease-out 1000ms, opacity 300ms";
    x2.style.opacity = "0";
    
    
}

function hoverLeave(hover_id) {
    var x = document.getElementById(hover_id);
    let y = "url(../assets/" + hover_id + ".png";    
    x.style.backgroundImage = y
    var x2 = document.getElementById(hover_id + "Title");
    x2.style.visibility = "visible";
    x2.style.transition = "visibility 0s ease-in 1000ms, opacity 300ms";
    x2.style.opacity = "1";
    
}*/