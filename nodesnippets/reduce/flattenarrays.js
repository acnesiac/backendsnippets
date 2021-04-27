// flaten the array [[1],[1,2,3,4], [1,3,4,5]]

const flaten  =  function (params) {
    return params.reduce(function name(acc, current) {
        return acc.concat(current); 
     });
}

console.log(flaten([[1],[1,2,3,4], [1,3,4,5]]  )  );

module.exports  = flaten;