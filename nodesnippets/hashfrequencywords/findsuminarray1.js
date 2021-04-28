const findsum = function (params, sum) {
    let hashMap = {};
    let res = [];
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        if(hashMap[element]){
            results.push([hashMap[params[i]], params[i]]);
        }else{
            hashMap[sum - element] = element;
        }
        return res;
    }
}
console.log(findsum([1,2,3,4,5], 5));