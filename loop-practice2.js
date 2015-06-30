var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// number one

for(var i = 0; i < animals.length-1; i++){
	console.log(animals[i])
}

// nuber two

for(var i = 0; i < animals.length; i+=2){
		console.log(animals[i])
};

// number three

var animalsReversed = animals.reverse();

for(var i=0; i < animals.length; i++){
	console.log(animalsReversed[i])
};

// number four

for(i = 0; i < animals.length; i++){
	if(i > 0 && i < animals.length-1){
 		console.log(animals[i])
 		console.log(animals[i])

 	}
	else {
 		console.log(animals[i])
 }
}