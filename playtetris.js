const BLOCKS_URL = "http://localhost/api/v1/blocks"

document.addEventListener("DOMContentLoaded", function(){

//Select Random Piece
    function getRandomPiece(){
        fetch(BLOCKS_URL)
        .then(resp => resp.json())
        .then(data => {
            pickPiece(data)
        })
    }

    function pickPiece(piecesArray){
        let id = Math.floor(Math.random()*7)
        let block = piecesArray[id]
        let letter = eval(block.shape)
        console.log(letter)
        currentPiece = shape
    }

//Get currentPiece.s1 to show up on the screen
//See board-set-up (drawTetrad/colorTetrad)


//Normal falling piece function
  

//Move piece left
function moveTetradLeft(tetrad) {
    let rightEdge = tetrad.style.right.replace("px", "");
    let right = parseInt(rightNumber, 10);
   
    if (right < 300) {
      tetrad.style.right = `${right + 30}px`;
    }
  }


//Move tetrad right
function moveTetradRight(tetrad) {
    let rightEdge = tetrad.style.right.replace("px", "");
    let right = parseInt(rightNumber, 10);
   
    if (right >= 30) {
      tetrad.style.right = `${right - 30}px`;
    }
  }

//Arrow left function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      ess.moveTetradLeft();
    }
  });


//Arrow right function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      ess.moveTetradRight();
    }
  });
<<<<<<< HEAD:playtetris.js
=======

  //Arrow down function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      ess.moveTetradDown();
    }
  })
})
>>>>>>> add-pieces:src/index.js
