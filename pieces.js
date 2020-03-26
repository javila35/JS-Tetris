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
    [I, "#009FDA"],
    [O, "#FECB00"],
    [Z, "#ED2939"],
    [S, "#69BE28"],
    [L, "#FF7900"],
    [J, "#0065BD"],
    [T, "#952D98"]
  ];
  

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
                checkHighScore();
                drawBoard();
                checkRowFull();
                return;
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
        setLevel();
        startFalling(rate);
    };

};
//END OF CLASS

let currentPiece = null;

//Select Random Piece
function getRandomPiece(){
let id = Math.floor(Math.random()*7);
let x = BLOCKS[id];
return new Piece(x[0], x[1]);
};

let timer = null;
let start = false;
let rate = 600;
let totalRows = 0;
let currentLevel = 1;

function setLevel(){
    
    if (totalRows == 10 && rate == 600){
        console.log(" NEXT LEVEL")
        rate = (rate - 100);
        currentLevel++;
        
    }
    if (totalRows == 20 && rate == 500){
        console.log(" NEXT LEVEL")
        rate = (rate - 100);
        currentLevel++;
    }
    if (totalRows == 30 && rate == 400){
        console.log(" NEXT LEVEL")
        rate = (rate - 100);
        increaseScore();
        currentLevel++;
    }
    if (totalRows == 40 && rate == 300){
        console.log(" NEXT LEVEL")
        rate = (rate/2);
        currentLevel++;
    }
    if (totalRows == 50 && rate == 150){
        console.log(" NEXT LEVEL")
        rate = (rate - 50);
        increaseScore();
        currentLevel++;
    }
};

let oneLineScore = 40;
let twoLineScore = 200;
let threeLineScore = 300;
let fourLineScore = 1200;

function increaseScore(){
    oneLineScore = (oneLineScore * 2);
    twoLineScore = (twoLineScore * 2);
    threeLineScore = (threeLineScore * 2);
    fourLineScore = (fourLineScore * 2);
}

function startFalling(rate){
    currentPiece = getRandomPiece();
    timer = setInterval(function(){
        currentPiece.moveTetradDown();
    }, rate);
    start = true;
};



function addScore(rowsCleared){

    if (rowsCleared == 1){
        currentScore += oneLineScore
    }
    if (rowsCleared == 2){
        currentScore += twoLineScore
    }
    if (rowsCleared == 3){
        currentScore += threeLineScore
    }
    if (rowsCleared == 4){
        currentScore += fourLineScore
    }
}


const startButton = document.querySelector("#landing button")
startButton.addEventListener("click", function(){
startFalling(rate);
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
        }
    }
}
drawBoard();
totalRows += rowCount;
addScore(rowCount);
document.getElementById("player-score").innerText = `${currentScore}`;

}




//high score
const SCORES_URL = "https://mod-3-tetris-backend.herokuapp.com/api/v1/leaders"
var modal = document.getElementById("scoreModal");

function checkHighScore(){
// fetch(SCORES_URL)
//   .then(resp => resp.json())
//   .then(data => {
//       compareScore(data);
//   })

//   function compareScore(dataArray){
//     let scores = dataArray.sort(function(a, b){
//         return b.score-a.score});
    if (currentScore > parseInt(document.getElementById("player2-score").textContent)){
    modal.style.display = "block";
    } else {
        alert("Womp-ba-domp. Game Over");
        location.reload(false);
}   
    
}

document.getElementById("scoreForm").addEventListener("submit", function(event){
    event.preventDefault();
    let username1 = event.target.username.value;
    let score1 = currentScore;
    postLeader(username1, score1)
    modal.style.display = "none";
    makeTable()
    location.reload(false)
    
})


function postLeader(user, score){
    fetch("https://mod-3-tetris-backend.herokuapp.com/api/v1/leaders", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            username: user,
            score: score
        })
    })
    .then(resp => console.log(resp))
    // .then(data => {
    //         console.log(data)
    //     })
    }
