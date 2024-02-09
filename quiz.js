var quizData = [
  {
    image: 'images/ASL.jpg',
    correctAnswer: 'Hello',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/BSL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/ASL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/BSL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/ASL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/BSL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/ASL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/BSL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/ASL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },
  {
    image: 'images/BSL.jpg',
    correctAnswer: 'Open',
    choices: ['Hello', 'Bye', 'Door', 'Open']
  },

];

var currentQuestionIndex = 0;
var score = 0;
var incorrect = false;

function displayQuestion() {
  var question = quizData[currentQuestionIndex];
  document.getElementById('question-image').src = question.image;
  
  var choiceButtons = document.getElementsByClassName('choice-button');
  for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].textContent = question.choices[i];
    choiceButtons[i].onclick = function() {
      checkAnswer(this.textContent);
    };
  }
}

function checkAnswer(userChoice) {
  var question = quizData[currentQuestionIndex];
  if (userChoice === question.correctAnswer) {
    score++;
    document.getElementById('result').textContent = 'Correct!';
  } else {
    incorrect = true;
    document.getElementById('result').textContent = 'Incorrect. The correct answer was ' + question.correctAnswer;
    document.getElementById('play-again').style.display = 'block';
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length && !incorrect) {
    displayQuestion();
  } else {
    document.getElementById('play-again').style.display = 'block';
    if (incorrect) {
      document.getElementById('result').textContent = 'Quiz complete! Your score is ' + score;
    } else {
      document.getElementById('result').textContent = 'Congratulations! You have completed the quiz with a perfect score!';
    }
  }
  
  document.getElementById('score').textContent = 'Score: ' + score;
}

document.getElementById('play-again').onclick = function() {
  currentQuestionIndex = 0;
  score = 0;
  incorrect = false;
  document.getElementById('score').textContent = 'Score: ' + score;
  document.getElementById('play-again').style.display = 'none';
  displayQuestion();
};

displayQuestion();