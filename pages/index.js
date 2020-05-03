let backgroundColors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#122d29", "#ee71262", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#122d29", "#ee71262", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#122d29", "#ee71262"];
const electron = require('electron')
const {ipcRenderer} = electron  

function grabText(){
    var str = document.getElementById("text").value;
    
}
ipcRenderer.send("request:winPollData")
ipcRenderer.on("data:winPollData",function(e, data){
  console.log(data);
  let label = [], time = [];
  for(const [key, value] of Object.entries(data)){
    if (key == "totalTime") continue;
    label.push(key);
    time.push(value);
  }
  console.log(label, time);
  let chart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: label,
      datasets: [{
        backgroundColor: backgroundColors.slice(0, label.length),
        data: time
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Time Spent on video games (minutes) in past 24 hours'
      }
    }
});
})


