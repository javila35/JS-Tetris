const BLOCKS_URL = "http://localhost/api/v1/blocks"

document.addEventListener("DOMContentLoaded", function(){

//Get currentPiece to show up on the screen
// SEE BOARD-SET-UP (colorTetrad, drawTatrad)

//Normal falling piece function
// SEE BOARD SET-UP


//Arrow left function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      currentPiece.moveTetradLeft();
    }
  });

//Arrow right function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      currentPiece.moveTetradRight();
    }
  });

  //Arrow down function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentPiece.moveTetradDown();
      clearInterval(timer);
      timer = setInterval(function(){
        currentPiece.moveTetradDown();
      }, 800);
    }
  })
})

//Arrow up function
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    currentPiece.rotateTetrad();
  };
});

//Spacebar pause function
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 32) {
    if (start){
      clearInterval(timer);
      timer = null;
    } else if (!start) {
      clearInterval(timer);
      timer = null;
      timer = setInterval(function(){
        currentPiece.moveTetradDown();
    }, 800);
  };
  };
  start = !start
});
