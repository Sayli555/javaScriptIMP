// Before ES6 constructor function is declare like this 
function employee(name,state,city){
    this.name=name;
    this.state=state;
    this.city=city;
}
employee.prototype.getDetails=function(){
    console.log(`my name is ${this.name}, i am from ${this.city} ${this.state}`)
}
let e1=new employee("sayli","maharshtra","pune")
console.log(e1)
console.log(e1.getDetails())

// AFTER ES6
class employee {
    constructor(name,state,city){
        this.name=name;
        this.state=state;
        this.city=city;
    }
    getDetails(){
        console.log(`my name is ${this.name}, i am from ${this.city} ${this.state}`)
    }
    static add (a,b){
        return a+b
    }
}
// let e1=new employee("sayli","maharshtra","pune")
// console.log(e1.getDetails())
// //IF WE HAVE TO USE FUNCTION WITHOUT CREATE OBJECT WE CAN USE static WORD 
// console.log(employee.add(5,4))

//if we have use another tempalte we can use with using extends
class student extends employee{
    constructor(name,state,city,langauge,work){
        super(name,state,city);
            this.langauge=langauge
            this.work=work   
    }
}
let s1= new student("say","maha","mumbai","marathi","developer")
console.log("s1",s1)

// first it inherites all properties from employee then add other we pass

