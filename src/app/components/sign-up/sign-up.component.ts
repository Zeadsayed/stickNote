import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $:any

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  isStyleInvalid={'background-color':'gray','border':'none'};
  isStylevalid={'background-color':'#198754','border':'#198754'};

  constructor(){}

  signup= new FormGroup({
    first_name:new FormControl('',[ Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    last_name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]\w{3,14}$/)]),
    age:new FormControl('',[Validators.required,Validators.min(16),Validators.max(60)]),
  })

  formdata(){
    if(this.signup.valid){
      console.log(this.signup.value);
    }
  }

  ngOnInit(): void {
    $('#signUp').particleground();
  }

}
