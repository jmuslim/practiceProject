const correctAnswer = ["C", "B", "A", "A", "A"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers= [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value
    ]
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswer[index]){
            score+=20;
           
        }
    });
    result.querySelector('span').textContent= `${score}%`;
    result.classList.remove('d-none');
});
