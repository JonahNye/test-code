export class Person {
     name : string;
     age : number;
     isAdult : boolean;
     family? : Person[];

    constructor(name : string, age : number, family? : Person[]){
        this.name = name;
        this.age = age;
        this.isAdult = this.checkAge(age);
        this.family = family;
    }

    checkAge(age : number){ //a method to check if they are an adult. It'd be a pain to pass in a boolean everytime you make an instance of this class
        if (age >= 18){
            return true;
        }

        else{
            return false;
        }
    }
}