# Flatiron Tetris
**Tetris by [Clarion Heard](https://github.com/clheard54), [Jonny Riecke](https://github.com/Jricecake), and [Joe Avila](https://github.com/javila35)**

Overview and inspiration
<br><br>
<b>Game Preview</b>
<br /> 
<img src="./images/preview.png" width="600">
<br>

## Getting it Up and Running

To open the app, you'll have to start up a local server. In your Terminal, navigate to the TagLine directory (which you've just downloaded from git). Then type "rails s".
 ```
 rails.s
 ```
In your favorite web browser, head to "localhost:3000/" and get to saving your favorite quotes!

## How to Play Tetris

When you press "Start Game", pieces (also known as "tetrads" or "tetrominos") will start falling from the sky (ie, the top of the board). Your job is to control those pieces as they fall, and to stack them so that they fill entire rows. When a row is entirely filled, it will clear, and your points will increase. But hurry -- as more time passes, the pieces will begin to fall faster and faster! And as soon as the pieces pile up to the top of the screen, GAME OVER.

Key Commands:
→ (Arrow Right) : moves the piece to the right.</br>
← (Arrow Left) : moves the piece to the left.</br>
↓ (Arrow Down) : speeds up the piece's movement down.</br>
↑ (Arrow Up) : rotates the piece 90 degrees.</br>
Spacebar : pauses the game. (Don't cheat!)</br>

Scoring:
 - For a single filled row : 40 pts
 - Two rows filled (and cleared) at once : 100 pts
 - Three rows filled at once : 300 pts
 - Four row cleared at once : 1200 pts

   &emsp; (Note: These scores all double once you reach Level 3.)

Levels:
For every ten rows cleared, you move to the next level.

## Preview

<b>Welcome to Tetris:</b>
<br /> <br>
<img src="./images/welcome.png" width="600">
<br><br>
<b>New Highscore!:</b>
<br />
<img src="./images/winner.png" width="600">
<br><br>
<b>Leaderboard:</b>
<br />
<img src="./images/leaderboard.png" width="600">
<br><br>

## Highlights



## Credits

Thank you to...

... <a href="https://www.codeexplained.org/2018/08/create-tetris-game-using-javascript.html">CodeExplained</a> for the walkthrough of how to "draw" pieces on the screen.

... <a href="https://www.w3schools.com/html/html5_canvas.asp">W3Schools</a> for its guide to using canvas elements in HTML.

... <a href="https://www.thatsoftwaredude.com/content/8519/coding-tetris-in-javascript-part-1">The Software Dude</a>, who offered inspiration for conceiving of the tetris board as a cartesian coordinate plan.


## Contributing

Contributions are most welcome. This is very much a beginner project, and constructive criticism is appreciated. Feel free to open a pull request or branch from this project.

## License

This project is licensed under the [GNU GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)

Enjoy.