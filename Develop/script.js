var hoursData = JSON.parse(localStorage.getItem("hoursData"));
if (hoursData === null) {
    hoursData = {
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": ""
    };
}

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
   
    var key = $(this).parent().attr("id").split("-")[1];
    var userInput = $(this).parent().find("textarea").val(); 
    hoursData[key] = userInput;
    localStorage.setItem("hoursData", JSON.stringify(hoursData));
});

// check localStorage for hours data
// update hoursData if localStorage for hours data isn't empty
// how to determine if time is future/present/past
// let currentHour be the hour of the current time of day
// get reference to all the hours

// display date at the top of the display
var dateHeader = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").text(dateHeader);

// save the current hour to a variable 
var currentHour = moment().hour();



var hoursArray = $(".time-block")

for (var i = 0; i < hoursArray.length; i++) {
    var hoursID = parseInt($(hoursArray[i]).attr("id").split("-")[1]);
    // $(".time-block").removeClass("past present future")
    var timeBlockDiv = $(hoursArray[i]).attr("id")

    //  get description from hoursData
    var description = hoursData[hoursID.toString()];
    // display description form hours data
    $("#" + timeBlockDiv).find("textarea").val(description);

    // compare curent hour to hours ID and display correct color
    if (hoursID < currentHour) {
        $("#" + timeBlockDiv).addClass("past")
    }
    else if (hoursID === currentHour) {
        $("#" + timeBlockDiv).addClass("present")
    }
    else {
        $("#" + timeBlockDiv).addClass("future")
    };
};

