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
    choices: ['Perfect', 'Freedom', 'Shelter', 'Society']
  },

];

var currentQuestionIndex = 0;
var score = 0;
var incorrect = false;

document.getElementById('score-image').src = 'images/score-based-image/l.png';

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
function updateImageBasedOnScore() {
  var imageElement = document.getElementById('score-image'); // Assuming you have an image with id 'score-image'
  
  if (score <= 2) {
      imageElement.src = 'images/score-based-image/l.png'; // Low score image
  } else if (score <= 6) {
      imageElement.src = 'images/score-based-image/m.png'; // Medium score image
  } else {
      imageElement.src = 'images/score-based-image/h.png'; // High score image
  }
}

function checkAnswer(userChoice) {
  var question = quizData[currentQuestionIndex];
  if (userChoice === question.correctAnswer) {
    score++;
    document.getElementById('result').textContent = 'Correct!';
    updateImageBasedOnScore(); // Call the function here if the answer is correct
  } else {
    incorrect = true;
    document.getElementById('result').textContent = 'Incorrect. The correct answer was ' + question.correctAnswer;
    document.getElementById('play-again').style.display = 'block';
    document.querySelector('h3').textContent = 'You Made him Sad';
    document.getElementById('score-image').src = 'images/score-based-image/l.png';   
  }
  
  // Rest of the code...
  
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


document.getElementById('play-again').addEventListener('click', function() {
  location.reload(); // This will refresh the page
});


document.getElementById('start').addEventListener('click', function() {
  this.style.display = 'none';
  document.querySelector('h3').textContent = ''; // Make the "Play to Make him Happy" disappear
  if (currentQuestionIndex === 0) { // Only display the question if it's the first question
    displayQuestion();
  }
});