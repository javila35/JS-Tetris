const I = [
        [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ],

        [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],

        [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0]
        ],

        [
            [0,0,0,0],
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0]
        ]
    ];

const O = [
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
    ];

const L = [
        [
            [0,1,0],
            [0,1,0],
            [0,1,1]
        ],
        [
            [0,0,1],
            [1,1,1],
            [0,0,0]
        ],
        [
            [1,1,0],
            [0,1,0],
            [0,1,0]
        ],
        [
            [0,0,0],
            [1,1,1],
            [1,0,0]
        ]
    ];

const J = [ 
        [
            [0,1,0],
            [0,1,0],
            [1,1,0]
        ],
        [
            [0,0,0],
            [1,1,1],
            [0,0,1]
        ],
        [
            [0,1,1],
            [0,1,0],
            [0,1,0]
        ],
        [
            [1,0,0],
            [1,1,1],
            [0,0,0]
        ]
    ];

const S = [
        [
            [0,1,1],
            [1,1,0],
            [0,0,0]
        ],
        [
            [0,1,0],
            [0,1,1],
            [0,0,1]
        ],
        [
            [0,0,0],
            [0,1,1],
            [1,1,0]
        ],
        [
            [1,0,0],
            [1,1,0],
            [0,1,0]
        ]
    ];

const Z = [
        [
            [1,1,0],
            [0,1,1],
            [0,0,0]
        ],
        [
            [0,0,1],
            [0,1,1],
            [0,1,0]
        ],
        [
            [0,0,0],
            [1,1,0],
            [0,1,1]
        ],
        [
            [0,1,0],
            [1,1,0],
            [1,0,0]
        ]
    ];

const T = [ 
        [
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ],
        [
            [0,1,0],
            [0,1,1],
            [0,1,0]
        ],
        [
            [0,0,0],
            [1,1,1],
            [0,1,0]
        ],
        [
            [0,1,0],
            [1,1,0],
            [0,1,0]
        ]
    ];

    const BLOCKS = [
        [I, "blue"],
        [O, "yellow"],
        [Z, "green"],
        [S, "red"],
        [L, "orange"],
        [J, "pink"],
        [T, "purple"]
      ]

      

    class Piece{
        constructor(tetrad, color){
            this.tetrad = tetrad;
            this.color = color;
            this.stage = 0;
            this.activeTetrad = this.tetrad[this.stage];
            this.x = 4;
            this.y = -1;
        };
    
        colorTetrad(color){
            for (r=0; r<this.activeTetrad.length; r++){
                for (c=0; c<this.activeTetrad.length; c++){
                    if (this.activeTetrad[r][c]==1){
                        drawSquare(this.x + c, this.y + r, color)
                    };
                };
            };
        };
    
        drawTetrad(){
            this.colorTetrad(this.color);
        };
    
        deleteTetrad(){
            this.colorTetrad(white);
        };
    
        moveTetradDown(){
            if (!this.collision(0,1,this.activeTetrad)){
                this.deleteTetrad();
                this.y++;
                this.drawTetrad();
            } else {
                this.lock();
            };
        };
    
        moveTetradRight(){
            this.deleteTetrad()
            if (!this.collision(1, 0, this.activeTetrad)){
                this.x++;
            };
            this.drawTetrad();
        };

        moveTetradLeft(){
            this.deleteTetrad();
            if (!this.collision(-1, 0, this.activeTetrad)){
                this.x--;
            };
            this.drawTetrad();
            };

        rotateTetrad(){
            let landingStage = this.tetrad[(this.stage + 1)%this.tetrad.length];
            let kick = 0;

            if (this.collision(0,0,landingStage)){
                if (this.x > 5){
                    kick = -1;
                }
                else {
                    kick = 1;
                };
            };

            if (!this.collision(0,0,landingStage)){
                this.deleteTetrad();
                this.x += kick;
                this.stage = (this.stage + 1)%this.tetrad.length;
                this.activeTetrad = this.tetrad[this.stage];
                this.drawTetrad();
            };
        };

        collision(x,y,piece){
            for (r=0; r<piece.length; r++){
                for (c=0; c<piece.length; c++){
                    if (!piece[r][c]){
                        continue;
                    };
            
                let newX = this.x + c + x;
                let newY = this.y + r + y;

                if (newX<0 || newX>10 || newY>=20){
                    return true;
                };

                if (newY < 0){
                    continue;
                };

                if (board[newY][newX] != white){
                    return true;
                };
            };
        };
        return false;
        };

        lock(){
          for (r=0; r< this.activeTetrad.length; r++){
            for (c=0; c< this.activeTetrad.length; c++){
                if (!this.activeTetrad[r][c]){
                    continue;
                };
    
                if (this.y + r < 0){
                    alert("Womp-ba-domp. Game Over");

                    //create gameOver function? reset board, upload score, reset score

                    location.reload(false);
                    break;
                }
                else {
                    board[this.y+r][this.x+c] = this.color;
                    drawSquare(this.x+c, this.y+r, board[this.y+r][this.x+c]);
                    clearInterval(timer);
                    timer = null;
                };
            };
          };
            drawBoard();
            checkRowFull();
            startFalling();
        }
    }
//END OF CLASS

let currentScore = 0;
let currentPiece = null;

//Select Random Piece
function getRandomPiece(){
    let id = Math.floor(Math.random()*7);
    let x = BLOCKS[id];
    return new Piece(x[0], x[1]);
};

let timer = null;
let start = false;
function startFalling(){
    currentPiece = getRandomPiece();
    timer = setInterval(function(){
        currentPiece.moveTetradDown();
    }, 800);
    start = true;
};



// function deleteRow(row){
//     for (block of row){
//         block = white;
//     }
// }
function addScore(rowsCleared){
    if (rowsCleared == 1){
        currentScore += 40
    }
    if (rowsCleared == 2){
        currentScore += 200
    }
    if (rowsCleared == 3){
        currentScore += 300
    }
    if (rowsCleared == 4){
        currentScore += 1200
    }
}



// function checkForFullRow(){
//     rowCount = 0;
//     for (r = 0; r < row; r++) {
//         if (board[r].every(block => block !== white)){
//             rowCount++;
//             console.log(`Row count is ${rowCount}`);
//             for (y = r; y > 1; y--) {
//                 for (c = 0; c < 10; c++) {
//                 board[y][c] = board[y-1][c] 
//             }
//             for (c = 0; c < 10; c++){
//                 board[0][c] = white;
//                 drawSquare(c,0,board[0][c]);
//             }
//             }
//         }    
//     }
//     addScore(rowCount);
// }




const startButton = document.querySelector("#landing button")
startButton.addEventListener("click", function(){
    
    startFalling();
    startButton.disabled = true;
});

let isRowFull = true;
function checkRowFull(){
    rowCount = 0;
    for(r = 0; r < 20; r++){
        let isRowFull = true;
        for( c = 0; c < 10; c++){
            isRowFull = isRowFull && (board[r][c] != white);
        };
        
        if(isRowFull){
            rowCount++;
            for( y = r; y > 1; y--){
                for( c = 0; c < 10; c++){
                    board[y][c] = board[y-1][c];
                };
            };

            for( c = 0; c < 10; c++){
                board[0][c] = white;
            };
        };
    };
    drawBoard();
    addScore(rowCount);
    document.getElementById("player-score").innerText = `${currentScore}`;

}
}
