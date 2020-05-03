const AWPoll = require("./polling.js")
const electron = require("electron");
const activeWin = require("active-win");
const api = require("./apis.js");
const twit = require("twit");
const config = require("./config.json");

const {app, BrowserWindow} = electron;

var t = twit({
  consumer_key: config.API_key,
  consumer_secret: config.API_key_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret,
});

let winpoll;

app.on("ready", async function(){
    var window = new BrowserWindow();
    window.loadURL("http://localhost:3000")
    console.log("reee");
    api.tRandomPost(t, "reeeee.png");
    // winpoll = new AWPoll.ActiveWindowPoll(activeWin, 1, 100);
    // winpoll.start();
    // await sleep(10000);
    // winpoll.print();
    // console.log(winpoll.getStats(10));
});

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
}