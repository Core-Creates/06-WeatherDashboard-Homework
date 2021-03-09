// the get url
var url = "https://api.openweathermap.org/data/2.5/onecall?lat=";

// Grabs stuff in cities id
var userCityId = document.getElementById('cities');


var el = document.getElementById('showVal');

var userSelection = ["Seatle", "New York", "New Orleans", "Los Angeles", "Austin"];

// console.log(userSelection);



// old code
url = url + userSelection;

function getSelectedOption(userSelection) {
    var opt;
    for (var i = 0, len = userSelection.length; i < len; i++) {

        opt = userSelection[i];

        console.log(opt);

        if (opt.selected === true) {
            // console.log(opt);
            break;


        }
    }
    return opt;
}



// get selected option in userSelection (reference obtained above)
var opt = getSelectedOption(userSelection);

userCityId.onclick = function () {
    selection = window.getSelection();
    localStorage.setItem("selected", selection);
    el = selection.childNodes;
    console.log(el);

}


