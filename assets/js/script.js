var currentDayEl = document.getElementById("currentDay");

var currentTime = moment();

currentDayEl.append(currentTime.format("MMMM Do, YYYY"));

var containerEl = document.getElementById("schedule-time-blocks");

var addTimeBlocks = function(hour){
    var timeBlockEl = document.createElement("div");
    timeBlockEl.className = "row time-block";

    var hourColumnEl = document.createElement("div");
    hourColumnEl.className = "col-sm-2 p-0";
    var timeDiv = document.createElement("div");
    timeDiv.className = "hour";
    timeDiv.textContent = moment(hour, "HH").format("h:mm A");
    hourColumnEl.append(timeDiv);

    var textColumnEl = document.createElement("div");
    textColumnEl.className = "col-sm-8 p-0";
    var textArea = document.createElement("textarea");
    textArea.className = "description form-control";
    textArea.textContent = localStorage.getItem(hour);
    if(hour < currentTime.hour()) {
        textColumnEl.classList.add("past");
        textArea.classList.add("past");
    }
    else if (hour > currentTime.hour()){
        textColumnEl.classList.add("future");
        textArea.classList.add("future");
    }
    else {
        textColumnEl.classList.add("present");
        textArea.classList.add("present");
    }
    textColumnEl.append(textArea);
    
    var saveColumnEl = document.createElement("div");
    saveColumnEl.className = "col-sm-2 p-0 saveBtn";
    var saveBtn = document.createElement("button");
    // saveBtn.className = "saveBtn";
    var saveIconEl = document.createElement("i");
    saveIconEl.className = "far fa-save";
    saveBtn.append(saveIconEl);
    saveColumnEl.append(saveBtn);

    saveBtn.addEventListener("click", function (){
        localStorage.setItem(hour, textArea.value);
    });
        
      timeBlockEl.append(hourColumnEl, textColumnEl, saveColumnEl);
      containerEl.append(timeBlockEl);
    
}
 for (var i = 9; i < 18; i++) {
     addTimeBlocks(i)
     
 }