 



$(document).ready(function() {
    // some testing to make sure the format is correct
    console.log(moment().format("dddd, MMMM Do"));
    // set variable to the current day
    var currentDay = moment().format("dddd, MMMM Do");
    // set the text to the p tag as the current day
    $("#currentDay").text(currentDay);
});