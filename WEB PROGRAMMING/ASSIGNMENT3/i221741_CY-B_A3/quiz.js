// Array of quiz questions about car models and racing
const carQuestions = [
    { question: "Which car manufacturer produces the Mustang?", options: ["A) Ford", "B) Chevrolet", "C) Dodge"], answer: "A" },
    { question: "Which car model is known as the 'Godzilla' in racing?", options: ["A) Mitsubishi Evo", "B) Nissan GT-R", "C) Subaru Impreza"], answer: "B" },
    { question: "Which Italian manufacturer is known for its prancing horse logo?", options: ["A) Ferrari", "B) Lamborghini", "C) Maserati"], answer: "A" },
    { question: "Which car holds the record for the fastest production car in the world?", options: ["A) Bugatti Veyron", "B) Koenigsegg Jesko", "C) SSC Tuatara"], answer: "C" },
    { question: "Which manufacturer has the most Formula 1 Constructor Championships?", options: ["A) Mercedes", "B) Ferrari", "C) Red Bull"], answer: "B" },
    { question: "What car won the 24 Hours of Le Mans in 1966, beating Ferrari?", options: ["A) Ford GT40", "B) Porsche 911", "C) Chevrolet Corvette"], answer: "A" },
    { question: "Which car company produces the 'Civic Type R'?", options: ["A) Honda", "B) Toyota", "C) Subaru"], answer: "A" },
    { question: "Which race is known as 'The Great American Race'?", options: ["A) Indy 500", "B) Daytona 500", "C) Monaco GP"], answer: "B" },
    { question: "Which brand is associated with the F1 car 'Silver Arrows'?", options: ["A) McLaren", "B) Mercedes-Benz", "C) Aston Martin"], answer: "B" },
    { question: "Which supercar is known for its signature scissor doors?", options: ["A) Lamborghini Aventador", "B) Ferrari 488", "C) Porsche 918"], answer: "A" }
];

function generateQuiz() {
    const numQuestions = prompt("How many questions would you like to answer?", "10");
    const quizContainer = document.getElementById("quiz-container");
    let score = 0;
    const usedQuestions = [];  

    for (let i = 0; i < numQuestions; i++) {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * carQuestions.length);
        } while (usedQuestions.includes(randomIndex));

        usedQuestions.push(randomIndex);
        const questionObj = carQuestions[randomIndex];

        const userAnswer = prompt(`${questionObj.question}\n${questionObj.options.join("\n")}`);
        
        if (userAnswer.toUpperCase() === questionObj.answer) {
            score++;
            quizContainer.innerHTML += `<p>${questionObj.question}<br>You guessed ${userAnswer}. <strong>CORRECT!</strong></p>`;
        } else {
            quizContainer.innerHTML += `<p>${questionObj.question}<br>You guessed ${userAnswer}. <strong>INCORRECT!</strong> The correct answer was ${questionObj.answer}.</p>`;
        }
    }

    const percentage = ((score / numQuestions) * 100).toFixed(2);
    quizContainer.innerHTML += `<p>You answered ${score} out of ${numQuestions} questions correctly (${percentage}%).</p>`;
}

window.onload = function() {
    generateQuiz();
};
