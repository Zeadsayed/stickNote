import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $:any

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  constructor(){}

  isStyleInvalid={'background-color':'gray','border':'none'};
  isStylevalid={'background-color':'#198754','border':'#198754'};

  signin = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]\w{3,14}$/)]),
  })

  formData(){
    if(this.signin.valid){
      console.log(this.signin.value);
    }
  }

  ngOnInit(): void {
    $('#signIp').particleground();
  }

}
