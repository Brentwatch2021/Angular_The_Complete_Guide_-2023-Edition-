import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-section15',
  templateUrl: './section15.component.html',
  styleUrls: ['./section15.component.css']
})
export class Section15Component {
  
  @ViewChild('f',{static:false}) signUpForm?:NgForm;
  
  defaultPlan:string = 'advanced';
  answer:string = '';
  rating:string = '5 Stars';
  genders:string[] = ['male','female'];
  user = {
    name: '',
    email: '',
    plan: '',
    gender: '',
    rating: '',
    review: '',
  }

  userSubmitted:boolean = false;


  suggestName()
  {
    //this.signUpForm?.setValue({}) pass in a complete object this 
    // approach overrides any existing values in the form and not 
    // only the name in this case

    // The below only sets the specified form value and 
    // does not effect the others
    this.signUpForm?.form.patchValue({name:'DRUK'});
  }

  onSubmit()
  {

    // Set All the forms values to the
    // user object in ts
    this.SetUserProperties();
    // reset the form
    this.signUpForm?.reset();
    console.log(this.signUpForm);
    console.log(this.user);
    
  }

  private SetUserProperties() {
    this.user.name = this.signUpForm?.value.name;
    this.user.email = this.signUpForm?.value.emailAddress;
    this.user.plan = this.signUpForm?.value.plan;
    this.user.gender = this.signUpForm?.value.gender;
    this.user.rating = this.signUpForm?.value.Rating_AND_Review.rating;
    this.user.review = this.signUpForm?.value.Rating_AND_Review.review;
    this.userSubmitted = true;
  }
}
