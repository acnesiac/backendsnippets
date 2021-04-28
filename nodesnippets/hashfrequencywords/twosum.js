const twosum = function (params, target) {
    let hashMap = new Map();
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        let complement = target - params[index];
        if(hashMap.has(complement)){
            return [hashMap.get(complement), index];
        }
        hashMap.set(params[index], index);
    }
}
//regresa los primeros indices de los valores que sumen 5
console.log(twosum([1,2,3,4,5, 3,5,0,4,1],5));
