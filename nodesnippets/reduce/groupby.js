const groupBy =  function (arr, property) {
    return arr.reduce(function (acum, current) {
        let key = current[property]
        if (!acum[key]){
            acum[key]  = [];
        }
        acum[key].push(current);
        return acum;
    }, {})
}

let people = [
    {name : 'lucia', age : '20'},
    {name : 'Julio', age : '20'},
    {name : 'elias', age : '21'}
]


console.log(groupBy(people,'age'));