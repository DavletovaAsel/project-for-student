// HW 1 part 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = ' green'
    }else {
        gmailResult.innerHTML = 'not OK'
        gmailResult.style.color = 'red'
    }
})


//HW 1 part 2
const redBlock = document.querySelector('.child_block')
let movementY = 0
let movementX = 0

const moveSquare = () => {
    if (movementY <= 449) {
        movementY += 5
        redBlock.style.left = movementY + "px"
        setTimeout(moveSquare, 10);
    } else if (movementY >= 449 && movementX <= 449) {
        movementX += 5
        redBlock.style.top = movementX + 'px'
        setTimeout(moveSquare, 10);
    } else if (movementX >= 5 && movementY >= 449) {
        movementY += 5;
        redBlock.style.rignt = movementY + 'px';
        setTimeout(moveSquare, 10);
    } else if (movementY === 0 && movementX >= 0) {
        // Двигаем блок вверх
        movementX -= 5;
        redBlock.style.top = movementX + 'px';
    }

}

moveSquare();



//TODO HW2
const minutesBlock = document.querySelector('#minutesS')
const secondsBlock = document.querySelector('#secondsS')
const mlSecondsBlock = document.querySelector('#ml-secondsS')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let intervalId
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const changeTimer = () => {
    milliseconds +=1

    if (milliseconds === 99) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    minutesBlock.textContent = minutes.toString().padStart(2, "0");
    secondsBlock.textContent = seconds.toString().padStart(2, "0");
    mlSecondsBlock.textContent = milliseconds.toString().padStart(2, "0");
}

startButton.addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(changeTimer, 10);
    }
});

stopButton.addEventListener("click", () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = undefined;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesBlock.textContent = "00";
    secondsBlock.textContent = "00";
    mlSecondsBlock.textContent = "00";
});
