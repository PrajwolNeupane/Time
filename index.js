var element = document.getElementById("time");
var time = 1;
// var animation = bodymovin.loadAnimation({
//   container: document.getElementById("animtaion"),
//   path: "animation.json",
//   renderer: "svg",
//   name: "Demo Animation",
// });

const targetDate = new Date("2023-02-04T22:05:45");

function getTime() {
  const currentDate = new Date(); 

  // Calculate the time difference in milliseconds
  const duration = currentDate - targetDate;

  // Convert the duration to the desired units (e.g., milliseconds, seconds, minutes)
  const seconds = Math.floor(duration / 1000) % 60;
  const minutes = Math.floor(duration / (1000 * 60)) % 60;
  const hours = Math.floor(duration / (1000 * 60 * 60)) % 24;
  const days = Math.floor(duration / (1000 * 60 * 60 * 24)) % 30;
  const months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30.44)) % 12; // Average days per month
  const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));

  element.innerText = `${years}/${months}/${days} ${hours}:${minutes}:${seconds}`;
  document.getElementById("days").innerHTML = `Day : ${Math.floor(duration / (1000 * 60 * 60 * 24))}`;
}

getTime();

setInterval(() => {
  getTime();
}, 1000);
