/* Pesudocoding 
- create a simple calendar application that allows a user to save events for each hour 

1) display the current day at the top of the calendar when a user opens the planner 
2) present timeblocks for standard business hours when the user scrolls down 
  - write static html for each hours 'timeblocks' and create grids for each sections
  - OR create JS code with for loop so that a timeblock is created from 9 - 6pm 
3) color-code each timeblock based on past, present, and future when the timeclock is viewed
  - past (gray)
  - present (red)
  - future (green)
  color of the time changes depending on the current time 
    - track the hour and change colour when the hour passes 

4) allow a user to enter an event when they click a timeblock 
  - addEventListener : when event is added and the button 'save' is clicked the message "Appointment added to local Storage"

5) save the event in local storage when the save button is clicked in that timeblock 
  - data-*

6) event persists between refreshes of a page 

*/
//Variables
var timeblockEl = document.getElementById("timeblock");
var currentHour = dayjs().hour();
var timeblockHour; //something to indicate the selected timeblock
var timeChange = document.getElementsByClassName("column-2");
var containerEl = document.getElementById("container");
var timeblocks = [
  {
    id: 1,
    time: "9AM",
  },
  {
    id: 2,
    time: "10AM",
  },
  {
    id: 3,
    time: "11AM",
  },
  {
    id: 4,
    time: "12PM",
  },
  {
    id: 5,
    time: "1PM",
  },
  {
    id: 6,
    time: "2PM",
  },
  {
    id: 7,
    time: "3PM",
  },
  {
    id: 8,
    time: "4PM",
  },
  {
    id: 9,
    time: "5PM",
  },
];
var currentDayEl = document.getElementById("currentDay");
var currentDateTime = new Date();

// Display today's date
console.log(currentDayEl);
console.log(currentDateTime);
currentDayEl.textContent = currentDateTime;

//creating each timeblock
const timeblock = () => {
  for (let i = 0; i < timeblocks.length; i++) {
    const timeContainer = document.createElement("div");
    timeContainer.setAttribute("class", "row time-block");

    const hours = document.createElement("div");
    hours.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    hours.textContent = timeblocks[i].time;

    timeContainer.appendChild(hours);
    document.body.appendChild(timeContainer);
  }
};
timeblock();

// // Function for current, past and future times to change color
// function changeColor() {
//   if (currentHour < timeblockHour) {
//     timeblockEl.classList.add("future"); //future hours
//   } else if (currentHour === timeblockHour) {
//     timeblockEl.classList.add("present"); //current hour
//   } else {
//     timeblockEl.classList.add("past"); //past hour
//   }
// }

// // Function for saving content when saveBtn is clicked
// var clickBtnEl = document.getElementsByClassName("savebtn");

// clickBtnEl.addEventListener("click", clickBtn);

// function clickBtn() {}
