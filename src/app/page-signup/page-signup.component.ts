import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Iuser } from './user.model';
import { ServiceUserService } from './service-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-signup',
  templateUrl: './page-signup.component.html',
  styleUrls: ['./page-signup.component.css']
})
export class PageSignupComponent implements OnInit {

  signup = this.formBuilder.group({
    prenom : ['',Validators.required],
    nom : ['',Validators.required],
    email : ['',Validators.email],
    age : [0,Validators.maxLength(2)],
    mdp : ['',Validators.minLength(5)],
    pseudo : ['',Validators.required],
  })

  constructor(
    private formBuilder : FormBuilder,private serviceUser:ServiceUserService,
    private router:Router 
    ){}
  ngOnInit(): void {
   const localData = localStorage.getItem('signUpUsers');
   if(localData != null){
    this.signUpUsers= JSON.parse(localData);
   }
  }

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

  signUpUsers: any[] = [];
  signupObj:any = {
    prenom : '',
    nom : '',
    email : '',
    age : '',
    mdp : '',
    pseudo: ''

};

onSignUp(){
  let signUpUsers: any[] = JSON.parse(localStorage.getItem("signUpUsers") as string);
  const pseudoExist = signUpUsers.find(m=> m.pseudo == this.signupObj.pseudo && m.pseudo == this.signupObj.pseudo);
  const emailExist = signUpUsers.find(m=> m.email == this.signupObj.email && m.email ==this.signupObj.email);
 
  if(pseudoExist){
    const sonPseudo = new Audio;
      sonPseudo.src="../../assets/audio/pseudoUsed.mp3";
      sonPseudo.play();
    alert("le pseudo existe déja ❌");
    return
  }

  if(emailExist){
    const sonEmail = new Audio;
      sonEmail.src="../../assets/audio/usedEmail.mp3";
      sonEmail.play();
    alert("l'adresse email existe déja ❌ ")
    return
  }
  this.signUpUsers.push(this.signupObj);
  localStorage.setItem("signUpUsers", JSON.stringify(this.signUpUsers));
  sessionStorage.setItem("currentUser", this.signupObj.pseudo)
  this.signupObj = {
    prenom : '',
    nom : '',
    email : '',
    age : '',
    mdp : '',
    pseudo: ''

};
window.location.href="http://localhost:4200/"
  this.router.navigate(["/"]) 
  window.location.href="http://localhost:4200/"
}
}
