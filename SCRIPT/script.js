
const rulesModal = document.getElementById('rulesModal');
const closeRules = document.getElementById('closeRules');
const rulesBtn = document.querySelector('.rules-btn');
const choicePaper = document.querySelector('.Paper');
const choiceScissors = document.querySelector('.Scissors');
const choiceRock = document.querySelector('.Rock');
const rockContainer = document.querySelector('.choice-exempt')
const Choices = document.querySelector('.choices');
const RChoice = document.querySelector('.js-choice');
const userScore = document.getElementById('user-score');
const reset = document.querySelector('.reset');
const paperColumn = document.querySelector('.paper-column');
const userPara = document.getElementById('user-para');
const codePara = document.getElementById('code-para');
const mainContainerImage=document.querySelector('.main-container');

var count = 1;


window.onload = () => {
    let currentScore = parseInt(localStorage.getItem('User'), 10) || 0;
    userScore.innerHTML = currentScore; // Set the score from localStorage
};



rulesBtn.addEventListener('click', () => {
    rulesModal.classList.add('active');
});

closeRules.addEventListener('click', () => {
    rulesModal.classList.remove('active');
});

// Utility function to reset the game state
function resetGame() {
    location.reload();
    window.onload = () => {
        userScore.innerHTML = localStorage.getItem('User');

    }
    // Hide the computer's choice
    /*choiceScissors.style.display = 'flex';
    choiceRock.style.display = 'flex';
    choicePaper.style.display = 'flex';
    */
}

// Function to handle "You Won"
function deploy() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "win";
    div.innerHTML = "YOU WON";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

// Function to handle "Draw"
function deploy_1() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "draw";
    div.innerHTML = "DRAW";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

// Function to handle "You Lost"
function deploy_2() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "loose";
    div.innerHTML = "You lost";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}



function deployrock() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "win";
    div.innerHTML = "YOU WON";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

// Function to handle "Draw"
function deployrock_1() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "draw";
    div.innerHTML = "DRAW";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

// Function to handle "You Lost"
function deployrock_2() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "loose";
    div.innerHTML = "You lost";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

function deploysci() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "win";
    div.innerHTML = "YOU WON";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}


function deploysci_1() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "draw";
    div.innerHTML = "DRAW";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

// Function to handle "You Lost"
function deploysci_2() {
    Choices.style.removeProperty = ("gap");
    Choices.style.gap = "48px";
    let div = document.createElement('div');
    let button = document.createElement('button');

    div.className = "loose";
    div.innerHTML = "You lost";

    button.className = "try-again";
    button.innerHTML = "Play again?";

    // Reset functionality on button click
    button.addEventListener('click', resetGame);

    // Append elements
    reset.appendChild(div);
    reset.appendChild(button);
}

//------------------------------------------***--------------------------------
//click event son choices
function game() {

    choicePaper.addEventListener('click', () => {
        let currentScore = parseInt(userScore.innerHTML, 10);

        choiceScissors.style.display = 'none';
        rockContainer.style.display = 'none';
        //RChoice.style.width="120px !important";//cannot be appiled directly the important method
        RChoice.style.removeProperty("display");
        RChoice.style.display = "flex";
        userPara.style.display = "block";
        codePara.style.display = "block"
        mainContainerImage.style.backgroundImage="none";
        let codeGenChoice = Math.floor(Math.random() * 3);

        if (codeGenChoice == 0) {
            RChoice.style.backgroundImage = 'url("./FILES/icon-paper.svg")';

            // Paper comes, no change in user score
        } else if (codeGenChoice == 1) {
            RChoice.style.backgroundImage = 'url("./FILES/icon-scissors.svg")';
            // If scissors come, decrease user score by 1
            if (currentScore > 0) {
                currentScore--;
                localStorage.setItem('User', currentScore);
                userScore.innerHTML = currentScore;


            }

            // No need to change the score if it's already 0
        } else {
            RChoice.style.backgroundImage = 'url("./FILES/icon-rock.svg")';
            // If rock comes in front of paper, increase user score
            currentScore++;
            localStorage.setItem('User', currentScore);

            userScore.innerHTML = currentScore;




        }
        if (codeGenChoice == 0) {
            deploy_1();
        }
        else if (codeGenChoice == 1) {
            deploy_2();
        }
        else {
            deploy();
        }
    });


    choiceScissors.addEventListener('click', () => {
        let currentScore = parseInt(userScore.innerHTML, 10);


        choicePaper.style.display = 'none';
        paperColumn.appendChild(choiceScissors);
        rockContainer.style.display = 'none';
        RChoice.style.removeProperty("display");
        RChoice.style.display = "flex";
        userPara.style.display = "block";
        codePara.style.display = "block"
        mainContainerImage.style.backgroundImage="none";

        let codeGenChoice_2 = Math.floor(Math.random() * 3);

        if (codeGenChoice_2 == 0) {
            RChoice.style.backgroundImage = 'url("./FILES/icon-paper.svg")';
            // If paper comes in front of scissors, increment score
            currentScore++;
            localStorage.setItem('User', currentScore);

            userScore.innerHTML = currentScore;
        } else if (codeGenChoice_2 == 1) {
            RChoice.style.backgroundImage = 'url("./FILES/icon-scissors.svg")';
            // No change in score as it's a draw
        } else {
            RChoice.style.backgroundImage = 'url("./FILES/icon-rock.svg")';
            // If rock comes in front of scissors, decrement score
            if (currentScore > 0) {
                currentScore--;
            }
            localStorage.setItem('User', currentScore);
            userScore.innerHTML = currentScore;
        }


        if (codeGenChoice_2 == 0) {
            deploysci();
        }
        else if (codeGenChoice_2 == 1) {
            deploysci_1();
        }
        else {
            deploysci_2();
        }
    });


    choiceRock.addEventListener('click', () => {
        let currentScore = parseInt(userScore.innerHTML, 10);
        choicePaper.style.display = 'none';
        paperColumn.appendChild(choiceRock);
        rockContainer.style.display = 'none';
        choiceScissors.style.display = 'none';
        RChoice.style.removeProperty("display");
        RChoice.style.display = "flex";
        userPara.style.display = "block";
        codePara.style.display = "block"
        mainContainerImage.style.backgroundImage="none";



        let codeGenChoice_3 = Math.floor(Math.random() * 3);

        if (codeGenChoice_3 == 0) {
            RChoice.style.backgroundImage = 'url("./FILES/icon-paper.svg")';
            // If paper comes in front of rock, decrement score
            if (currentScore > 0) {
                currentScore--;
            }
            localStorage.setItem('User', currentScore);
            userScore.innerHTML = currentScore;
        } else if (codeGenChoice_3 == 1) {
            RChoice.style.backgroundImage = 'url("./FILES/icon-scissors.svg")';
            // If scissors come in front of rock, increment score
            currentScore++;
            localStorage.setItem('User', currentScore);
            userScore.innerHTML = currentScore;
        } else {
            RChoice.style.backgroundImage = 'url("./FILES/icon-rock.svg")';
            // No change in score as it's a draw
        }

        if (codeGenChoice_3 == 0) {
            deployrock_2();
        }
        else if (codeGenChoice_3 == 1) {
            deployrock();
        }
        else {
            deployrock_1();
        }
    });

    /*button.addEventListener('click',()=>{
        game();
    })*///button is declared the depoy scope so the button is not defined error is visible in console

}
game();













