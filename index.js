"use strict";

const countdownTimer = document.querySelector(".timer");
const christmasDate = "25 Dec 2021";

const formatTime = (time) => {
  if (time < 10) return `0${time}`;
  else return time;
};

const countdown = setInterval(() => {
  const targetDate = new Date(christmasDate);
  const currentDate = new Date();
  const totalTimeSeconds = (targetDate - currentDate) / 1000;

  const days = Math.floor(totalTimeSeconds / 3600 / 24);
  const hours = Math.floor((totalTimeSeconds / 3600) % 24);
  const minutes = Math.floor((totalTimeSeconds / 60) % 60);
  const seconds = Math.floor(totalTimeSeconds % 60);

  countdownTimer.textContent = `${days} Days ${formatTime(hours)} Hours 
                ${formatTime(minutes)} Minutes
                ${formatTime(seconds)} Seconds `;
});
