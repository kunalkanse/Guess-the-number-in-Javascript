'use strict';

let secretNum = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No Number..!');

        // when number is equals
    } else if (Number(guess) == secretNum) {
        displayMessage('🎉 Correct Number..!');

        document.querySelector(".number").textContent = secretNum;
        document.body.style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong
    } else if (guess !== secretNum) {
        if (score > 0) {
            displayMessage((guess > secretNum) ? 'Too High..!' : 'Too Low..!')

            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            displayMessage("😞 You lost the game..!")
            document.body.style.backgroundColor = 'red'
        }
    }


    // Reseting Game    
    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNum = Math.trunc(Math.random() * 20 + 1);
        displayMessage('Start guessing...');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').textContent = '';
        document.querySelector('.score').textContent = score;

        document.body.style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem'
    })



    // when number is higher
    // else if (guess > secretNum) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = "Too High..!"

    //         score--;
    //         document.querySelector('.score').textContent = score
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "😞 You lost the game..!"
    //         document.body.style.backgroundColor = 'red'
    //     }

    //     // when number is lower
    // } else if (guess < secretNum) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = "Too Low..!"

    //         score--;
    //         document.querySelector('.score').textContent = score
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "😞 You lost the game..!"
    //         document.body.style.backgroundColor = 'red'
    //     }

    // }

})
