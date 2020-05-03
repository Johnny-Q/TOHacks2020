const electron = require("electron");
const activeWin = require("active-win");
const api = require("./apis.js");

const {app, BrowserWindow} = electron;

app.on("ready", async function(){
    var window = new BrowserWindow();
    window.loadURL("http://localhost:5000/login");

    
    console.log("reee");
    while(true){
        console.log(await activeWin());
        await sleep(1000);
    }
});
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
}