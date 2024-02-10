var quizData = [
  {
    image: 'images/quiz/welcome.jpg',
    correctAnswer: 'Welcome',
    choices: ['Freedom', 'Inspect', 'Welcome', 'Surround']
  },
  {
    image: 'images/quiz/come.jpg',
    correctAnswer: 'Come',
    choices: ['Bear', 'Come', 'Kite', 'Tree']
  },
  {
    image: 'images/quiz/language.jpg',
    correctAnswer: 'Language',
    choices: ['Language', 'Pattern', 'Highway', 'Balloon']
  },
  {
    image: 'images/quiz/save.jpg',
    correctAnswer: 'Save',
    choices: ['Fish', 'Save', 'Joke', 'Luck']
  },
  {
    image: 'images/quiz/hello.jpg',
    correctAnswer: 'Hello',
    choices: ['Candy', 'Lemon', 'Hello', 'Chess']
  },
  {
    image: 'images/quiz/help.jpg',
    correctAnswer: 'Help',
    choices: ['Moon', 'Help', 'Walk', 'Love']
  },
  {
    image: 'images/quiz/learning.jpg',
    correctAnswer: 'Learning',
    choices: ['Favorite', 'Festival', 'Audience', 'Learning']
  },
  {
    image: 'images/quiz/phone.jpg',
    correctAnswer: 'Phone',
    choices: ['Phone', 'Dance', 'Apple', 'Plant']
  },
  {
    image: 'images/quiz/Which language.jpg',
    correctAnswer: 'BSL',
    choices: ['ASL', 'CSL', 'FSL', 'BSL']
  },
  {
    image: 'images/quiz/freedom.jpg',
    correctAnswer: 'Freedom',
    choices: ['Perfect', 'Freedom', 'Shelter', 'Curtain']
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
  updateImageBasedOnScore();
}
function updateImageBasedOnScore() {
  var imageElement = document.getElementById('score-image'); // Assuming you have an image with id 'score-image'
  
  if (score <= 2) {
      imageElement.src = 'images/score-based-image/l.png';
  } else if (score <= 6) {
      imageElement.src = 'images/score-based-image/m.png';
  } else {
      imageElement.src = 'images/score-based-image/h.png';
  }
}

updateImageBasedOnScore(); // Call the function here

document.getElementById('play-again').onclick = function() {
currentQuestionIndex = 0;
score = 0;
incorrect = false;
document.getElementById('score').textContent = 'Score: ' + score;
document.getElementById('play-again').style.display = 'none';
updateImageBasedOnScore();
displayQuestion();
};

displayQuestion();

document.getElementById('start').onclick = function() {
this.style.display = 'none';
displayQuestion();
};