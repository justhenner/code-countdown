
var startButton = document.getElementById("start");
var questionText = $("#question-text");
var wrongOptionOne = $('#wrongOptionOne');
var wrongOptionTwo = $('#wrongOptionTwo');
var wrongOptionThree = $('#wrongOptionThree');
var rightOptionOne = $('#rightOptionOne');
var allWrong = $(".wrong");
var response = $("#response");

startButton.addEventListener("click", start);
allWrong.on("click", wrongAnswer)
// on all wrong answers on a click we are doing the wrongAnswer function

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

function startQuestions(){
    displayQuestions();
}

function displayQuestions(){
    questionText.text("what is your first question?");
    wrongOptionOne.text("wrong answer one");
    wrongOptionTwo.text("wrong answer two");
    wrongOptionThree.text("wrong answer three");
    rightOptionOne.text("right answer one");
}

function wrongAnswer(){
    // line below is just for reference. not doing anything to the function
    console.log(time)
    newTime = (time -= 5);
    time = newTime;
    response.css("display", "contents");
    // contents sets response div visible 
    response.text("Wrong!");

    // WRONG function
    // a wrong answer is selected
    // a wrong answer alert is displayed
    // time remaining is decreased by x when a wrong answer is clicked

    // RIGHT ANSWER function 
    //  a right answer alert is displayed

    

    // DISPLAY NEXT QUESTION function
    // display the next question
    // can we use an object to display answer and question

    // Local storage storing scores (which is time remaining) and nicknames

    // View high scores 

}
// start()
// this is an init function. function starts as soon as page is initialized 

// questionText.text()
// Get the combined text contents of each element

// var question = [questionOne, questionTwo, ]

// display question 
// user answers
// move on to next question
