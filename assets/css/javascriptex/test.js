/*
//Contructor Function
function Person(firstName,lastName,birthday){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday= new Date(birthday);
    
    this.birthdayYear = function(){
        return this.birthday.getFullYear();
    }

    
}
Person.prototype.getfullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
*/


//class
class Person{
    constructor(firstName,lastName,birthday){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthday=new Date(birthday);
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;

    }
    getBirthday(){
        return this.birthday.getFullYear();
    }
}

//Instantiate Object
const person1 = new Person('Aan','Zebua','6-8-1995');
const person2 = new Person('Krisman','Zebua','2-6-1995');



console.log(person1.getFullName());
