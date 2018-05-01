window.onload = function() {
    splashEntrance1();
    setTimeout(function() {splashExit();},500);
    setTimeout(function() {document.getElementById("wrapper").style.display = "flex";},500);
    setTimeout(function() {heroLoad();}, 800);
    setTimeout(function() {document.getElementById("splash").style.display = "none"}, 1000);
    
    /*setTimeout(function() {splashExit();},1000);   
    setTimeout(function() {heroLoad();}, 1100); 
    setTimeout(function() {document.getElementById("wrapper").style.display = "flex";},1000);
    setTimeout(function() {document.getElementById("splash").style.display = "none"}, 2000);
    */
    
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
    document.getElementById("about").style.opacity = "1";
    document.getElementById("about").style.transitionDelay = "400ms";
    document.getElementById("skills").style.opacity = "1";
    document.getElementById("skills").style.transitionDelay = "600ms";
    document.getElementById("works").style.opacity = "1";
    document.getElementById("works").style.transitionDelay = "800ms";
    document.getElementById("contact").style.opacity = "1";
    document.getElementById("contact").style.transitionDelay = "1000ms"
}

