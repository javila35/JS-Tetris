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
        startFalling();
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
function startFalling(){
currentPiece = getRandomPiece();
timer = setInterval(function(){
    currentPiece.moveTetradDown();
}, 800);
start = true;
};


const startButton = document.querySelector("#landing button")
startButton.addEventListener("click", function(){
startFalling();
startButton.disabled = true;
});

let isRowFull = true;
function checkRowFull(){
for(r = 0; r < 20; r++){
    let isRowFull = true;
    for( c = 0; c < 10; c++){
        isRowFull = isRowFull && (board[r][c] != white);
    };
    
    if(isRowFull){
        for( y = r; y > 1; y--){
            for( c = 0; c < 10; c++){
                board[y][c] = board[y-1][c];
            };
        };

        for( c = 0; c < 10; c++){
            board[0][c] = white;
        }
        currentScore += 10
        document.getElementById("player-score").innerText = currentScore;
    }
}
drawBoard();
}




//high score
const SCORES_URL = "http://localhost:3000/api/v1/highscores"
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
}else{
        alert("Womp-ba-domp. Game Over");
        location.reload(false);
}   
    
}

document.getElementById("scoreForm").addEventListener("submit", function(event){
event.preventDefault();
let username = event.target.username.value;
let score = currentScore;
postLeader(username, score)
modal.style.display = "none";
location.reload(false)
})


function postLeader(username, score){
fetch(SCORES_URL, {
    method:"POST",
    headers: {
        "ContentType": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({highscore: {highscore: {
        username: username,
        score: score
    }}})
})
.then(resp => resp.json())
.then(data => {
        console.log(data)
    })
}