
function navInteraction() {
    sideNavAnimation("link1", "0s", "250ms");
    sideNavAnimation("link2", "100ms", "200ms");
    sideNavAnimation("link3", "150ms", "150ms");
    sideNavAnimation("link4", "200ms", "100ms");
    sideNavAnimation("link5", "250ms", "0s");
}


function exitNav(){
    hideNav("link1", "250ms");
    hideNav("link2", "200ms");
    hideNav("link3", "150ms");
    hideNav("link4", "100ms");
    hideNav("link5", "0s");
    document.getElementById("SideNav").style.height = "0px";
    
}

function sideNavAnimation(name, delay, delay2) {
    var x = document.getElementById(name);
    if (x.style.visibility === "hidden"){
        x.style.visibility = "visible";
        x.style.transition = "visibility 0s ease-in 1000ms, opacity 300ms";
        x.style.opacity = "1";
        x.style.transitionDelay = delay;
        document.getElementById("SideNav").style.height = "285px";
    }else{
        x.style.visibility = "hidden";
        x.style.transition = "visibility 700ms ease-out 1000ms, opacity 300ms";
        x.style.opacity = "0";
        x.style.transitionDelay = delay2;
        document.getElementById("SideNav").style.height = "0";
        
    }
}

function hideNav(name, delay) {
    var x = document.getElementById(name);
    x.style.visibility = "hidden";
    x.style.transition = "visibility 700ms ease-out 1000ms, opacity 300ms";
    x.style.opacity = "0";
    x.style.transitionDelay = delay;    
}

function navHover(hover_id) {
    var x = document.getElementById(hover_id);
    x.style.backgroundColor = "rgba(255,255,255,0.8)";
    x.style.transition = "ease-in-out 300ms";
    console.log(hover_id);
}

function navHoverLeave(hover_id) {
    var x = document.getElementById(hover_id);
    x.style.backgroundColor = "transparent";
    x.style.transition = "ease-in-out 300ms";
}   