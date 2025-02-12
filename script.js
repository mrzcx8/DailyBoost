// Pomodoro Timer
let timer = 25 * 60; // 25 minutes in seconds
let isRunning = false;
const timerDisplay = document.getElementById('timer-display');

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    const interval = setInterval(() => {
      if (timer > 0) {
        timer--;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      } else {
        clearInterval(interval);
        isRunning = false;
        alert("Time's up!");
      }
    }, 1000);
  }
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', () => isRunning = false);
document.getElementById('reset-timer').addEventListener('click', () => {
  timer = 25 * 60;
  timerDisplay.textContent = "25:00";
  isRunning = false;
});

// To-Do List
const taskList = document.getElementById('task-list');
document.getElementById('add-task').addEventListener('click', () => {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Goal Tracker
const goalList = document.getElementById('goal-list');
document.getElementById('add-goal').addEventListener('click', () => {
  const goalInput = document.getElementById('new-goal');
  const goalText = goalInput.value.trim();
  if (goalText) {
    const li = document.createElement('li');
    li.textContent = goalText;
    goalList.appendChild(li);
    goalInput.value = '';
  }
});

// Inspirational Quotes
const quotes = [
  "Believe in yourself and all that you are.",
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];
document.getElementById('generate-quote').addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-display').textContent = randomQuote;
});