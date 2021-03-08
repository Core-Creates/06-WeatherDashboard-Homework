// the get url
var url = "https://api.openweathermap.org/data/2.5/onecall?lat=";

// Grabs stuff in cities id
var userCityId = document.getElementById('cities');

var userSelection = [ "Seatle", "New York", "New Orleans", "Los Angeles", "Austin"];

console.log(userSelection.value);


url = url + userSelection;

function getSelectedOption(userSelection) {
    var opt;
    for ( var i = 0, len = userSelection.length; i < len; i++ ) {

        opt = userSelection.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}

// get selected option in sel (reference obtained above)
var opt = getSelectedOption(userSelection);

// display its value and text
console.log( opt.value );
console.log( opt.text );
