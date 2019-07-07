// Chittaranjan Sardar

// This is an Object
var  employee =  {
 func: function (){
     return "This is an annonymous function : func!";
 }
}
console.log(employee.func());

// Class
class Person {

    constructor(name, age){

        this.name = name;
        this.age = age;
    }

    toString(){
        
        return "I am " + this.name + ", age = " + this.age + ".";
    }
}
var person = new Person("Chitta", 29);
console.log(person.toString());

// Extending class using  '__proto__'
class Student{

    constructor(name, age, school){

        this.__proto__ = new Person(name, age);
        this.school = school;
    }

    toString(){
        
        return "I am " + this.name + ", age = " + this.age + ", school = " + this.school + ".";
    }
}

var student = new Student("Ohmkar", "Infinity", "Brabhand");
console.log(student.toString())

// Extension
class Vehile {

    constructor(type, name){

        this.type = type;
        this.name = name;
    }

    toString(){

        return "This is " + this.type + ", name = " + this.name + ".";
    }
}

class TataCar extends Vehile{

    constructor(type, name, manufac){

        super(type, name)
        this.manufac = manufac
    }

    toString(){
        
        return "This is " + this.type + ", name = " + this.name + ", manufacturer = " + this.manufac + ".";
    }
}

var vehile = new Vehile("Peronal Cas", "HX5");
console.log("Vehile = " + vehile.toString());

vehile = new TataCar("Peronal Cas", "HX5", "TATA");
console.log("TataCar = " + vehile.toString());

vehile = new TataCar("Peronal Cas", "HX5");
console.log("Error TataCar = " + vehile.toString());