import { Component } from '@angular/core';
import {Person} from './person';  //give this component access to the class


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){
    let mark = new Person("mark", 40); //this is a Person object with no family. 
    console.log(mark); //The console shows us family is undefined, but since that's an optional property no error is thrown

    let tom = new Person("tom", 30, [new Person("bill", 20), new Person("mary", 30), new Person("alexis", 12)]);
    console.log(tom);//spits out a person object with the name tom, age of 30, with an array of family member objects, whose type is Person
    
    tom.family.push(mark); //mark seems lonely, let's add him to tom's family
    mark.family = tom.family.filter((member : Person)=>{ //let's update Mark's undefined family array AND make sure he's not referenced as his own family member
      return member.name != mark.name;
    })
    mark.family.push(tom); //let's make sure mark knows tom is in his family, since tom isn't listed as his own family in his family array

    console.log(tom, mark); //both objects have complete family arrays

  }


  //for the button question .... also see app.component.html
  textState : boolean = true;

}