const BLOCKS_URL = "http://localhost/api/v1/blocks"

document.addEventListener("DOMContentLoaded", function(){

//Get currentPiece to show up on the screen
// SEE BOARD-SET-UP (colorTetrad, drawTatrad)

//Normal falling piece function
// SEE BOARD SET-UP


//Arrow left function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      currentPiece.moveTetradLeft();
    }
  });

//Arrow right function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      currentPiece.moveTetradRight();
    }
  });

  //Arrow down function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      currentPiece.moveTetradDown();
    }
  })
})

//Arrow up function
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    currentPiece.rotateTetrad();
  }
});