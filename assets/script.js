// e4077867c523709fde20e7291ca0cdf8
var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")
var historyOne = document.getElementById("hs1")
var historyTwo = document.getElementById("hs2")
var historyThree = document.getElementById("hs3")
var userHistory = document.getElementsByClassName(".history")
var resetFormVar = document.getElementById("resetForm")


function fetchWeather(a) {fetch("https://api.openweathermap.org/data/2.5/weather?q=" +a+ "&appid=e4077867c523709fde20e7291ca0cdf8")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});}

function addHistory(a) {
    historyOne.textContent = a
}

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    fetchWeather(userInput.value);
    addHistory(userInput.value);
    resetFormVar.reset()
    console.log(historyOne)
})