//TICKET 2  ✅

// Create a variable names songs 
// Store your 5 favourite songs in array - put your favourite song first in the array 
// - One way to test whether something is an array is to use the built-in `Array.isArray` method (function).

let songs = ['Back to December', 'Impossible', 'Daylight', 'This Town', 'Good Luck, Babe']
console.log(Array.isArray(songs));

//TICKET 3 - NOTATION: HOW TO READ ITEMS IN AN ARRAY ✅
// - Log your second favorite song (index 1)
// - Log your most favorite song (index 0)

console.log(songs[1]);
console.log(songs[0]);

// TICKET 4 - NOTATION: HOW TO MODIFY ITEMS IN AN ARRAY ✅
// Replace your fifth song with 'Baby Shark'
// Use bracket notation to access the item and use the assignment operator to reassign it to 'Baby Shark'.
// Then log the array to the console to check that the fifth song is now 'Baby Shark' 🎉

songs[songs.length - 1] = 'Baby Shark';
console.log(songs);

//TICKET 5 - LOOPING THROUGH ARRAYS ✅

let cookiesOrdered = [15, 3, 67, 1, 22, 100];

// - Create a `for` loop that starts at the first index of the array 
// - Inside the loop, multiply the current value by 10 and reassign to the array at that index
// - console.log the array and you should get [150, 30, 670, 10, 220, 1000]

for (let i = 0 ; i < cookiesOrdered.length; i++) {
    cookiesOrdered[i] *= 10;
};

console.log(cookiesOrdered);

//Final Ticket - REAL-WORLD EXAMPLE: AUTOMATED QUIZ SYSTEM

//Create an array to store questions and answers.
//Initialise score to 0
// Initialise correctAnswers to 0

const mathQuestionsAndAnswers = [{
    question: "What is 5 + 7?",
    answer: 12
},
{
    question: "What is the square root of 81?",
    answer: 9
},
{
    question: "What is 15 divided by 3?",
    answer: 5
},
{
    question: "What is the value of 2 to the power of 4?",
    answer: 16
},
{
    question: "What is 9 multiplied by 6?",
    answer: 54
}
];

console.log(mathQuestionsAndAnswers);

let score = 0;
let correctAnswers = 0;

//loop through the mathQuestionsAndAnswers.

for (let i = 0; i < mathQuestionsAndAnswers.length; i++) {
    const userAnswer = Number(prompt(`Question ${i + 1}: ${mathQuestionsAndAnswers[i].question}`));
    if (userAnswer === mathQuestionsAndAnswers[i].answer) {
        alert("Well Done!");
        score++;
        correctAnswers++;
    } else {
        alert("Wrong Answer!");
    };
}

alert(`You scored ${correctAnswers} out of ${mathQuestionsAndAnswers.length}`);