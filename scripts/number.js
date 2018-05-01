window.onload = function() {
    splashEntrance1();
    setTimeout(function() {splashExit();},500);
    setTimeout(function() {document.getElementById("wrapper").style.display = "flex";},500);
    setTimeout(function() {document.getElementById("splash").style.display = "none";}, 1000);

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


function enterSubmit(e){
    if (e.keyCode == 13){
        checkGuess();
        return false;
    }
}




var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;


function checkGuess(){
    console.log(randomNumber);
    var guesses = document.getElementById("guesses");
    var message = document.getElementById("message");

    var submit = document.getElementById("submit");
    var form = document.getElementById("form");
    var userGuess = Number(form.value);

    guessCount++;
    
    console.log(userGuess);
    guesses.textContent = "Guess Count: " + guessCount;
    if (userGuess > 100 || userGuess < 1){
        message.textContent = "Please guess between 1 to 100";
        message.style.backgroundColor = "white";
        message.style.color = "black";
    }else if(userGuess <= 100 && userGuess >= 1){
        if (userGuess === randomNumber) {
            message.textContent = "You got it correct!";
            message.style.backgroundColor = "green";
            message.style.color = "white";
            setGameOver();
           
        }else if ((userGuess < randomNumber + 11) && (userGuess + 11 > randomNumber)) {
            console.log("within 10");
            if (userGuess < randomNumber) {
                message.textContent = "Wrong...Guess Higher";
                message.style.backgroundColor = "#8F2C2C";
                message.style.color = "white";
                
            }else{
                message.textContent = "Wrong...Guess Lower";
                message.style.backgroundColor = "#8F2C2C";
                message.style.color = "white";
            }
        }else if (userGuess < randomNumber -30) {
                console.log("out of 30");
                message.textContent = "Wrong...Guess Higher";
                message.style.backgroundColor = "#4C5291";
                message.style.color= "white";
        }else if (userGuess > randomNumber +30) {
                message.textContent = "Wrong...Guess Lower";
                message.style.backgroundColor = "#4C5291";
                message.style.color = "white";
        }else if (userGuess < randomNumber){
            console.log("base");
            message.style.backgroundColor = "white";
            message.style.color = "black";
            message.textContent = "Wrong...Guess Higher";
        }else if (userGuess > randomNumber){
            console.log("base 10");
            message.style.backgroundColor = "white";
            message.style.color = "black";
            message.textContent = "Wrong...Guess Lower";
        }
    }
    

    form.value = " ";
    form.focus();
}





function setGameOver() {
    var form = document.getElementById("form");
    var submit = document.getElementById("submit");
    form.disabled = true;
    submit.disabled = true;
    document.getElementById("restart").style.display = "block";
    document.getElementById("restart").style.opacity = "1";

}

function reset() {
    var form = document.getElementById("form");
    var submit = document.getElementById("submit");
    var restart = document.getElementById("restart");
    var message = document.getElementById("message");
    message.textContent = " ";
    message.style.backgroundColor = "white";
    restart.style.display = "none";
    restart.style.opacity = "0";
    guessCount = 0;
    console.log(guessCount);
    document.getElementById("guesses").textContent = "Guess Count: " + guessCount;
    console.log(message.textContent);
    console.log("Guess Count: " + guessCount);
    form.disabled = false;
    submit.disabled = false;
    form.value = " ";
    form.focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
