const BLOCKS_URL = localhost

document.addEventListener("DOMContentLoaded", function(){
let currentPiece = null;

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
        let shape = piecesArray.find(id)
        currentPiece = shape
    }

//Get currentPiece.s1 to show up on the screen



//Normal falling piece function
  function movePieceDown(piece){
      setTimeout(function(){
          let oldPosition = parseInt(piece.style.top) || 1;
          let newPosition = oldPosition + 5

          if (oldPosition < 570){
            piece.style.top = newPosition + "px";
          }
          movePieceDown(piece)
        }, 50)    
      }
})

//Move piece left
function movePieceLeft(piece) {
    let rightEdge = piece.style.right.replace("px", "");
    let right = parseInt(rightNumber, 10);
   
    if (right < 300) {
      piece.style.right = `${right + 30}px`;
    }
  }


//Move piece right
function movePieceRight(piece) {
    let rightEdge = piece.style.right.replace("px", "");
    let right = parseInt(rightNumber, 10);
   
    if (right >= 30) {
      piece.style.right = `${right - 30}px`;
    }
  }

//Arrow left function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      movePieceLeft(currentPiece);
    }
  });


//Arrow right function
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      movePieceRight(currentPiece);
    }
  });
