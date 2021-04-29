const slice = function (array, divide) {
    let res = [];
    while (array.length) {
        res.push(array.splice(0,divide));
    }
    return res;
}


console.log(slice([1,2,3,4,5,5,8    ], 3));

