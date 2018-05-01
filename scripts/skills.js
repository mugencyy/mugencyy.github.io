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
    document.getElementById("skillsets").style.opacity = "1";
    document.getElementById("skillsets").style.transitionDelay = "200ms";
}

/*function scroll() {
    console.log("scrolled");
    document.getElementById("skillsets").style.opacity = "1";
    document.getElementById("skillsets").style.transitionDelay = "200ms";
    
}*/