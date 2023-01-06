
var startButton = document.getElementById("start");

startButton.addEventListener("click", start);

function start(){
    time=60;
    startTimer();
    startQuestions();
    startButton.removeEventListener("click", start);
}

function startTimer(){
    interval= setInterval(function(){
        if(time > 0){
            time--;
            timer.textContent=time;
        } else {
            endGame();
        }
    }, 1000);
}