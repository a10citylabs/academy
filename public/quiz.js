// Quiz functionality for A10city Academy
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('quiz-submit');
  const options = document.querySelectorAll('.quiz-option');
  const feedbackCorrect = document.getElementById('feedback-correct');
  const feedbackIncorrect = document.getElementById('feedback-incorrect');
  const progressFill = document.getElementById('progress-fill');
  const progressPercent = document.getElementById('progress-percent');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      const selected = document.querySelector('input[name="quiz1"]:checked');
      
      if (!selected) {
        alert('Please select an answer before checking.');
        return;
      }
      
      // Reset all options
      options.forEach(function(opt) {
        opt.classList.remove('correct', 'incorrect');
      });
      
      // Hide both feedbacks
      feedbackCorrect.classList.remove('show');
      feedbackIncorrect.classList.remove('show');
      
      const selectedOption = selected.closest('.quiz-option');
      const isCorrect = selectedOption.dataset.correct === 'true';
      
      if (isCorrect) {
        selectedOption.classList.add('correct');
        feedbackCorrect.classList.add('show');
        // Update progress
        if (progressFill && progressPercent) {
          progressFill.style.width = '100%';
          progressPercent.textContent = '100%';
        }
      } else {
        selectedOption.classList.add('incorrect');
        feedbackIncorrect.classList.add('show');
        // Show the correct answer
        options.forEach(function(opt) {
          if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
          }
        });
      }
      
      // Disable further changes
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';
      submitBtn.textContent = 'Answered';
    });
  }
});
