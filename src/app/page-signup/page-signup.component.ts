import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Iuser } from './user.model';
import { ServiceUserService } from './service-user.service';

@Component({
  selector: 'app-page-signup',
  templateUrl: './page-signup.component.html',
  styleUrls: ['./page-signup.component.css']
})
export class PageSignupComponent {

  signup = this.formBuilder.group({
    prenom : ['',Validators.required],
    nom : ['',Validators.required],
    email : ['',Validators.email],
    age : [0,Validators.maxLength(2)],
    mdp : ['',Validators.minLength(5)],
    pseudo : ['',Validators.required],
  })

  constructor(private formBuilder : FormBuilder,private serviceUser:ServiceUserService){}

  onSubmit(){
    const user : Iuser = {
      prenom:this.signup.value.prenom!,
      nom:this.signup.value.nom!,
      email:this.signup.value.email!,
      age:this.signup.value.age!,
      mdp:this.signup.value.mdp!,
      pseudo:this.signup.value.pseudo!
    }
    this.serviceUser.addUser(user);
    localStorage.setItem("session",JSON.stringify(user));
  }

}
