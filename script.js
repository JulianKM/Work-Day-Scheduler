var currentDay = document.getElementById("currentDay")
currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY")

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

var button = $(".saveBtn")
button.on("click", function(event){
  var text = $(event.target).siblings(".description").val()
  var id = $(event.target).parent().attr("id")
  console.log(text)
  localStorage.setItem(id, text)
})
// loop through all hours or copy and paste every hour
var storage = localStorage.getItem("hour-9")
var textarea = $("#hour-9").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-10")
var textarea = $("#hour-10").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-11")
var textarea = $("#hour-11").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-12")
var textarea = $("#hour-12").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-13")
var textarea = $("#hour-13").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-14")
var textarea = $("#hour-14").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-15")
var textarea = $("#hour-16").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-16")
var textarea = $("#hour-16").children(".description").val(storage)
console.log(textarea)

var storage = localStorage.getItem("hour-17")
var textarea = $("#hour-17").children(".description").val(storage)
console.log(textarea)
