function submitQuiz() {
  // Quiz answers
  const answers = {
    q1: "b",
    q2: "b",
    q3: "b", // Answer for Question 3
  };

  // User selections
  let score = 0;
  const q1Answer = document.querySelector('input[name="q1"]:checked');
  const q2Answer = document.querySelector('input[name="q2"]:checked');
  const q3Answer = document.querySelector('input[name="q3"]:checked'); // User answer for Question 3

  if (q1Answer && q2Answer && q3Answer) {
    if (q1Answer.value === answers.q1) {
      score++;
    }
    if (q2Answer.value === answers.q2) {
      score++;
    }
    if (q3Answer.value === answers.q3) {
      score++;
    }

    // Display result and appreciation message
    const quizResult = document.getElementById("quiz-result");
    let message = `You scored ${score} out of ${Object.keys(answers).length}. `;

    if (score === Object.keys(answers).length) {
      message += "Congratulations! You got all answers correct!";
    } else if (score === 0) {
      message += "You need to study more. Try again!";
    } else {
      message += "Well done! You did a good job.";
    }

    quizResult.textContent = message;

    // Reset radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((button) => (button.checked = false));
  } else {
    alert("Please answer all questions before submitting.");
  }
}
