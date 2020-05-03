const AWPoll = require("./polling.js")
const electron = require("electron");
const activeWin = require("active-win");
// const config = require("./config.json");

const {app, BrowserWindow, ipcMain} = electron;



let winpoll;
var window;
app.on("ready", async function(){
    window = new BrowserWindow({
        width: 1600,
        height: 1200,
        webPreferences:{
            nodeIntegration: true
        }
    });
    window.loadURL(`file:///${__dirname}/pages/index.html`);
    //console.log("reee");
    //api.tRandomPost(t, "reeeee.png");
    winpoll = new AWPoll.ActiveWindowPoll(activeWin, 1, ["League of Legends"]);
    winpoll.start();
});

ipcMain.on("request:winPollData", function(){
    // console.log(data);
    window.webContents.send("data:winPollData",winpoll.getStats(3600));
    winpoll.print();
});

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
}