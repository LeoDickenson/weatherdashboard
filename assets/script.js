var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")
var historyOne = document.getElementById("hs1")
var historyTwo = document.getElementById("hs2")
var historyThree = document.getElementById("hs3")
var resetFormVar = document.getElementById("resetForm")

historyOne.textContent = localStorage.getItem("histSlot1")
historyTwo.textContent = localStorage.getItem("histSlot2")
historyThree.textContent = localStorage.getItem("histSlot3")

function fetchWeather(a) {fetch("https://api.openweathermap.org/data/2.5/weather?q=" +a+ "&appid=e4077867c523709fde20e7291ca0cdf8").then(function (response) {
    return response.json();}).then(function (data) {
        let todayTemp = data.main.temp
        let todayWind = data.main.wind
        let todayHumid = data.main.humidity
        console.log(data)
        console.log(todayTemp)
        console.log(todayWind)
        console.log(todayHumid)
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
    addHistory();
    resetFormVar.reset()
})