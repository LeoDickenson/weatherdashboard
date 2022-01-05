// e4077867c523709fde20e7291ca0cdf8
var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")


function fetchWeather(a) {fetch("https://api.openweathermap.org/data/2.5/weather?q=" +a+ "&appid=e4077867c523709fde20e7291ca0cdf8")
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });}

  submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    fetchWeather(userInput.value)
  })