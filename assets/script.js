
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question

    // WHEN I answer a question
    // THEN I am presented with another question

    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over

    // WHEN the game is over
    // THEN I can save my initials and score

    // handlers for parts of page
    
let timeDiv = document.querySelector("#timeDiv");
let sectionHeading = document.querySelector("#section-heading");
let sectionContent = document.querySelector("#section-content");
let buttonDiv = document.querySelector("#button-div");

// handlers for created elements
let startButton=document.createElement("button");

// handlers for local storage
let storedUserName = localStorage.getItem("code-quiz-name");

// timer variable
let secondsLeft = 30;

