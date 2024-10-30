// List of random answers for the oracle
const answers = [
    "Yes, definitely.",
    "No, try again later.",
    "The stars are unclear.",
    "Without a doubt.",
    "Absolutely not.",
    "Ask again tomorrow.",
    "It's possible.",
    "The oracle is uncertain."
  ];
  
  // Function to generate a random answer
  function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  }
  
  // Function to handle the question submission
  document.getElementById('ask-button').addEventListener('click', function() {
    const answer = getRandomAnswer();
    const answerElement = document.getElementById('answer');
  
    // Set the answer text
    answerElement.textContent = answer;
  
    // Fade in the answer
    answerElement.style.opacity = 1;
  
    // After 3 seconds, fade out the answer
    setTimeout(function() {
      answerElement.style.opacity = 0;
    }, 3000);
  });

const starContainer = document.querySelector('.star-container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Set random position
  star.style.top = Math.random() * 100 + 'vh'; // Random vertical position
  star.style.left = Math.random() * 100 + 'vw'; // Random horizontal position

  // Append the star to the container
  starContainer.appendChild(star);

  // Remove the star after animation duration
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

// Create stars at intervals
setInterval(createStar, 1500);
  
