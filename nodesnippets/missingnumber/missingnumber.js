const missing = function (params) {
    let arr = [1,2,3,5,6,8,9,10,23];
    let res = [];
    let max  = Math.max(...arr);
    for (let i = 1; i < max; i++) {
        if(arr.indexOf(i) == -1){
            res.push(i);
        }
    }
    return res;
}

console.log(missing());
module.exports = missing;
