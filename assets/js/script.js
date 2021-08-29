var currentDayEl = document.querySelector("#currentDay");

var currentTime = moment();

currentDayEl.append(currentTime.format('MMMM Do YYYY, h:mm:ss a'));

var containerEl = document.querySelector(".container");

var addTimeBlocks = function(hour){
    var timeBlockEl = document.createElement("div");
    timeBlockEl.className = "row time-block";
    
}