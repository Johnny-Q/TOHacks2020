const electron = require("electron");
const api = require("./apis.js");

const {app, BrowserWindow} = electron;

app.on("ready", async function(){
    var window = new BrowserWindow();
    window.loadURL("http://localhost:3000")
    console.log("reee");
})