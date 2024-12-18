
let currentPlayer = 'X'; 
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        document.querySelectorAll('.cell')[index].innerText = currentPlayer;
        checkResult();
        if (gameActive) {
            currentPlayer = 'O'; 
            computerMove();
        }
    }
}

function computerMove() {
    setTimeout(() => {
        let availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
        if (availableMoves.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableMoves.length);
            const move = availableMoves[randomIndex];
            board[move] = currentPlayer;
            document.querySelectorAll('.cell')[move].innerText = currentPlayer;
            checkResult();
            currentPlayer = 'X'; 
        }
    }, 1000); 
}

function checkResult() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            if (board[a] === 'X') {
                document.getElementById('ticTacToeResult').innerText = 'You win!';
            } else {
                document.getElementById('ticTacToeResult').innerText = 'Computer wins!';
            }
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('ticTacToeResult').innerText = 'It\'s a draw!';
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('ticTacToeResult').innerText = '';
}


resetGame();