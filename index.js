let wins = 0;
let draws = 0;
let losses = 0;

function computersMove() {
    console.log('computersMove running')
    let randInt =  Math.floor(Math.random()*3) // generates 0   , 1, or 2
    if (randInt === 0){
        return "rock"
    }
    if (randInt === 1){
        return "paper"
    }
    if (randInt === 2){
        return "scissors"
    }

}

// computersMove();
    //this funtion
    //1. increments wins/draws/losses depending on the result
    //2. updates the number of wins/draws/losses displayed on the website.
function updateScore(result) {
    // result one of "won" "draw" "lost"
    if (result === "won") {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }
    if (result === "draw") {
        draws = draws + 1;
        document.getElementById("draws").innerHTML = draws;
    }
    if (result === "lost") {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }
   
}

function onClickRock() {
    let cm = computersMove();
    if (cm === "rock") {
        //tied
        updateScore("draw");
        alert("Draw!")
    }
    if (cm === "paper"){
        //lost
        updateScore("lost");
        alert("You lost!")
    }
    if ( cm === "scissors") {
        // won
        updateScore("won");
        alert("You won!")
    }
}
function onClickPaper() {
    let cm = computersMove();
    if (cm === "rock") {
        //won
        updateScore("won");
        alert("You won!");
    }
    if (cm === "paper") {
        //tie
        updateScore ("draw");
        alert("Draw!");
    }
    if (cm === "scissors") {
        //won
        updateScore ("lost");
        alert("You lose!");
    }
}
function onClickScissors() {
    let cm = computersMove();
    if (cm === "rock") {
        //lost
        updateScore ("lost");
        alert("You lose!");
    }
    if (cm === "paper") {
        //won
        updateScore ("won");
        alert("You won!");
    }
    if (cm === "scissors") {
        //draw
        updateScore ("draw");
        alert("Draw!");
    }
}
document.getElementById("scissors").onclick = onClickScissors;
document.getElementById("rock").onclick = onClickRock;
document.getElementById("paper").onclick = onClickPaper;