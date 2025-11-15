const time = document.getElementById("time");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");

const pad = (number) => number.toString().padStart(2, "0");

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = pad(now.getMinutes());
  const se = pad(now.getSeconds());

  const ampmValue = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formatt = pad(hours);

  time.textContent = `${formatt}:${minutes}`;

  seconds.textContent = se;
  ampm.textContent = ampmValue;

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN","FEB","MAR","APR","MAY","JUN",
    "JUL","AUG","SEP","OCT","NOV","DEC"
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dateValue = now.getDate();
  const year = now.getFullYear();

  date.textContent = `${dayName}, ${monthName} ${dateValue}, ${year}`;
}

updateTime();
setInterval(updateTime, 1000);
