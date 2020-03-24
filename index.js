function showLanding() {
    const landingDiv = document.createElement("div");
    landingDiv.id = "landing";

    const landingText = document.createElement("h1");
    landingText.innerText = "Play Tetris?";
    
    const button = document.createElement("button");
    button.id = "new-game";
    button.innerText = "New Game";
    button.addEventListener("click", function(){
        body.removeChild(landingDiv);
        showGameBoard();
    })

    landingDiv.appendChild(landingText);
    landingDiv.appendChild(button);
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(landingDiv);
}

function showGameBoard() {
    const body = document.getElementsByTagName("body")[0];

    const title = document.createElement("h1");
    title.innerText = "TETRIS";

    const gameBoard = document.createElement("div");
    gameBoard.id = "gameboard";

    body.appendChild(title);
    body.appendChild(gameBoard);
}


document.addEventListener("DOMContentLoaded", function(){
    const body = document.getElementsByTagName("body")[0];
    // body.innerHTML = '';
    // showLanding();
})