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

    // currentPiece

//Get currentPiece to show up on the screen
//See board-set-up (drawTetrad/colorTetrad)


//Normal falling piece function
// SEE BOARD SET-UP

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

  //Arrow down function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      ess.moveTetradDown();
    }
  })
})

//Arrow up function
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    ess.rotateTetrad();
  }
});