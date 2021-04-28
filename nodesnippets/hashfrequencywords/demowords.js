var demo = "hola 123 dormida haciendote la cama  para el cielo cielo ya es dificil que tu la olvides la esperanza";

var arr= demo.split(' ');
var hash = {};

for (var i= 0 ; i < arr.length; i ++){ 
		if (hash[arr[i]] != undefined){
				hash[arr[i]] ++;
		}else{
			hash[arr[i]] = 1;
		}
}

var res = Object.values(hash)
		.sort()
		.forEach(
			function (key,index){  
			console.log( key ) 
		} ) ;

		



