const map = function (params) {
    let arr = [1,2,3,4];
    return arr.map(function (val,index) {
        return val +1;
    })
}

console.log(map());
module.exports = map;