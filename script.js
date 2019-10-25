//  var $userInput = $("")
var timeBlockHour = $(".hour").text();
console.log(timeBlockHour);
var nextTimeBlockHour = timeBlockHour++;
var currentTime = moment().format("LT");
var saveBtn = $(".saveBtn");

// set data attributes to each hour input element
// later, we will change the class on that element based on whether the represented time is > or < the current time.
$("#9amRow").attr("data-time", moment("9:00 am", "h:mm a"));
$("#10amRow").attr("data-time", moment("10:00 am", "h:mm a"));
$("#11amRow").attr("data-time", moment("11:00 am", "h:mm a"));
$("#12pmRow").attr("data-time", moment("12:00 pm", "h:mm a"));
$("#1pmRow").attr("data-time", moment("1:00 pm", "h:mm a"));
$("#2pmRow").attr("data-time", moment("2:00 pm", "h:mm a"));
$("#3pmRow").attr("data-time", moment("3:00 pm", "h:mm a"));
$("#4pmRow").attr("data-time", moment("4:00 pm", "h:mm a"));
$("#5pmRow").attr("data-time", moment("5:00 pm", "h:mm a"));





$(document).ready(function () {


    // some testing to make sure the format is correct
    console.log(moment().format("dddd, MMMM Do"));
    // set variable to the current day. Formatting info found at https://momentjs.com/docs/
    var currentDay = moment().format("dddd, MMMM Do");
    // set the text to the p tag as the current day
    $("#currentDay").text(currentDay);


    // if (currentTime > timeBlockHour && currentTime < nextTimeBlockHour){
    //     $("input").addClass("present");
    // }

    // if (currentTime > timeBlockHour){
    //     $
    // }

    
    //  BUTTON HOVER 

    saveBtn.on("mouseenter", function (event) {
        $(this).addClass('hover');
    });

    saveBtn.on("mouseleave", function () {
        $(this).removeClass('hover');
    });
    

});