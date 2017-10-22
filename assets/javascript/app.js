var answerSelected = false;
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var counter = 0;
var gameResetClone = $(".container").clone();
var timeCounter = 30;
var gameStarted = false;

var question1 = {
    question: "Who is the lead singer of Guns n Roses?",
    answerA: "Slash",
    answerB: "James Hetfeld",
    answerC: "Axel Rose",
    answerD: "Randy Blythe",
    correctAnswer: "c",

};

var question2 = {
    question: "What quarterback has the best rating in touchdowns thrown to interceptions?",
    answerA: "Peyton Manning",
    answerB: "Aaron Rodgers",
    answerC: "Tom Brady",
    answerD: "Joe Montana",
    correctAnswer: "b",

};

var question3 = {
    question: "What year did John Stockton send the Jazz to the NBA Finals?",
    answerA: "1995",
    answerB: "1988",
    answerC: "1997",
    answerD: "1999",
    correctAnswer: "c",

};

var question4 = {
    question: "How long does the average person spend of their lifetime waiting on a red light to turn green",
    answerA: "6 months",
    answerB: "2 years",
    answerC: "1.5 years",
    answerD: "1 years",
    correctAnswer: "a",

};

var question5 = {
    question: "What does McDonalds calls frequent buyers of their food?",
    answerA: "Frequent friers",
    answerB: "Heavy users",
    answerC: "McVisitors",
    answerD: "Hungry Hippos",
    correctAnswer: "b",

};

var question6 = {
    question: "About how many miles per hour does a sneeze travel?",
    answerA: "25mph",
    answerB: "50mph",
    answerC: "75mph",
    answerD: "100mph",
    correctAnswer: "d",

};

var question7 = {
    question: "Roughly how many people per year are killed by coconuts?",
    answerA: "30",
    answerB: "90",
    answerC: "115",
    answerD: "150",
    correctAnswer: "d",

};

var question8 = {
    question: "What is the most spoken language in the world??",
    answerA: "Russian",
    answerB: "Chinese",
    answerC: "English",
    answerD: "French",
    correctAnswer: "b",

};
//////////////////////////// QUESTIONS VARIABLE ARRAY /////////////////////////////
var questionObjects = [question1, question2, question3, question4, question5, question6, question7, question8]


////////////////////////// POPULATES THE QUESTION AND ANSWERS /////////////////////////
function formFills() {
    $("#reset-btn").show()
    gameStarted = true;
    console.log("formfill began")
    $("#question-box").html(questionObjects[counter].question)
    $("#answer-1").html(questionObjects[counter].answerA)
    $("#answer-2").html(questionObjects[counter].answerB)
    $("#answer-3").html(questionObjects[counter].answerC)
    $("#answer-4").html(questionObjects[counter].answerD)
    $("#start-btn").hide()
    answerSelected = false;
}
$("#start-button-section").on("click", "#start-btn", formFills);
$("#start-button-section").on("click", "#start-btn", timer);
$("#start-button-section").on("click", "#start-btn", variableReset);
$(".container").on("click", ".answers", answerCheck);

// $(".answers").on("click", answerCheck)
// $("#start-btn").on("click", formFills);
$("#reset-btn").on("click", resetGame);


///////////////////////// TIMER FUNCTION ////////////////////////////////
function timer() {
    timeCounter = 45;
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeCounter--;
    $("#time-left").html("<h2>" + timeCounter + "</h2>");
    if (timeCounter === 0) {
        // unanswered++
        // // unanswered()

        stop()
        resetGame()
    }
}


function stop() {
    clearInterval(intervalId);
}

// var timerId = setInterval(countdown, 1000);

// function timer() {
//     clearTimeout(timerId);
//     clearInterval(timerId)
//     var timeLeft = 30;
//     var elem = document.getElementById('time-left');

//     timerId = setInterval(countdown, 1000);

//     function countdown() {
//         if (timeLeft == 0) {
//             clearTimeout(timerId);
//             clearInterval(timerId)

//         } else {
//             elem.innerHTML = timeLeft + ' seconds remaining';
//             timeLeft--;
//         }
//     }
// myCounter = 31;
// setInterval(function() {
//     myCounter--;
//     if (myCounter >= 0) {
//         span = document.getElementById("time-left");
//         span.innerHTML = "Timer: " + myCounter;
//         clearInterval(myCounter);
//     }
//     if (myCounter === 0) {
//         alert('Sorry, out of time');
//         clearInterval(myCounter);
//         return;
//     }
// }, 1000);



/////////////////////////// RIGHT & WRONG COUNTER ////////////////////////////


function answerCheck() {

    if (gameStarted === true) {
        var userGuess = $(this).attr("value")

        if (answerSelected === false) {
            if (userGuess === questionObjects[counter].correctAnswer) {
                console.log("answer is correct!")
                correctAnswerCount++
                $(".score-correct").html(correctAnswerCount)
            } else {
                console.log("wrong answer!")
                incorrectAnswerCount++
                $(".score-incorrect").html(incorrectAnswerCount)
            }
            counter++
            answerSelected = true;
            formFills()


        } else {
            console.log("YOU ALREADY CHOSE")

        }
    } else {
        console.log("You Need To Start The Game First")
    }


    if (correctAnswerCount + incorrectAnswerCount === questionObjects.length) {
        $("#time-left").text("Your Result:");
        finalScore();
    } else {

        formFills()

    }
}



// $("#reset-btn").on("click", resetGame)
function finalScore() {
    stop()
    $("#score-correct").empty();
    $("#score-incorrect").empty();
    // $("#time-left").html("<p>Correct Score: " + correctAnswerCount + " </p>" + "<p>Incorrect Score: " + incorrectAnswerCount + " </p>")

    if (correctAnswerCount > 6) {
        $("#winner-space").append("<img src='assets/images/winner-PNG-File.png' height='250px' width='375px' class='center-align img-fluid'>")
    } else {
        $("#winner-space").append("<img src='assets/images/try-again.png' height='250px' width='375px' class='center-align img-fluid'>")
    }
    formFills();
}

////////////////////////////// GAME RESET ////////////////////////////////


function resetGame() {
    console.log("Reset Function Ran")
        // $(".container").replaceWith(gameResetClone)


    answerSelected = true;
    correctAnswerCount = 0;
    incorrectAnswerCount = 0;
    counter = 0;
    $("#question-box").html("")
    $("#answer-1").html("")
    $("#answer-2").html("")
    $("#answer-3").html("")
    $("#answer-4").html("")
    $(".score-correct").html("0")
    $(".score-incorrect").html("0")
    $("#winner-space").text("")
    $("#reset-btn").hide()


    // $("#start-btn").on("click", formFills);
    stop()
    timeCounter = 45;
    $("#start-btn").show()

    // $("#start-btn").on("click", formFills);
    // $(".container").on("click", ".answers", answerCheck);
    // $("#start-btn").on("click", timer);


    // $("#reset-btn").on("click", function() {
    //     $(".container").replaceWith(gameResetClone)
    // });



};

function variableReset() {
    answerSelected = false;
    correctAnswerCount = 0;
    incorrectAnswerCount = 0;
    counter = 0;
    gameResetClone = $(".container").clone();
    timeCounter = 45;
}

$(document).ready(function() {
    $("#reset-btn").hide()
});