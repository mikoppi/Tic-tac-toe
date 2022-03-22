const classForX='x';
const classForCircle='circle';
const cells=document.querySelectorAll('[data-cell]');
let circleTurn; //true of false
let board=document.querySelector('#board');


//This game needs functions like:

//function to start the game
function startGame() {
    circleTurn=true;
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick)
    }, {once:true})
    addHoverEffect(circleTurn);
}


//function to place the marker based on whos turn it is:
//check whose turn it was last time
//manipulate DOM so that it temporarily adds x or circle class to clicked cell element
//each element can only be clicked once, {once: true}
//board div should also have class added so that proper hover effect works

function handleClick(e) {
    const cell=e.target;
    const currentClass=circleTurn ? classForCircle : classForX;
    placeMarker(cell,currentClass);
    switchTurn();
    addHoverEffect(circleTurn);
}    

function placeMarker(cell, currentClass) {
    cell.classList.add(currentClass);    
}

function addHoverEffect(circleTurn) {
    board.classList.remove(classForCircle);
    board.classList.remove(classForX);
    if (circleTurn) return board.classList.add(classForCircle);
    board.classList.add(classForX);
}

//function to switch turns when marker has been placed
    //when called, changes boolean value of circleTurn
function switchTurn() {
    circleTurn=!circleTurn;
}    
//function to check if there is a winner based on given winning combinations
    //runs every round to see if currentClass has won
    //loop through variable 'cells' indexes, the ones which have the currentClass added
    //if some winning combination matches we have a winner

//function to check if it is a draw
    
//function to end the game if result is win or draw
    //needs to manipulate the winningText element to tell who won or if it was a draw, add show class



