const canvas = document.getElementById('canvas')
let grid = canvas.getContext("2d");
const white = "white";
const sq = 20;

function drawSquare(x, y, color){
    grid.fillStyle = color;
    grid.fillRect(x*sq, y*sq, sq, sq)
    grid.strokeStyle = "gray";
    grid.strokeRect(x*sq, y*sq, sq, sq);
}

const row = 20;
const column = 10;
let board = [];

for (r=0; r<row; r++){
    board[r]=[];
    for (c=0; c<column; c++){
        board[r][c] = white
    }
}

function drawBoard(){
    for (r=0; r<row; r++){
        for (c=0; c<column; c++){
            drawSquare(c, r, board[r][c])
        }
    }
}

drawBoard()

class Piece{
    constructor(tetrad, color){
        this.tetrad = tetrad
        this.color = color
    }
function Piece(tetrad, color){
    this.tetrad = tetrad;
    this.tetradN = 0;
    this.activeTetrad = this.tetrad[tetradN]
    this.color = color;
    this.x = 3;
    this.y = 2;
}


let piece = S[0]
let pieceColor = "blue"
for (r=0; r<piece.length; r++){
    for (c=0; c<piece.length; c++){
        if (piece[r][c]){
            drawSquare(c, r, pieceColor)
        }
    }
}

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetrad.length; r++){
        for(c = 0; c < this.activeTetrad.length; c++){
            // we draw only occupied squares
            if(this.activeTetrad[r][c]==1){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}

Piece.prototype.draw = function(){
    this.fill(this.color);
}

let ess = new Piece(S, "blue");
ess.draw()