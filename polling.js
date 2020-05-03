const rl = require("./rollingList.js")
const api = require("./apis.js");
const twit = require("twit");
const config = require("./config.json");



class ActiveWindowPoll{
    constructor(activeWin, timeDelta, trackingList, maxGameTime){
        this.activeWin = activeWin;
        this.timeDelta = timeDelta;
        this.trackingList = trackingList;
        console.log(this.trackingList); console.log(trackingList);
        this.log = new rl.RollingList(86400/timeDelta);
        this.hasScreamed = false;
        this.maxGameTime = maxGameTime;
    }

    start(){
        var _this = this;
        // set up polling
        setInterval(async function(){
            let activeWindow = await _this.activeWin();
            // if activeWindow is undefined for some reason just push the last app
            if (activeWindow == undefined){
                _this.log.push(_this.log.storage[_this.log.top])
            }
            else{
                activeWindow = activeWindow.title;
                // super jank youtube detection
                if(activeWindow.indexOf("YouTube") != -1){
                    activeWindow = "YouTube";
                }
                // somewhat less jank name unlongifier
                else while(activeWindow.indexOf('-') != -1){
                    activeWindow = activeWindow.substring(activeWindow.indexOf('-') + 2)
                }
                // hardcode out some bugs :P
                if(activeWindow == "League of Legends (TM) Client") activeWindow = "League of Legends";
                else if(activeWindow == "") activeWindow = "Desktop";
                console.log(activeWindow);

                _this.log.push(activeWindow);
            }
            // schedule to occur every timeDelta seconds
        }, 1000*this.timeDelta);

        // set up game detection
        setInterval(async function(){
            let stats = _this.getStats();
            console.log(stats);
            let gameTime = 0; let game;
            for(game of _this.trackingList){
                gameTime += (stats[game] != undefined ? stats[game] : 0);
            }
            if (gameTime > 10){
                _this.scream();
            }
            console.log(gameTime);
        }, 3000);
    }

    print(){
        const it = this.log.iterator();
        let result = it.next();
        while(!result.done){
            console.log(result.value);
            result = it.next();
        }
        console.log("done");
    }

    getStats(time=24*3600){
        const it = this.log.iterator();
        let count = 0, timeCount = time/this.timeDelta;
        let result = it.next();
        let stats = {};
        while(!result.done && count <= timeCount){
            if (stats[result.value] == undefined) stats[result.value] = this.timeDelta;
            else stats[result.value] += this.timeDelta;
            count++;
            result = it.next();
        }
        stats["totalTime"] = count*this.timeDelta;
        return stats;
    }

    addGame(gameName){
        this.trackingList.append(gameName);
    }
    
    sleep(ms){
        return new Promise(function(resolve){
            setTimeout(resolve, ms);
        });
    }

    scream(){
        console.log("reeeeeeeeeeeeeeeeeeeeeeeee");
        if (!this.hasScreamed){
            var t = twit({
                consumer_key: config.API_key,
                consumer_secret: config.API_key_secret,
                access_token: config.access_token,
                access_token_secret: config.access_token_secret,
            });
            api.tRandomPost(t);
        }
        this.hasScreamed = true;
    }
};

module.exports = {
    ActiveWindowPoll
}