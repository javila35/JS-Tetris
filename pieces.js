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
    ]

const O = [
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
    ]

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
    ]

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
    ]

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
    ]

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
    ]

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
    ]

    const BLOCKS = [
        [I, "blue"],
        [O, "yellow"],
        [Z, "green"],
        [S, "red"],
        [L, "orange"],
        [J, "purple"]
      ]
      

    class Piece{
        constructor(tetrad, color){
            this.tetrad = tetrad;
            this.color = color;
            this.stage = 0;
            this.activeTetrad = this.tetrad[this.stage]
            this.x = 4;
            this.y = 2;
        }
    
        colorTetrad(color){
            for (r=0; r<this.activeTetrad.length; r++){
                for (c=0; c<this.activeTetrad.length; c++){
                    if (this.activeTetrad[r][c]==1){
                        drawSquare(this.x + c, this.y + r, color)
                    }
                }
            }
        }
    
        drawTetrad(){
            this.colorTetrad(this.color);
        }
    
        deleteTetrad(){
            this.colorTetrad(white);
        }
    
        moveTetradDown(){
            this.deleteTetrad();
            if (!this.collision(0,1,this.activeTetrad)){
                this.y++;
            }
            this.drawTetrad();
            }
    
        moveTetradRight(){
            this.deleteTetrad()
            if (!this.collision(1, 0, this.activeTetrad)){
                this.x++;
            }
            this.drawTetrad();
        }

        moveTetradLeft(){
            this.deleteTetrad();
            if (!this.collision(-1, 0, this.activeTetrad)){
                this.x--;
            }
            this.drawTetrad();
            }

        rotateTetrad(){
            let landingStage = this.tetrad[(this.stage + 1)%this.tetrad.length];
            let kick = 0;

            if (this.collision(0,0,landingStage)){
                if (this.x > 5){
                    kick = -1
                }
                else {
                    kick = 1
                }
            }
            // if (!collision)
            if (!this.collision(0,0,landingStage)){
                this.deleteTetrad();
                this.x += kick
                this.stage = (this.stage + 1)%this.tetrad.length
                this.activeTetrad = this.tetrad[this.stage]
                this.drawTetrad();
            }
        }

        collision(x,y,piece){
            for (r=0; r<piece.length; r++){
                for (c=0; c<piece.length; c++){
                    if (!piece[r][c]){
                        continue;
                    }
            
                let newX = this.x + c + x;
                let newY = this.y + r + y;

                if (newX<0 || newX>10 || newY>=20){
                    return true;
                }

                if (board[newY][newX] != white){
                    return true;
                }
            }
        }
        return false;
        }

    }
    
    let ess = new Piece(S, "blue");
    ess.drawTetrad()

//Select Random Piece
function getRandomPiece(){
    let id = Math.floor(Math.random()*7)
    return BLOCKS[id]
}

let x = getRandomPiece()
let currentPiece = new Piece(x[0], x[1]);
currentPiece = ess;

document.addEventListener("DOMContentLoaded", function(){

      setInterval(function(){
        ess.moveTetradDown();
    }, 800)

    setInterval(function(){
        getRandomPiece()
    })


})

    

    

