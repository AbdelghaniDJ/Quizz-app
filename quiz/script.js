const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const myQuestions = [
    {
        question: 'What is the capital of France?',
        answers: {
            a: 'Berlin',
            b: 'Madrid',
            c: 'Paris',
        },
        correctAnswer: 'c',
    },
    {
        question: 'Which programming language is used for web development?',
        answers: {
            a: 'Java',
            b: 'Python',
            c: 'JavaScript',
        },
        correctAnswer: 'c',
    },
    {
        question: 'What is the largest mammal?',
        answers: {
            a: 'Elephant',
            b: 'Blue Whale',
            c: 'Giraffe',
        },
        correctAnswer: 'b',
    },
];

function buildQuiz() {
    myQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        for (const option in question.answers) {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            questionDiv.appendChild(input);

            const label = document.createElement('label');
            label.innerHTML = `${option}: ${question.answers[option]}`;
            questionDiv.appendChild(label);
        }

        quizContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;

    myQuestions.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });

    resultContainer.innerHTML = `Your score is: ${score} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
