currentDay = document.getElementById('currentDay')
currentDay.textContent = dayjs().format("MMMM, dddd, D")

var todayHour = dayjs().format("HH");
var hourAM = $(".am");
var hourPM = $(".pm");
var parentEl, divTextHour;

if (todayHour > 12) {
  var todayhour = todayHour - 12;
  for (var j = 0; j < hourAM.length; j++) {
    parentEl = hourAM[j].parentElement;
    parentEl.classList.add("past");
  }
  for (var h = 0; h < hourPM.length; h++) {
    divTextHour = Number(hourPM[h].innerText.replace("PM", ""));
    if (divTextHour === 12) {
      parentEl = hourPM[h].parentElement;
      parentEl.classList.add("past");
    }
    if (divTextHour < todayhour) {
      parentEl = hourPM[h].parentElement;
      parentEl.classList.add("past");
    }
    if (divTextHour === todayhour) {
      parentEl = hourPM[h].parentElement;
      parentEl.classList.add("present");
    }
    if (divTextHour > todayhour && divTextHour !== 12) {
      parentEl = hourPM[h].parentElement;
      parentEl.classList.add("future");
    }
  }
}
if (todayHour < 12) {
  for (var h = 0; h < hourPM.length; h++) {
    parentEl = hourPM[h].parentElement;
    parentEl.classList.add("future");
  }
  for (var j = 0; j < hourAM.length; j++) {
    divTextHour = Number(hourAM[j].innerText.replace("AM", ""));
    if (divTextHour < todayHour) {
      parentEl = hourAM[j].parentElement;
      parentEl.classList.add("past");
    }
    if (divTextHour > todayHour) {
      parentEl = hourAM[j].parentElement;
      parentEl.classList.add("future");
    }
    if (divTextHour === todayHour) {
      parentEl = hourAM[j].parentElement;
      parentEl.classList.add("present");
    }
  }
}
if (todayHour === 12) {
  parentEl = hourPM[0].parentElement;
  parentEl.classList.add("present");
}

var button = $(".saveBtn")
button.on("click", function(event){
  var text = $(event.target).siblings(".description").val()
  console.log(text)
  localStorage.setItem("9am", text)
})

var storage = localStorage.getItem("9am")
var textarea = $("#hour-9").children(".description").val(storage)
console.log(textarea)