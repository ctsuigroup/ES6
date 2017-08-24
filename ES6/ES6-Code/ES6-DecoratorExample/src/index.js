function decorate(target, name, descriptor){
	console.log("target::",target);
	console.log("name::",name);
	console.log("descriptor::",descriptor);
	const fn = descriptor.value;
	descriptor.value = function decoratingFunction(...args){
		fn.apply(target,args);
		return target;
	}
}
class Person {
	@decorate
	setName(first,last){
	  this.first = first;
	  this.last = last;
	}

	@decorate
	sayName(){
		console.log(this.first,this.last);
	}
}

const p = new Person();
p.setName('Jane', 'Doe').sayName().setName('John','Doe').sayName();
