let backgroundColors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
const electron = require('electron')
const {ipcRenderer} = electron  
var data;




ipcRenderer.send("request:winPollData")
ipcRenderer.on("data:winPollData",function(connectfunction){data=connectfunction})
console.log(data)
let chart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["League of Legends", "Valorant", "Youtube", "Minecraft", "Counter-Strike"],
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [163,32,76,23,63]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Time Spent on video games (minutes) in past 24 hours'
      }
    }
});