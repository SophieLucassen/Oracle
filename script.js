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
  