// the get url
var url = "https://api.openweathermap.org/data/2.5/onecall?lat=";

// Grabs stuff in cities id
var userCityId = document.getElementById('cities');


var el = document.getElementById('showVal');

var userSelection = [ "Seatle", "New York", "New Orleans", "Los Angeles", "Austin"];

// console.log(userSelection);


url = url + userSelection;

function getSelectedOption(userSelection) {
    var opt;
    for ( var i = 0, len = userSelection.length; i < len; i++ ) {

        opt = userSelection[i];

        console.log(opt);
        
        if ( opt.selected === true ) {
            console.log(opt);
            return opt;
            
            
        }
    }
    return opt;
}

// get selected option in sel (reference obtained above)
var opt = getSelectedOption(userSelection);

userCityId.onclick = function () {
    el.value = userSelection.value; 
}


