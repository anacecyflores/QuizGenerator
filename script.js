// timer and scorebox global variables
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".startTimer");
var resetButton = document.querySelector(".resetButton");
var scoreBox = document.querySelector(".scoreBox");
var timerBox = document.querySelector(".TimerBox");
var quizBox = document.querySelector(".QuizBox");
var timer = document.querySelector("#timer");
var currentScore = document.querySelector("#currentScore");
// quiz section global variables
var questionDisplay = document.querySelector("#questionT");
var choiceDisplay1 = document.querySelector("#choiceA");
var choiceDisplay2 = document.querySelector("#choiceB");
var choiceDisplay3 = document.querySelector("#choiceC");
var choiceDisplay4 = document.querySelector("#choiceD");

// Question Carousel (from student practice #18)
var currentQuestion = 0;
// 60 seconds given for the quiz
var startTime = 60;
// global score variable
var score = 0;
// adding score to current score in box
currentScore = score;
// timer function
function timerStart() {
  let timeInterval;
  timeInterval = setInterval(function () {
    if (startTime >= 1) {
      startTime--;
      timer.textContent = startTime + " Time Left";
    } else {
      clearInterval(timeInterval);
      timer.textContent = "Quiz Over!";
    }
  }, 1000);
}

// Question Index
var questions = [
  {
    questionTitle: "HTML is considered as ______ ?",
    choiceA: "Programming language ",
    choiceB: "High Level Language",
    choiceC: "High Level Language",
    choiceD: "Markup Language",
    correctAnswer: "choiceD",
  },
  {
    questionTitle: "HTML uses____?",
    choiceA: "user-defined tags",
    choiceB: "predefined tags",
    choiceC: "Fixed tags defined by the language",
    choiceD: "tags for links only",
    correctAnswer: "choiceC",
  },
  {
    questionTitle:
      " If we want to set the style for just one element, which css selector will we use?",
    choiceA: "id ",
    choiceB: "text",
    choiceC: "class",
    choiceD: "name",
    correctAnswer: "choiceA",
  },
  {
    questionTitle: " Which organization defines Web standards?",
    choiceA: "Apple Inc. ",
    choiceB: "IBM Corporation",
    choiceC: "World Wide Web Consortium",
    choiceD: "Microsoft Corporation",
    correctAnswer: "choiceC",
  },
];
// Questions Function
function showQuestions() {
  questionDisplay.textContent = questions[currentQuestion].questionTitle;
  choiceDisplay1.textContent = questions[currentQuestion].choiceA;
  choiceDisplay2.textContent = questions[currentQuestion].choiceB;
  choiceDisplay3.textContent = questions[currentQuestion].choiceC;
  choiceDisplay4.textContent = questions[currentQuestion].choiceD;
}
// This function hides items in the beginning of quiz
function startQuiz() {
  var titleSection = document.querySelector(".TitleBox");
  console.log(titleSection);
  titleSection.classList.add("hide");
  scoreBox.classList.remove("hide");
  timerBox.classList.remove("hide");
  quizBox.classList.remove("hide");
  showQuestions();
  timerStart();
  // iterate through questions
  if (event.currentTarget.innerText === questions[currentQuestion].answer) {
    score++;
  } else {
    startTime -= 10;
  }
}
// Re-start quiz/timer
function restartQuiz() {
  var titleSection = document.querySelector(".TitleBox");
  console.log(titleSection);
  titleSection.classList.remove("hide");
  scoreBox.classList.add("hide");
  timerBox.classList.add("hide");
  quizBox.classList.add("hide");
  showQuestions();
  timerStart();
}
// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);
resetButton.addEventListener("click", restartQuiz);

// event listener for answer choices
choiceA.addEventListener("click", choiceA);
choiceB.addEventListener("click", choiceB);
choiceC.addEventListener("click", choiceC);
choiceD.addEventListener("click", choiceD);
