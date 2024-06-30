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
  const now = moment();

  const duration = moment.duration(now.diff(targetDate));

  const years = Math.floor(duration.asYears());
  const months = Math.floor(duration.asMonths()) % 12;
  const days = Math.floor(duration.asDays()) % 30;
  const hours = Math.floor(duration.asHours()) % 24;
  const minutes = Math.floor(duration.asMinutes()) % 60;
  const seconds = Math.floor(duration.asSeconds()) % 60;


  element.innerText = `${years}/${months}/${days} ${hours}:${minutes}:${seconds}`;
  document.getElementById("days").innerHTML = `Day : ${Math.floor(duration / (1000 * 60 * 60 * 24))}`;
}

getTime();

setInterval(() => {
  getTime();
}, 1000);
