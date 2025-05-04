const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

answers.forEach(answer => answer.style.display = 'none');

questions.forEach((question, index) => {
  const answer = answers[index];
  const plusIcon = question.querySelector('.icon-plus');
  const minusIcon = question.querySelector('.icon-minus');

  plusIcon.style.display = 'inline';
  minusIcon.style.display = 'none';

  question.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    answers.forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.icon-plus').forEach(icon => icon.style.display = 'inline');
    document.querySelectorAll('.icon-minus').forEach(icon => icon.style.display = 'none');

    if (!isOpen) {
      answer.style.display = 'block';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline';
    }
  });
});
