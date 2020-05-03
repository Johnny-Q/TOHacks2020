class RollingList{
    constructor(size){
        this.size = size;
        this.storage = [];
        this.top = -1; this.back = 0;
    }
    push(element){
        if(this.storage.size <= this.size){
            this.storage.push(element);
            this.top++;
        }
        else{
            this.top++;
            this.back++;
            this.storage[this.top] = element;
        }
        this.top %= this.size;
        this.back %= this.size;
    }

    iterator(){
        let nextIndex = this.top;
        var _this = this;
        const rlIterator = {
            next: function(){
                let result;
                if (nextIndex != -1){
                    result = {value: _this.storage[nextIndex], done: false};
                    if (nextIndex == _this.back) nextIndex = -1;
                    else {nextIndex--; nextIndex %= _this.size;}
                    return result;
                }
                return {value: null, done: true}
            }
        };
        return rlIterator;
    }
}

module.exports = {
    RollingList
}