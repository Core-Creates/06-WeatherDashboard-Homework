

$(document).ready(function () {



    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll("aside");
        // var instances = M.Sidenav.init(elems, options);
    });

    // the get url

    var url;
    var lat;
    var lon;
    var googleMapKey = "AIzaSyCtFzdbJA-H72PJ4sIY0gGWT9mDwEloPkA";

    // Grabs stuff in cities id
    var userCityId = document.getElementById('cities');
    var values = document.getElementById('showVal');
    var weather = document.getElementById('main-content');
    var city = document.getElementById('cityName');
    var feelsLike = document.getElementById('feels');

    // var userSelection = ["Seatle", "New York", "New Orleans", "Los Angeles", "Austin"];


    userCityId.addEventListener('click', function () {

        selection = window.getSelection();
        localStorage.setItem("selected", selection.anchorNode.data);

        // console.log(selection);

        if (selection.anchorNode.data == "Seattle") {

            lat = "47.606";
            lon = "-122.332";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            values.innerHTML = selection.anchorNode.data;


            $.ajax({
                url: url,
                dataType: "json",
                success: function (data) {
                    currentTemperature = data.current.temp;

                    console.log("Current temp: " + currentTemperature);
                    city.innerHTML = `${selection.anchorNode.data} \n`;

                    weather.innerHTML = `\nCurrent Temperature: ${currentTemperature} °F `;
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like}`;
                    initMap(lat, lon);


                }
            });




            // console.log(url);
            // console.log(selection.anchorNode.data);

        }
        else if (selection.anchorNode.data == "New York") {

            lat = "	40.730610";
            lon = "-73.935242";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&dt=${time}&appid=${API_key}`;


            // Writes the city name to the showVal section of the HTML
            values.innerHTML = selection.anchorNode.data;

            $.ajax({
                url: url,
                dataType: "json",
                success: function (data) {
                    currentTemperature = data.current.temp;

                    console.log("Current temp: " + currentTemperature);
                    city.innerHTML = `${selection.anchorNode.data} \n`;

                    weather.innerHTML = `\nCurrent Temperature: ${currentTemperature} °F `;
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like}`;


                }
            });


            // console.log(url);
            // console.log(selection.anchorNode.data);

        }
        else if (selection.anchorNode.data == "New Orleans") {

            lat = "29.951065";
            lon = "-90.071533";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&dt=${time}&appid=${API_key}`;


            // Writes the city name to the showVal section of the HTML
            values.innerHTML = selection.anchorNode.data;

            $.ajax({
                url: url,
                dataType: "json",
                success: function (data) {
                    currentTemperature = data.current.temp;

                    console.log("Current temp: " + currentTemperature);
                    city.innerHTML = `${selection.anchorNode.data} \n`;

                    weather.innerHTML = `\nCurrent Temperature: ${currentTemperature} °F `;
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like}`;


                }
            });

            // console.log(url);
            // console.log(selection.anchorNode.data);
        }
        else if (selection.anchorNode.data == "Los Angeles") {

            lat = "34.052235";
            lon = "-118.243683";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&dt=${time}&appid=${API_key}`;

            // Writes the city name to the showVal section of the HTML
            values.innerHTML = selection.anchorNode.data;

            $.ajax({
                url: url,
                dataType: "json",
                success: function (data) {
                    currentTemperature = data.current.temp;

                    console.log("Current temp: " + currentTemperature);
                    city.innerHTML = `${selection.anchorNode.data} \n`;

                    weather.innerHTML = `\nCurrent Temperature: ${currentTemperature} °F`;
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like}`;

                }
            });


            // console.log(url);
            // console.log(selection.anchorNode.data);
        }
        else if (selection.anchorNode.data == "Austin") {

            lat = "	30.266666";
            lon = "-97.733330";
            time = "1586468027";
            API_key = "572c06f39e6d6617f9c6f6a00e8fe448";
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&dt=${time}&appid=${API_key}`;


            // Writes the city name to the showVal section of the HTML
            values.innerHTML = selection.anchorNode.data;

            $.ajax({
                url: url,
                dataType: "json",
                success: function (data) {
                    currentTemperature = data.current.temp;

                    console.log("Current temp: " + currentTemperature);
                    city.innerHTML = `${selection.anchorNode.data} \n`;

                    weather.innerHTML = `Current Temperature: ${currentTemperature} °F `;
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like}`;


                }
            });


            // console.log(url);
            // console.log(selection.anchorNode.data);

        }
        else {

            console.log("not an option");

        }

        function loadDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    ob = this.responseText;

                }
            }
        }
    })

});

let maps;

function initMap(lat, lng) {

    map = new google.maps.Map(document.getElementById("map"), {
        scaleControl: true,
        center: { lat: +lat, lng: +lng},
        zoom: 10,
        
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    loadMapAt(new google.maps.LatLng(geo.lat, geo.lng));

}