# Homework-4-CodeQuiz-WTRIII

## Summary
The assignment was to create a quiz consisting of 5 or more questions. The questions did not need to relate to coding, per the instructor. The quiz needed to have a timer that subtracted points for user input of the wrong answer as well as local storage and a high score screen.

### Live Site: https://wtriii.github.io/Homework-4-CodeQuiz-WTRIII/ 

Features Implemented:
- question array that cycles through questions and restarts the quiz upon completion
- a timer that detracts time when the user selects the wrong answer
- a counter to keep score

Features Not Implemented:
- Local Storage
- High Scores

### Start Screen
![quiz start](references/quiz-start.png)

### Example Question
![example question](references/example-question.png)

## Help Received:
I received assistance from Mitchell Robbins on debugging the logic for answering questions. This allowed me to input scoring and timer punishments for wrong answers.


-----
# Original User Story Follows:
-----

User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores (quiz does not have to be on coding, minimum 5 questions)
//reference timer activity
SO THAT I can gauge my progress compared to my peers
//reference local storage module activity


Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
// listener for a click on the button, initiates timer and starts cycling through an array of questions
// need button function to begin quiz
// function with array of questions that is cycled
// each question is a div that is revealed as the quiz progresses

WHEN I answer a question
THEN I am presented with another question
//use classes to hide html windows

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
//logic loop to detract time when a question is answered incorrectly
// timer needs to persist through quiz

WHEN all questions are answered or the timer reaches 0
//need to compare user answer to stored answer - localstorage? iterate through arrays/objects?
THEN the game is over
// will need a rolling count of questions answered correctly versus incorrectly

WHEN the game is over
THEN I can save my initials and my score
// create a function with an array to store information in local storage
    // need another function to get local storage and display on user request