$(function () {});

// Declare variables//
var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");
//planWorkday entries for each hour of the workday
var planWorkday = [
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
];

//Local Storage check for saved info//
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
  planWorkday = workEvents;
}

//Current Day for top of application//
$("#currentDay").text(today);

//Button for Saving Events//
$(".saveBtn").on("click", function () {
  var blockID = parseInt($(this).closest(".time-block").attr("id"));
  var userEntry = $.trim($(this).parent().siblings("textarea").val());

  planWorkday[blockID].event = userEntry;

  //Setting local storage//
  localStorage.setItem("workDay", JSON.stringify(planWorkday));
});
