const classForX='x';
const classForCircle='circle';
const cells=document.querySelectorAll('[data-cell]');
let circleTurn; //true of false


//This game needs functions like:

//function to start the game


//function to place the marker based on whos turn it is:
    //check whose turn it was last time
    //manipulate DOM so that it temporarily adds x or circle class to clicked cell element
    //each element can only be clicked once, {once: true}
    //board div should also have class added so that proper hover effect works

//function to switch turns when marker has been placed
    //when called, changes boolean value of circleTurn
    
//function to check if there is a winner based on given winning combinations
    //runs every round to see if currentClass has won
    //loop through variable 'cells' indexes, the ones which have the currentClass added
    //if some winning combination matches we have a winner

//function to check if it is a draw
    
//function to end the game if result is win or draw
    //needs to manipulate the winningText element to tell who won or if it was a draw, add show class



