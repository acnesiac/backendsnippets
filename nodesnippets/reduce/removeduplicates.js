const remove = function () {
    let arr = [1,2,3,4,5,6,2];
    return Array.from( new Set(arr));
}

console.log(remove());