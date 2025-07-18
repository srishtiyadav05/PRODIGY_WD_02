let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let lapsContainer = document.getElementById("laps");
let timer = null;
let lapCount = 1;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
  timer = null;
  lapsContainer.innerHTML = "";  
  lapCount = 1;
}

function lap() {
  if (timer === null) return;

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  const lapTime = `${h}:${m}:${s}`;
  const lapElement = document.createElement("div");
  lapElement.textContent = `Lap ${lapCount++}: ${lapTime}`;
  lapsContainer.appendChild(lapElement);
}
