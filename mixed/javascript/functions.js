// Chittaranjan Sardar

function Person(name, age){

    this.name = name;
    this.age = age;
    this.greeting = function(){     // Note here 'this.' is madatory, else error
        return "Hi, I am " + this.name + ", my age = " + this.age + "."; 
    }
}

function Student(name, age, school){

    this.__proto__ = new Person(name, age);
    this.school = school;
}

var student = new Student("Chittaranjan", 31, "EDX.org");
console.log(student.greeting());