$(document).ready(function () {


    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll("aside");
        // var instances = M.Sidenav.init(elems, options);
      });

    // the get url
    
    var url;
    var lat;
    var lon;

    // Grabs stuff in cities id
    var userCityId = document.getElementById('cities');
    var values = document.getElementById('showVal');

    var userSelection = ["Seatle", "New York", "New Orleans", "Los Angeles", "Austin"];



    userCityId.addEventListener('click', function(userSelection){

        selection = window.getSelection();
        localStorage.setItem("selected", selection.anchorNode.data);

        console.log(selection);

        if (selection.anchorNode.data == "Seatle") {

            lat = "47.608";
            lon =  "-122.335";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            document.getElementById('showVal').innerHTML = selection.anchorNode.data;


            console.log(url);
            console.log(selection.anchorNode.data);

        }
        else if (selection.anchorNode.data == "New York") {

            lat = "47.608";
            lon =  "-122.335";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            document.getElementById('showVal').innerHTML = selection.anchorNode.data;

            
            console.log(url);
            console.log(selection.anchorNode.data);

        }
        else if (selection.anchorNode.data == "New Orleans") {

            lat = "47.608";
            lon =  "-122.335";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            document.getElementById('showVal').innerHTML = selection.anchorNode.data;
  
            console.log(url);
            console.log(selection.anchorNode.data);
        }
        else if (selection.anchorNode.data == "Los Angeles") {

            lat = "47.608";
            lon =  "-122.335";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            document.getElementById('showVal').innerHTML = selection.anchorNode.data;

            
            console.log(url);
            console.log(selection.anchorNode.data);
        }
        else if (selection.anchorNode.data == "Austin") {

            lat = "47.608";
            lon =  "-122.335";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            document.getElementById('showVal').innerHTML = selection.anchorNode.data;
            
            
            console.log(url);
            console.log(selection.anchorNode.data);

        }
        else {
            
            console.log("not an option");

        }

        function loadDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                values.innerHTML = this.responseText;
              }
            }
        }
    })

});