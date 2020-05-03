const rl = require("./rollingList.js")

class ActiveWindowPoll{
    constructor(activeWin, timeDelta, maxRecordedPolls){
        this.activeWin = activeWin;
        this.timeDelta = timeDelta;
        this.maxRecordedPolls = maxRecordedPolls;
        this.log = new rl.RollingList(86400/timeDelta);
    }

    start(){
        var _this = this;
        setInterval(async function(){
            let activeWindow = await _this.activeWin();
            //console.log(activeWindow);
            if (activeWindow == undefined){
                _this.log.push(_this.log.storage[_this.log.top])
            }
            else{_this.log.push(activeWindow);}
        }, 1000*this.timeDelta);
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

    getStats(time){
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
    
    sleep(ms){
        return new Promise(function(resolve){
            setTimeout(resolve, ms);
        });
    }
};

module.exports = {
    ActiveWindowPoll
}