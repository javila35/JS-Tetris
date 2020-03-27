const canvas = document.getElementById('canvas')
let grid = canvas.getContext("2d");
const white = "black";
const sq = 24;

const storage = document.getElementById('storage')
let grid2 = storage.getContext("2d");


function drawSquare(x, y, color){
    grid.shadowOffsetX = 0.5;
    grid.shadowOffsetY = 0.5;
    grid.shadowColor = "gray";
    grid.fillStyle = color;
    grid.fillRect(x*sq, y*sq, sq, sq);
    grid.strokeStyle = "gray";
    grid.strokeRect(x*sq, y*sq, sq, sq);
}

const row = 20;
const column = 10;
let board = [];

for (r=0; r<row; r++){
    board[r]=[];
    for (c=0; c<column; c++){
        board[r][c] = white;
    };
};

function drawBoard(){
    for (r=0; r<row; r++){
        for (c=0; c<column; c++){
            drawSquare(c, r, board[r][c])
        };
    };
};

drawBoard();

let currentScore = 0;
SCORES_URL = "https://mod-3-tetris-backend.herokuapp.com/api/v1/leaders"
function makeTable(){
    fetch(SCORES_URL)
    .then(resp => resp.json())
    .then(data => {
        populateLeaderboard(data);
    })
};

function populateLeaderboard(dataArray){
    let scores = dataArray.sort(function(a, b){
        return b.score-a.score});
        for (let i=0; i<3; i++){
            document.getElementById(`player${i}`).innerText = scores[i].username;
            document.getElementById(`player${i}-score`).innerText = scores[i].score;
        }
    }

document.addEventListener("DOMContentLoaded", function(){  
    makeTable();
})
