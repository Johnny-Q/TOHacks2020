const AWPoll = require("./polling.js")
const electron = require("electron");
const activeWin = require("active-win");
const api = require("./apis.js");

const {app, BrowserWindow} = electron;



app.on("ready", async function(){
    var window = new BrowserWindow();
    window.loadURL("http://localhost:3000")
    console.log("reee");
})




const api = require("./apis.js");


const {app} = electron;
let winpoll;

app.on("ready", async function(){
    console.log("reee");
    winpoll = new AWPoll.ActiveWindowPoll(activeWin, 1, 100);
    winpoll.start();
    await sleep(10000);
    winpoll.print();
    console.log(winpoll.getStats(10));
});

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
}