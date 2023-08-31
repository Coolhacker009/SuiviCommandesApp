import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
login = this.formBuilder.group({
  email :['',Validators.email],
  mdp : ['',Validators.required]


})
constructor(private formBuilder : FormBuilder){}
}
