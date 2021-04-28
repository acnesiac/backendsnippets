const filter = function (params) {
    let arr = [1,2,3,4,4,1,1,1,0];
    return arr.filter(function (value,index) {
        return value === 1;
    })
}

console.log(filter());