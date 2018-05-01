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
    x.style.transition = "0.5s ease-in-out";
    
}

function splashExit() {
    var x = this.document.getElementById("splash");
    x.style.opacity = "0";
    x.style.transition = "0.5s ease-out";
}

function heroLoad() {
    document.getElementById("desktopHeroImage").style.opacity = "1";
    document.getElementById("desktopHeroImage").style.transition = "opacity 0.5s ease-in-out";
    document.getElementById("aboutmeImage").style.opacity = "1";
    document.getElementById("aboutmeImage").style.transitionDelay = "400ms";
    document.getElementById("aboutmeBox").style.opacity = "1";
    document.getElementById("aboutmeBox").style.transitionDelay = "600ms";
    document.getElementById("experiencesImage").style.opacity = "1";
    document.getElementById("experiencesImage").style.transitionDelay = "800ms";
    document.getElementById("experiencesBox").style.opacity = "1";
    document.getElementById("experiencesBox").style.transitionDelay = "1000ms";
    document.getElementById("subcontent").style.backgroundColor = "white";
    document.getElementById("subcontent").style.transition = "background-Color 2s ease-in-out";
}

/*function scroll() {
    console.log("scrolled");
    document.getElementById("aboutmeImage").style.opacity = "1";
    document.getElementById("aboutmeImage").style.transitionDelay = "200ms";
    document.getElementById("aboutmeBox").style.opacity = "1";
    document.getElementById("aboutmeBox").style.transitionDelay = "400ms";
    document.getElementById("experiencesImage").style.opacity = "1";
    document.getElementById("experiencesImage").style.transitionDelay = "600ms";
    document.getElementById("experiencesBox").style.opacity = "1";
    document.getElementById("experiencesBox").style.transitionDelay = "800ms";
}*/