

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
    var weekForcast = document.getElementById('weekWeather');

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

            url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&daily=7&appid=${API_key}`;
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
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like} °F`;
                    initMap(lat, lon);

                    console.log(data.daily);


                }
            });

            $.ajax({
                url: url2,
                dataType: "json",
                success: function (data) {
                    


                    city.innerHTML = `${selection.anchorNode.data} \n`;
                    weekForcast.innerHTML = `<div class ="card" style="width: 90%; text-align: center; padding: 10px; margin-left: 0px; ">
                    \n 7 Day Forcast: \n
                    <p> Today: ${data.list[0].main.temp} °F </p>

                    <p> Tomorrow : ${data.list[1].main.temp} °F </p>

                    <p> Next day: ${data.list[2].main.temp} °F </p>

                    <p> Next day: ${data.list[3].main.temp} °F </p>

                    <p> Next day: ${data.list[4].main.temp} °F </p>

                    <p> Next day: ${data.list[5].main.temp} °F </p>

                    <p> Next day: ${data.list[6].main.temp} °F </p>
                    </div>`;
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

            url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&daily=7&appid=${API_key}`;


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
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like} °F`;
                    initMap(lat, lon);


                }
            });

            $.ajax({
                url: url2,
                dataType: "json",
                success: function (data) {
                    


                    city.innerHTML = `${selection.anchorNode.data} \n`;
                    weekForcast.innerHTML = `<div class ="card" style="width: 90%; text-align: center; padding: 10px; margin-left: 0px; height: 200px;">
                    <p> 7 Day Forcast: \n
                    Today: ${data.list[0].main.temp} °F
                    Tomorrow: ${data.list[1].main.temp} °F
                    Next day: ${data.list[2].main.temp} °F 
                    Next day: ${data.list[3].main.temp} °F 
                    Next day: ${data.list[4].main.temp} °F
                    Next day: ${data.list[5].main.temp} °F 
                    Next day: ${data.list[6].main.temp} °F </p>
                    </div>`;
                    initMap(lat, lon);


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

            url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&daily=7&appid=${API_key}`;


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
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like} °F`;
                    initMap(lat, lon);


                }
            });

            $.ajax({
                url: url2,
                dataType: "json",
                success: function (data) {
                    


                    city.innerHTML = `${selection.anchorNode.data} \n`;
                    weekForcast.innerHTML = `<div class ="card" style="width: 90%; text-align: center; padding: 10px; margin-left: 0px; height">
                    7 Day Forcast: \n
                    <p> Today: ${data.list[0].main.temp} °F\n 

                    Tomorrow : ${data.list[1].main.temp} °F\n

                    Next day: ${data.list[2].main.temp} °F\n

                    Next day: ${data.list[3].main.temp} °F\n

                    Next day: ${data.list[4].main.temp} °F\n

                    Next day: ${data.list[5].main.temp} °F\n

                    Next day: ${data.list[6].main.temp} °F\n </p>
                    </div>`;
                    initMap(lat, lon);


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

            url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&daily=7&appid=${API_key}`;

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
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like} °F`;
                    initMap(lat, lon);

                }
            });

            $.ajax({
                url: url2,
                dataType: "json",
                success: function (data) {
                    


                    city.innerHTML = `${selection.anchorNode.data} \n`;
                    weekForcast.innerHTML = `<div class ="card" style="width: 90%; text-align: center; padding: 10px; margin-left: 0px; ">
                    \n 7 Day Forcast: \n
                    <p> Today: ${data.list[0].main.temp} °F\n </p>

                    <p> Tomorrow : ${data.list[1].main.temp} °F\n </p>

                    <p> Next day: ${data.list[2].main.temp} °F\n </p>

                    <p> Next day: ${data.list[3].main.temp} °F\n </p>

                    <p> Next day: ${data.list[4].main.temp} °F\n </p>

                    <p> Next day: ${data.list[5].main.temp} °F\n </p>

                    <p> Next day: ${data.list[6].main.temp} °F\n </p>
                    </div>`;
                    initMap(lat, lon);


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

            url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&daily=7&appid=${API_key}`;


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
                    feelsLike.innerHTML = `\nFeels like: ${data.current.feels_like} °F`;


                    initMap(lat, lon);


                }
            });

            $.ajax({
                url: url2,
                dataType: "json",
                success: function (data) {
                    


                    city.innerHTML = `${selection.anchorNode.data} \n`;
                    weekForcast.innerHTML = `<div class ="card" style="width: 90%; text-align: center; padding: 10px; margin-left: 0px; ">
                    \n 7 Day Forcast: \n
                    <p> Today: ${data.list[0].main.temp} °F\n </p>

                    <p> Tomorrow : ${data.list[1].main.temp} °F\n </p>

                    <p> Next day: ${data.list[2].main.temp} °F\n </p>

                    <p> Next day: ${data.list[3].main.temp} °F\n </p>

                    <p> Next day: ${data.list[4].main.temp} °F\n </p>

                    <p> Next day: ${data.list[5].main.temp} °F\n </p>

                    <p> Next day: ${data.list[6].main.temp} °F\n </p>
                    </div>`;
                    initMap(lat, lon);


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
        center: { lat: +lat, lng: +lng },
        zoom: 10,

    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
    loadMapAt(new google.maps.LatLng(geo.lat, geo.lng));

}