
// handlers for parts of page
    
let timeDiv = document.querySelector("#timeDiv");
let sectionHeading = document.querySelector("#section-heading");
let sectionContent = document.querySelector("#section-content");
let buttonDiv = document.querySelector("#button-div");
let pointsDiv = document.querySelector("#points-div");
let interactionDiv = document.querySelector("#interaction-div");

// handlers for created elements
let pageButton=document.createElement("button");
let scoreButton = document.createElement("scoreButton");

// handlers for local storage
let storedUserName = localStorage.getItem("code-quiz-name");

// timer variable
let secondsLeft = 5;
let stopTimer;

// variables for page state
let buttonState=["startButton","submitButton","menuButton"];

//points variable
let pointsEarned=0;

// local storage for name - use this for hi score initials
if (storedUserName==null){
    storedUserName="Guest";
    localStorage.setItem("code-quiz-name","Guest");
  }

window.addEventListener("load", function(e) {
    e.preventDefault();
    console.log('page is fully loaded');
    sectionHeading.textContent="Instructions";
    sectionContent.textContent="Hello, " + storedUserName + ", welcome to the Code Quiz! To begin, please press the 'start' button. To see the high scores, press the 'high scores' button."  ;
    // add button to buttonDiv with <button type="button" class="btn btn-primary" id="startButton">
    pageButton.textContent="Begin Quiz";
    pageButton.setAttribute("class","btn btn-primary");
    pageButton.setAttribute("id","0");
    buttonDiv.appendChild(pageButton);
    stopTimer=false;
  });


  pageButton.addEventListener("click",function(event) {
    if (event.target.matches("button")){
     event.preventDefault;
   
     // pulling id of button for if statement
     let quizState=buttonState[event.target.id];
     if (quizState === "startButton") { //purpose of this state is to transition from the menu to the quiz
       console.log("beginning quiz"); 
      
       pageButton.setAttribute("id","1");
       pageButton.textContent="submit";
   
       sectionHeading.textContent="Question 1";
       sectionContent.textContent="Lorem question something";
   
       // start timer
   
       startTimer();
       stopTimer=false;
       // load question number, question prompt
   
       // create radio group buttons

     }
    else  if (quizState === "submitButton") { //purpose of this is to advance the quiz until the game over
       console.log("submitting answer");
   
       pageButton.setAttribute("id","2");
       pageButton.textContent="Menu";
   
       sectionHeading.textContent="Game Over";
       sectionContent.textContent="You lost!";
   
       stopTimer=true;
       // check results
       // if answer is correct, pop up somewhere that the answer was correct
       // add one to points
       // stop timer
   
       // load next question, start loop over
   
       // if answer is incorrect, pop up somewhere that answer was incorrect
       // decrement time from the clock
       // keep going until correct answer or time runs out
       
       // if timer reaches 0
       // move to game over screen
     }
     else if (quizState === "menuButton") { //go to game over after timer reaches 0 or if completed all questions. game over goes back to main menu
       console.log("going to menu");
   
       pageButton.setAttribute("id","0");
       pageButton.textContent="Begin Quiz";
   
       sectionHeading.textContent="Instructions";
       sectionContent.textContent="Hello, " + storedUserName + ", welcome to the Code Quiz! To begin, please press the 'start' button. To see the high scores, press the 'high scores' button."  ;
       
       // change section header to Game over
       // change content section to something about the game being over
   
       // give user the option to enter their initials to save their points
       // initials and points get saved to local storage
       // initials and points get loaded back onto game over screen, prepended to bottom of page
   
       // hide timer
       stopTimer=true;

   
     }
    }
   }) 

function startTimer() {
    timeDiv.textContent = secondsLeft + " seconds left";
    secondsLeft--;
    let timerInterval = setInterval(function() {
        if ((stopTimer==false) && (secondsLeft!==0)) {
            timeDiv.textContent = secondsLeft + " seconds left";
            secondsLeft--;
        } else if(stopTimer==true) {
            clearInterval(timerInterval);
            timeDiv.textContent = "";
            secondsLeft=5;
            console.log("stop time!");
        }
        else if (secondsLeft<=0) {
            clearInterval(timerInterval);
            secondsLeft=5;
            timeDiv.textContent = "";
            console.log("out of time!");
            pageButton.setAttribute("id","2");
            pageButton.textContent="Menu";
            sectionHeading.textContent="Game Over";
            sectionContent.textContent="You lost!";
            stopTimer=true;
        }
    }, 1000);
}