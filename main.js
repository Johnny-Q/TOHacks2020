const electron = require("electron");
const activeWin = require("active-win");

const {app} = electron;

app.on("ready", async function(){
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