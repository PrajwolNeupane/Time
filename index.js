var element = document.getElementById("time");
var time = 1;
// Specify the target date and time
const targetDate = new Date('2023-02-04T22:05:45');  // Example: January 1, 2022, 12:00:00

function getTime(){
    const currentDate = new Date();

// Calculate the time difference
const duration = currentDate - targetDate;

// Convert the duration to the desired units (e.g., milliseconds, seconds, minutes)
const milliseconds = Math.abs(duration);
const seconds = Math.floor(milliseconds / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);
const years = Math.floor(days / 365);
const months = Math.floor(days / 30) - years * 12;
const realDays = days -  months*30 - years*12*30;
// const months = 
// const months = days % 30;


element.innerText = `${years}/${months}/${realDays} ${hours % 24}:${minutes % 60}:${seconds % 60}`;
    
}
getTime();
setInterval(()=>{
    getTime();
},1000);
