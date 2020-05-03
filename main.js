const AWPoll = require("./polling.js")
const electron = require("electron");
const activeWin = require("active-win");
const api = require("./apis.js");
const twit = require("twit");
// const config = require("./config.json");

const {app, BrowserWindow, ipcMain} = electron;

// var t = twit({
//   consumer_key: config.API_key,
//   consumer_secret: config.API_key_secret,
//   access_token: config.access_token,
//   access_token_secret: config.access_token_secret,
// });

let winpoll;
var window;
app.on("ready", async function(){
    window = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true
        }
    });
    window.loadURL(`file:///${__dirname}/pages/Chart.html`);
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