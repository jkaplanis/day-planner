
// Check if user input exists in the local storage and add it to the 
// variable hoursData. If there is nothing then create and at the keys
// matching the available hours. 
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

// List for clicks on the save buttons, add the input to the hoursData
// object and add to local storage. 
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var key = $(this).parent().attr("id").split("-")[1];
    var userInput = $(this).parent().find("textarea").val();
    hoursData[key] = userInput;
    localStorage.setItem("hoursData", JSON.stringify(hoursData));
});

// Display date at the top of the page
var dateHeader = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").text(dateHeader);

// Save the current hour to a variable 
var currentHour = moment().hour();

// Create an array of all of the time-blocks
var hoursArray = $(".time-block")

// Run a for loop to cycle through each item in the array, 
// add data from local storage, compare current hour to 
// hour id, assign colors to represent past, present, or future
for (var i = 0; i < hoursArray.length; i++) {
    var hoursID = parseInt($(hoursArray[i]).attr("id").split("-")[1]);
    var timeBlockDiv = $(hoursArray[i]).attr("id")
    var description = hoursData[hoursID.toString()];
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

