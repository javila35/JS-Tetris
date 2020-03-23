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
            this.colorTetrad(white)
        }
    
        moveTetradDown(){
            this.deleteTetrad()
            this.y++
            this.drawTetrad()   
            }
    
        lockTetrad(){
            if (this.y>=19){
                this.locked = true;
            }
        }
    }
    
    
    let ess = new Piece(S, "blue");
    ess.drawTetrad()
    