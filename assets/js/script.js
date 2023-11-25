/* Pesudocoding 
- create a simple calendar application that allows a user to save events for each hour 

1) display the current day at the top of the calendar when a user opens the planner 
  - access third party library to pull the current time 

2) present timeblocks for standard business hours when the user scrolls down 
  - write static html for each hours 'timeblocks'
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

// Display today's date 

var currentDayEl = document.getElementById ('currentDay');

currentDateTime = new Date();
console.log(currentDayEl);
console.log (currentDateTime);
currentDayEl.textContent = currentDateTime;

// Create Time blocks for standard business hours

