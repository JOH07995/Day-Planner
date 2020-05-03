var todaysDate = document.querySelector("#todaysDt");
var saveBtn = document.querySelectorAll(".saveBtn");

// sets the DateTm 
var now = new Date();

// append todaysDate to the page
todaysDate.innerText = now;
console.log(now);

var currentHour = now.getHours();
console.log(currentHour)


// !If enough time, use this to apply CSS for different category of Hour
// grab the inputs
// var inputs = $("#form-control");

// loop through all of the inputs
// for (var i = 0; i < inputs.length; i++) {

    // Snatch up all elements with a data-hour attribute
    // var dataId = ($(inputs[i]).siblings(".input-group-text").attr("data-hour"))
    // console.log(dataId)


    // if (dataId < currentHour) {
        // $(".input-group-text").addClass("before");
    // } else if (dataId === currentHour) {
        // $(".input-group-text").addClass("current");
    // } else if (dataId > currentHour) {
        // $(".input-group-text").addClass("future");
    // }
// }


// Clicking the "Save" button stores the input text in local storage, allowing the text to persist after the application is refreshed.

function savePlanner() {

    if (inputs !== "") {
        var hours = {
            hour0: $("#hour0").val(),
            hour1: $("#hour1").val(),
            hour2: $("#hour2").val(),
            hour3: $("#hour3").val(),
            hour4: $("#hour4").val(),
            hour5: $("#hour5").val(),
            hour6: $("#hour6").val(),
            hour7: $("#hour7").val(),
            hour8: $("#hour8").val(),
            hour9: $("#hour9").val(),
            hour10: $("#hour10").val(),
            hour11: $("#hour11").val(),
            hour12: $("#hour12").val(),
            hour13: $("#hour13").val(),
            hour14: $("#hour14").val(),
            hour15: $("#hour15").val(),
            hour16: $("#hour16").val(),
            hour17: $("#hour17").val(),
            hour18: $("#hour18").val(),
            hour19: $("#hour19").val(),
            hour20: $("#hour20").val(),
            hour21: $("#hour21").val(),
            hour22: $("#hour22").val(),
            hour23: $("#hour23").val(),
            hour24: $("#hour24").val()
        };

        console.log(hours)

        // sets the key "hours" and stringifies the object - hours
        localStorage.setItem("hours", JSON.stringify(hours));
    }
}

// gets the "hour" from localstorage and parse (into object)
var hourEvent = JSON.parse(localStorage.getItem("hours")) || {};
console.log(hourEvent)


// sets the value of each input to local storage value (to keep the text on the page on reload)
$("#hour0").val(hourEvent.hour0),
$("#hour1").val(hourEvent.hour1),
$("#hour2").val(hourEvent.hour2),
$("#hour3").val(hourEvent.hour3),
$("#hour4").val(hourEvent.hour4),
$("#hour5").val(hourEvent.hour5),
$("#hour6").val(hourEvent.hour6),
$("#hour7").val(hourEvent.hour7),
$("#hour8").val(hourEvent.hour8),
$("#hour9").val(hourEvent.hour9),
 $("#hour10").val(hourEvent.hour10),
 $("#hour11").val(hourEvent.hour11),
 $("#hour12").val(hourEvent.hour12),
 $("#hour13").val(hourEvent.hour13),
 $("#hour14").val(hourEvent.hour14),
 $("#hour15").val(hourEvent.hour15),
 $("#hour16").val(hourEvent.hour16),
 $("#hour17").val(hourEvent.hour17),
 $("#hour18").val(hourEvent.hour18),
 $("#hour19").val(hourEvent.hour19),
 $("#hour20").val(hourEvent.hour20),
 $("#hour21").val(hourEvent.hour21),
 $("#hour22").val(hourEvent.hour22),
 $("#hour23").val(hourEvent.hour23),


// click event on the save button
$(".saveBtn").on("click", savePlanner);