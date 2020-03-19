// display date at the top of the display
var dateHeader = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").text(dateHeader);
// save the current hour to a variable 

var currentHour = moment().hour();



var hoursArray = $(".time-block")

for(var i = 0; i < hoursArray.length; i++){
    var hoursID = parseInt($(hoursArray[i]).attr("id").split("-")[1]);
    // $(".time-block").removeClass("past present future")
    var test = $(hoursArray[i]).attr("id")
    
    if (hoursID < currentHour){
        
        $("#" + test).addClass("past")
    }
    else if(hoursID === currentHour){
        // $(".time-block").removeClass("past")
        // $(".time-block").removeClass("future")
        $("#" + test).addClass("present")
    }
    
    else{
        // $(".time-block").removeClass("past")
        // $(".time-block").removeClass("present")
        $("#" + test).addClass("future")
    };
};


// if time block hour is before current hour from moment (saved as variable)
// then the block with be grey

// if time block hour is equal to current hour from moment
// then the time block is red

// if time block is later than current hour from moment
// then the time block is green (future)

// if text is entered in timeblock and save is clicked (.on ("click", function(){}))
// then add to local storage

// var parentID;
// var inputText;
// var displayText;

// $(".saveBtn").on("click", function(){
//     parentID = $(this).parent().attr("id")
//     inputText = $(".description").val();
//     localStorage.setItem("input", JSON.stringify(inputText));
// })
// displayText = JSON.parse(localStorage.getItem("input"));
// $("parentID > textarea").text(displayText);
var parentID;
var inputText;
$(".saveBtn").on("click", handleSave);

function handleSave(event) {
    parentID = $(this).parent().attr("id")
    console.log(parentID);
    inputText = $(".description").val();
    localStorage.setItem(parentID, JSON.stringify(inputText));

}


// when they refresh the page persists (get from local storage, append, text)

//  past = grey present = red future = green