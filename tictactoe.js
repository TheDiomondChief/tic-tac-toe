var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

function checkWinner() {
    for (var i = 0; i < 8; i++) {
        var matches = 0
        for (var j = 0; j < 3; j++) {
            var cellid = winningCombinations[i][j]
            if (currentPlayer === document.getElementById(cellid).innerHTML) {
                matches++
            } else {
                break
            }
            if (matches === 3) {
                return true
            }
        }
    }
    return false
}
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
}

function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
    }
}


handleClick = function (event) {
    var cell = event.target;
    if (cell.innerHTML != "") {
        return
    }

    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    if (checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
    }

    if (checkDraw()) {
        alert("Draw!");
        resetGame();
    }

    // Swap players
    currentPlayer = nextPlayer;
}

var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}