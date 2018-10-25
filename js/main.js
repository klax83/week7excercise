var h1atext = document.getElementById('h1a')

h1atext.innerText = "Hello World!"

function store() {
	var info = document.getElementById('input1')
	console.log(info.value)
	document.getElementById('h1b').innerText = info.value
}

var array = ["who","what","where","when","why"]

for(var i = 0; i < array.length; i++) {
	console.log(array[i])
}

var object = 
{
	name: 'object',
	number: 1,
	age: 1
};

console.log(object.name);
console.log(object.number);
console.log(object.age);

document.getElementById("ob1").innerText = object.name;
document.getElementById("ob2").innerText = object.number;
document.getElementById("ob3").innerText = object.age;

var array2 = [
	{
		animal: "cat",
		legs: 4,
		tails: 1
	},
	{
		animal: "dog",
		legs: 4,
		tails: 1
	},
	{
		animal: "elephant",
		legs: 4,
		tails: 1
	}
]

for(var i = 0; i < array2.length; i++) {
	console.log(array2[i].animal);
	console.log(array2[i].legs);
	console.log(array2[i].tails)
}

document.body.className += "text-danger"