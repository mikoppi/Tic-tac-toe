
const GameModule=(function() {
    
    const classForX='x';
    const classForCircle='circle';
    const cells=document.querySelectorAll('[data-cell]');
    let circleTurn; //true of false
    const board=document.querySelector('#board');
    const winningCombinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const winningMessageElement=document.querySelector('[data-winning-text]');
    

    //This game needs functions like:
    
    //function to start the game
    function startGame() {
        circleTurn=false;
        cells.forEach(cell => {
            cell.classList.remove(classForCircle);
            cell.classList.remove(classForX);
            cell.removeEventListener('click',handleClick);
            cell.addEventListener('click', handleClick)
        }, {once:true})
        addHoverEffect(circleTurn);
        document.querySelector('.winning-message').classList.remove('show');
    }
    
    //functions to place the marker based on whos turn it is:
    
    function handleClick(e) {
        const cell=e.target;
        const currentClass=circleTurn ? classForCircle : classForX;
        placeMarker(cell,currentClass);
        if (checkWin(currentClass)) {
            console.log('winner');
            endGame(false);
        }
        else if (isDraw()) {
            endGame(true);
        }
        else {
            switchTurn();
            addHoverEffect(circleTurn); 
        }
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
        
    function switchTurn() {
        circleTurn=!circleTurn;
    }

    function checkWin(currentClass) {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].classList.contains(currentClass)
            })
        })
    }

    function endGame(draw) {
        if (draw) {
            winningMessageElement.innerText='Draw!';
        }
        else {
            winningMessageElement.innerText=`${circleTurn ? ":O" : "xD"} wins!`
        }
        document.querySelector('.winning-message').classList.add('show');
    }

    function isDraw() {
        return [...cells].every(cell => {
            return cell.classList.contains(classForX) || cell.classList.contains(classForCircle);
        })
    }

    return {
        startGame:startGame
    }
    

})();


const restartButton=document.querySelector('#restartButton');
restartButton.addEventListener('click',GameModule.startGame);

const startWithX=document.querySelector('#startButton');
startWithX.addEventListener('click',GameModule.startGame)
const startWithCircle=document.querySelector('#startButton2');
startWithCircle.addEventListener('click',GameModule.startGame)






