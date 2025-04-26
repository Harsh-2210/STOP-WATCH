let date = document.querySelector(".date");
let currentDate = new Date();

// Check if .date element exists before updating
if (date) 
    {date.innerHTML = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;}

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

stopBtn.disabled = true;
resetBtn.disabled = true;

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalRef; // Store interval reference

let clockBox = document.querySelector(".clock");
clockBox.innerHTML = `${hours.toString().padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  clearInterval(intervalRef); // Stop existing interval before starting a new one

  intervalRef = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    clockBox.innerHTML = `${hours.toString().padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  clearInterval(intervalRef);
});

resetBtn.addEventListener("click", () => {
  seconds = 0;
  minutes = 0;
  hours = 0;
  clockBox.innerHTML = `${hours.toString().padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});
