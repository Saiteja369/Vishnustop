let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
  document.getElementById('display').innerText =
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0');
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = minutes = hours = 0;
  updateDisplay();
}
