# Homework-4-CodeQuiz-WTRIII

User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores (quiz does not have to be on java, minimum 5 questions)
//reference timer activity
SO THAT I can gauge my progress compared to my peers
//reference local storage module


Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
// listener for a click on the button, initiates timer and 

WHEN I answer a question
THEN I am presented with another question
//multiple htmls? //

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
//logic loop to detract time when an 'if' statement is answered incorrectly

WHEN all questions are answered or the timer reaches 0
//need to compare user answer to stored answer - localstorage? iterate through arrays/objects?
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score
//localstorage