//Explicit bidning
//using call
var sayName = function(lang1, lang2, lang3){
	console.log('My name is '+this.name+' and I know '+lang1+', '+lang2+', '+lang3);
}

var stacey = {
	name: 'Stacey',
	age:42
};

var languages = ['JavaScript', 'Ruby', 'Python'];

sayName.call(stacey, languages[0], languages[1], languages[2]);

//using apply
var sayName = function(lang1, lang2, lang3){
	console.log('My name is '+this.name+' and I know '+lang1+', '+lang2+', '+lang3);
}

var stacey = {
	name: 'Stacey',
	age:42
};

var languages = ['JavaScript', 'Ruby', 'Python'];

sayName.call(stacey, languages);

//using bind
//returns a new function instead of invoking the actual function
var sayName = function(lang1, lang2, lang3){
	console.log('My name is '+this.name+' and I know '+lang1+', '+lang2+', '+lang3);
}

var stacey = {
	name: 'Stacey',
	age:42
};

var languages = ['JavaScript', 'Ruby', 'Python'];

var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
newFn();
//returns newFn which will be called later to get the desired result

