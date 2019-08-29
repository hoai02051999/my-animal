var chalk =require('chalk');
function dog(name) {
	this.name=name;	
}
dog.prototype.sayhi=function () {
	console.log('hello my name'+chalk.green(this.name));
}
module.exports=dog;