import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms-a',
  templateUrl: './templateforms-a.component.html',
  styleUrls: ['./templateforms-a.component.css']
})
export class TemplateformsAComponent {
  
@ViewChild('aform',{static:false}) signUpForm?:NgForm;

defaultPlan:string = 'advanced';
userSubmitted:boolean = false;
user = {
  email: '',
  plan:'',
}
  onSubmit()
  {
    this.user.email = this.signUpForm?.value.email;
    this.user.plan = this.signUpForm?.value.plan2;
    this.userSubmitted = true;
    this.signUpForm?.reset();
    console.log(this.signUpForm);
  }
}
