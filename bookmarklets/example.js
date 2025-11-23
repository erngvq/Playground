javascript:(() => {
    const arrows = document.querySelectorAll('.answer_arrow');
    arrows.forEach((element) => {
        element.style.display = 'none';
    });

    const checks = document.querySelectorAll('input[type="radio"][checked]');
    checks.forEach((element) => {
        element.checked = false;
    });

    const answers = document.querySelectorAll('div.selected_answer.correct_answer');
    answers.forEach((element) => {
        element.classList.remove('selected_answer', 'correct_answer');
    });
})();
