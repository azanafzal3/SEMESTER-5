// Selecting all required elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeCount = quizBox.querySelector(".timer .timer_sec");
const replayBtn = resultBox.querySelector(".buttons .restart");
const quitBtn = resultBox.querySelector(".buttons .quit");

let timeValue = 15;
let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let counter;

// If start button is clicked
startBtn.onclick = () => {
  infoBox.classList.add("activeInfo"); // show info box
};

// If exit button is clicked
exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); // hide info box
};

// If continue button is clicked
continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); // hide info box
  quizBox.classList.add("activeQuiz"); // show quiz box
  showQuestions(0); // call function to show questions
  queCounter(1); // passing 1 parameter to queCounter
  startTimer(timeValue); // start timer
};

// If replay button is clicked
replayBtn.onclick = () => {
  resultBox.classList.remove("activeResult"); // hide result box
  quizBox.classList.add("activeQuiz"); // show quiz box
  timeValue = 15; 
  questionCount = 0;
  questionNumber = 1;
  userScore = 0;
  showQuestions(questionCount); // call function to show questions
  queCounter(questionNumber); // passing question number to queCounter
  startTimer(timeValue); // start timer
};

// If quit button is clicked
quitBtn.onclick = () => {
  resultBox.classList.remove("activeResult"); // hide result box
  startBtn.parentElement.classList.remove("hide"); // show start button container
};

// Show questions function
function showQuestions(index) {
  const queText = document.querySelector(".que_text");
  let queTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
  let optionTag = questions[index].options.map(option =>
    `<div class="option">${option}</div>`
  ).join('');
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;

  const options = optionList.querySelectorAll(".option");
  options.forEach(option => {
    option.onclick = () => optionSelected(option);
  });
}

// Option selected function
function optionSelected(answer) {
  clearInterval(counter);
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  const allOptions = optionList.children.length;

  if (userAnswer === correctAnswer) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", '<div class="icon tick">&#10004;</div>');
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", '<div class="icon cross">&#10006;</div>');
    // Mark the correct option
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAnswer) {
        optionList.children[i].classList.add("correct");
      }
    }
  }

  // Disable all options after selecting
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  setTimeout(nextQuestion, 1000);
}

// Next question function
function nextQuestion() {
  if (questionCount < questions.length - 1) {
    questionCount++;
    questionNumber++;
    showQuestions(questionCount);
    queCounter(questionNumber);
    timeCount.textContent = timeValue;
    startTimer(timeValue);
  } else {
    clearInterval(counter);
    showResult();
  }
}

// Show result function
function showResult() {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score_text");
  let scoreTag = `You got ${userScore} out of ${questions.length} questions right!`;
  scoreText.innerHTML = scoreTag;
}

// Timer function
function startTimer(time) {
  counter = setInterval(() => {
    timeCount.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      nextQuestion();
    }
  }, 1000);
}

// Update question counter
function queCounter(index) {
  const bottomQueCounter = quizBox.querySelector(".total_que");
  bottomQueCounter.innerHTML = `<span>${index} of ${questions.length} Questions</span>`;
}
