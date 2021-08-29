var currentDayEl = document.querySelector("#currentDay");

var currentTime = moment();

currentDayEl.append(currentTime.format("MMMM Do YYYY"));

var containerEl = document.querySelector(".container");

var addTimeBlocks = function(hour){
    var timeBlockEl = document.createElement("div");
    timeBlockEl.className = "row time-block";

    var hourColumnEl = document.createElement("div");
    hourColumnEl.className = "col-sm-2 p-0";
    var timeDiv = document.createElement("div");
    timeDiv.className = "hour";
    timeDiv.textContent = moment(hour, "HH".format("h:mm A"));
    hourColumn.append(timeDiv);
}