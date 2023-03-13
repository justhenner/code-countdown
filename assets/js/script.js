var btns = $('.quesbtn');
var question = $('#question');
var quizStart = $('#btn-start');
var quesNum = $('#ques-num');
var answerMessage = $('#answer-message');
var finalScoreMessage = $('#final-score');
var scorePercentage = $('#score-percentage');
var submitBtn = $('#submit-btn');
var quesContainer = $('#ques-container');
var scoreContainer = $('#score-container');
var roundCounter = 0;
var finalScore = 0;
var time = 30;

var answerKey = [
    {
        number: "1)",
        question: "Which yoga pose below helps you stretch your hip flexors?",
        options: [{
            text: "1. Pigeon",
            value: true, 
        }, {
            text: "2. Cobra",
            value: false,
        }, {
            text: "3. Staff",
            value: false,
        },  {
            text: "4. Crow",
            value: false,
        }],
        
    },
    {
        number: "2)",
        question: "Which yoga pose below helps you strengthen your upper body?",
        options: [{
            text: "1. Fish",
            value: false, 
        }, {
            text: "2. Mountain",
            value: false,
        }, {
            text: "3. Crane",
            value: true,
        },  {
            text: "4. Forward fold",
            value: false,
        }],
    },
    {
        number: "3)",
        question: "Which yoga pose below helps you open your shoulders?",
        options: [{
            text: "1. Boat",
            value: false, 
        }, {
            text: "2. Warrior 3",
            value: false,
        }, {
            text: "3. Staff",
            value: false,
        },  {
            text: "4. Wheel",
            value: true,
        }],
    },
    {
        number: "4)",
        question: "Which yoga pose inverts your bloodflow?",
        options: [{
            text: "1. Dancer",
            value: false, 
        }, {
            text: "2. Candle",
            value: true,
        }, {
            text: "3. Lotus",
            value: false,
        },  {
            text: "4. Up dog",
            value: false,
        }],
    },
]

function countDown() {
    var timer = setInterval(function () {
        $('#timer').text(time);
        time--;
        if (time < 0) {
            clearInterval(timer);
            calculateScore()
        } else if (roundCounter > 4) {
            clearInterval(timer);
            time = 0;
            $('#timer').text(time);
        }
    }, 1000);
}

function beginGame() {
    nextRound();
    countDown();
    btns.css('visibility', 'visible');
    quizStart.css('display', 'none');
}

quizStart.on('click', beginGame);


btns.click(function(){
    if($(this).val() === "true"){
        rightAnswer();
    } else if($(this).val() === "false") {
        wrongAnswer();
    }
});

function nextRound() {
    if(roundCounter < 4){
        for (var i = 0; i < answerKey[0].options.length; i++) {
            quesContainer.children().eq(i).text(answerKey[roundCounter].options[i].text);
            quesContainer.children().eq(i).val(answerKey[roundCounter].options[i].value);
            console.log(`button ${i} has a value of ${quesContainer.children().eq(i).val()}`);
        }
        quesNum.css('visibility', 'visible').text(answerKey[roundCounter].number);
        question.css('visibility', 'visible').text(answerKey[roundCounter].question);
    } else {
        calculateScore();
    }
}

function rightAnswer() {
    answerMessage.css('display', 'block');
    answerMessage.children().first().css('display', 'block');
    setTimeout(cancelMessage, 1000);
    finalScore++;
    roundCounter++;
    nextRound();
}

function wrongAnswer() {
    answerMessage.css('display', 'block');
    answerMessage.children().last().css('display', 'block');
    setTimeout(cancelMessage, 1000);
    roundCounter++;
    time--;
    nextRound();
}

function cancelMessage() {
    answerMessage.css('display', 'none');
    answerMessage.children().css('display', 'none');
}

var scoreTotal;
function calculateScore() {
    roundCounter++;
    finalScoreMessage.css('display', 'block');
    scoreTotal = (finalScore / 4) * 100;
    scorePercentage.text("Your Score: " + scoreTotal + "%");
}

submitBtn.click(function(event){
    event.preventDefault();
    var name = $('<p>').text(scoreTotal + "%" + " - " + initials.value).css('font-size', '1.5em');
    scoreContainer.append(name);
    localStorage.setItem(scoreTotal, initials.value);
    initials.value = "";
})

function playAgain() {
    time = 30;
    roundCounter = 0;
    finalScore = 0;
    finalScoreMessage.css('display', 'none');
    beginGame();
}

function clearScore() {
    scoreContainer.empty();
    localStorage.clear();
}