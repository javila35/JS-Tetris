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

