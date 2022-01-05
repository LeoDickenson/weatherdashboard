var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")

var historyOne = document.getElementById("hs1")
var historyTwo = document.getElementById("hs2")
var historyThree = document.getElementById("hs3")

var resetFormVar = document.getElementById("resetForm")

var todayTemp = document.getElementById('todayTemp')
var todayWind = document.getElementById('todayWind')
var todayHumid = document.getElementById('todayHumid')

var day1Temp = document.getElementById('day1Temp')
var day2Temp = document.getElementById('day2Temp')
var day3Temp = document.getElementById('day3Temp')
var day4Temp = document.getElementById('day4Temp')
var day5Temp = document.getElementById('day5Temp')

var day1Wind = document.getElementById('day1Wind')
var day2Wind = document.getElementById('day2Wind')
var day3Wind = document.getElementById('day3Wind')
var day4Wind = document.getElementById('day4Wind')
var day5Wind = document.getElementById('day5Wind')

var day1Humid = document.getElementById('day1Humid')
var day2Humid = document.getElementById('day2Humid')
var day3Humid = document.getElementById('day3Humid')
var day4Humid = document.getElementById('day4Humid')
var day5Humid = document.getElementById('day5Humid')

historyOne.textContent = localStorage.getItem("histSlot1")
historyTwo.textContent = localStorage.getItem("histSlot2")
historyThree.textContent = localStorage.getItem("histSlot3")

function fetchWeather(a) {fetch("https://api.openweathermap.org/data/2.5/weather?q=" +a+ "&appid=e4077867c523709fde20e7291ca0cdf8").then(function (response) {
    return response.json();}).then(function (data) {
        let todayTempVar = 'Temperature: ' + data.main.temp + ' °K'
        let todayWindVar = 'Wind: ' + data.wind.speed + 'mph'
        let todayHumidVar = 'Humidity: ' + data.main.humidity + '%'

        todayTemp.textContent = todayTempVar
        todayWind.textContent = todayWindVar
        todayHumid.textContent = todayHumidVar
    });}

function fetchForecast(a) {fetch('https://api.openweathermap.org/data/2.5/forecast?q='+a+'&appid=bf491733ab29f033db68d7236ba0bd4a')
    .then(function (response) {return response.json();})
        .then(function (data){
            let day1TempVar = 'Temperature: ' + data.list[0].main.temp + ' °K'
            let day1WindVar = 'Wind: ' + data.list[0].wind.speed + 'mph'
            let day1HumidVar = 'Humidity: ' + data.list[0].main.humidity + '%'

            let day2TempVar = 'Temperature: ' + data.list[1].main.temp + ' °K'
            let day2WindVar = 'Wind: ' + data.list[1].wind.speed + 'mph'
            let day2HumidVar = 'Humidity: ' + data.list[1].main.humidity + '%'

            let day3TempVar = 'Temperature: ' + data.list[2].main.temp + ' °K'
            let day3WindVar = 'Wind: ' + data.list[2].wind.speed + 'mph'
            let day3HumidVar = 'Humidity: ' + data.list[2].main.humidity + '%'

            let day4TempVar = 'Temperature: ' + data.list[3].main.temp + ' °K'
            let day4WindVar = 'Wind: ' + data.list[3].wind.speed + 'mph'
            let day4HumidVar = 'Humidity: ' + data.list[3].main.humidity + '%'

            let day5TempVar = 'Temperature: ' + data.list[4].main.temp + ' °K'
            let day5WindVar = 'Wind: ' + data.list[4].wind.speed + 'mph'
            let day5HumidVar = 'Humidity: ' + data.list[4].main.humidity + '%'
            
            day1Temp.textContent = day1TempVar
            day1Wind.textContent = day1WindVar
            day1Humid.textContent = day1HumidVar

            day2Temp.textContent = day2TempVar
            day2Wind.textContent = day2WindVar
            day2Humid.textContent = day2HumidVar

            day3Temp.textContent = day3TempVar
            day3Wind.textContent = day3WindVar
            day3Humid.textContent = day3HumidVar

            day4Temp.textContent = day4TempVar
            day4Wind.textContent = day4WindVar
            day4Humid.textContent = day4HumidVar

            day5Temp.textContent = day5TempVar
            day5Wind.textContent = day5WindVar
            day5Humid.textContent = day5HumidVar

            console.log(data.list[0].main.temp)
        });}

function addHistory() {
        historyThree.textContent = historyTwo.textContent
        historyTwo.textContent = historyOne.textContent
        historyOne.textContent = userInput.value
        localStorage.setItem('histSlot1',historyOne.textContent)
        localStorage.setItem('histSlot2',historyTwo.textContent)
        localStorage.setItem('histSlot3',historyThree.textContent)
        return
}

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    fetchWeather(userInput.value);
    fetchForecast(userInput.value)
    addHistory();
    resetFormVar.reset()
})
