
var pass = document.querySelector(".pass");
var fail = document.querySelector(".fail");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".startTimer");
var scoreBox = document.querySelector(".scoreBox")
var timerBox = document.querySelector(".TimerBox")
var quizBox = document.querySelector(".QuizBox")

var questions =[
    {
        questionTitle: "This is Question 1",
        choiceA: "choice A ",
        choiceB: "choice b",
        choiceC: "chocie c",
        choiceD: "choice d",
        correctAnswer: "choiceA"
    },
        {
        questionTitle: "This is Question 2",
        choiceA: "choice A ",
        choiceB: "choice b",
        choiceC: "chocie c",
        choiceD: "choice d",
        correctAnswer: "choiceB"
    }
]
console.log (questions)
console.log ("This is first question", questions [0])
console.log ( questions [0].choiceA)

function showQuestions () {
var questionHeader = document.getElementById ("questionT")
questionHeader.textContent= questions [0].questionTitle
}

function startQuiz() {
    var titleSection= document.querySelector (".TitleBox")
    console.log ( titleSection )
    titleSection.classList.add ("hide")
    scoreBox.classList.remove ("hide")
    timerBox.classList.remove ("hide")
    quizBox.classList.remove ("hide")
    showQuestions ()
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isPass && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          passQuiz();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        failQuiz();
      }
    }, 1000);
  }

  // The winGame function is called when the win condition is met
function passQuiz() {
  wordBlank.textContent = "YOU PASSED!!🏆 ";
  winCounter++
  startQuiz.disabled = false;
  setPasses()
}

// The loseGame function is called when timer reaches 0
function failQuiz() {
  wordBlank.textContent = "Failed, try again!";
  loseCounter++
  startQuiz.disabled = false;
  setFails()
}

// CORRECT THIS SECTION
function setPasses() {
  win.textContent = passCounter;
  localStorage.setItem("passCount", passCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setFails() {
  fail.textContent = failCounter;
  localStorage.setItem("failCount", failCounter);
}

// These functions are used by init
function getPasses() {
  // Get stored value from client storage, if it exists
  var storedPasses = localStorage.getItem("passCount");
  // If stored value doesn't exist, set counter to 0
  if (storedPasses === null) {
    passCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    passCounter = storedPasses;
  }
  //Render win count to page
  pass.textContent = passCounter;
}

function getFails() {
  var storedFails = localStorage.getItem("failCount");
  if (storedFails === null) {
    loseCounter = 0;
  } else {
    failCounter = storedFails;
  }
  fail.textContent = failCounter;
}



// // Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
var restartQuiz = document.querySelector(".restartQuiz");

function restartQuiz() {
  // Resets win and loss counts
  passCounter = 0;
  failCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setPasses()
  setFails()
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);
// Attaches event listener to button
// restartQuiz.addEventListener("click", restartQuiz);