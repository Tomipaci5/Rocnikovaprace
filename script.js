let words = [
    { word: 'html'},
    { word: 'css'},
    { word: 'java'},
    { word: 'node'},
    { word: 'json'},
    { word: 'loop'},
    { word: 'code'},
    { word: 'byte',},
    { word: 'debug' },
    { word: 'array' },
    { word: 'class'},
    { word: 'stack'},
    { word: 'test'},
    { word: 'file'},
    { word: 'task'},
    { word: 'user'}
];
let selectedWord = '';
let guessedLetters = [];
let attempts = 5;
let hintsUsed = 0; 

function startGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    guessedLetters = [];
    attempts = 5;
    hintsUsed = 0; 
    document.getElementById('result').innerText = '';
    updateWordDisplay();
    updateAvailableLetters();
    createAlphabet();
    updateAttemptsDisplay();
}

function updateWordDisplay() {
    const wordDisplay = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    document.getElementById('wordDisplay').innerText = wordDisplay;
}

function updateAvailableLetters() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const availableLetters = alphabet.split('').filter(letter => !guessedLetters.includes(letter)).join(' ');
    document.getElementById('availableLetters').innerText = availableLetters;
}

function createAlphabet() {
    const alphabetContainer = document.getElementById('alphabet');
    alphabetContainer.innerHTML = ''; 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    alphabet.split('').forEach(letter => {
        const letterButton = document.createElement('button');
        letterButton.innerText = letter;
        letterButton.className = 'letter-button';
        letterButton.onclick = () => guessLetter(letter);
        alphabetContainer.appendChild(letterButton);
    });
}

function guessLetter(guessedLetter) {
    if (guessedLetter && !guessedLetters.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        if (!selectedWord.includes(guessedLetter)) {
            attempts--;
        }
        updateWordDisplay();
        updateAvailableLetters();
        updateAttemptsDisplay(); 
        checkGameStatus();
        disableLetterButton(guessedLetter);
    }
}

function updateAttemptsDisplay() {
    document.getElementById('attempts').innerText = `Attempts Remaining: ${attempts}`;
}

function disableLetterButton(letter) {
    const buttons = document.querySelectorAll('.letter-button');
    buttons.forEach(button => {
        if (button.innerText === letter) {
            button.disabled = true;
            button.classList.add('disabled');
        }
    });
}

function checkGameStatus() {
    if (attempts === 0) {
        document.getElementById('result').innerText = `Game Over! The word was "${selectedWord}".`;
    } else if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
        document.getElementById('result').innerText = `Congratulations! You've guessed the word "${selectedWord}".`;
    }
}

function resetGame() {
    startGame();
}

function giveHint() {
    if (hintsUsed < 1) { 
        const unrevealedLetters = selectedWord.split('').filter(letter => !guessedLetters.includes(letter));
        if (unrevealedLetters.length > 0) {
            const randomLetter = unrevealedLetters[Math.floor(Math.random() * unrevealedLetters.length)];
            guessedLetters.push(randomLetter);
            hintsUsed++; 
            updateWordDisplay();
            updateAvailableLetters();
            disableLetterButton(randomLetter);
        } else {
            document.getElementById('result').innerText = 'No more hints available!';
        }
    } else {
        document.getElementById('result').innerText = 'You have used all your hints!';
    }
}


window.onload = startGame;