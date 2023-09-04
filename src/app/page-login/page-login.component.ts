import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router"




@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
login = this.formBuilder.group({
  pseudo :['',Validators.required],
  mdp : ['',Validators.required]
})

loginObj:any = {
  pseudo:'',
  mdp: ''
};

  
constructor(private formBuilder : FormBuilder, private router: Router){}
  ngOnInit(): void {
    
   
  }
  user: any = sessionStorage.getItem("currentUser")
  onLogin(){
    let signUpUsers: any[] = JSON.parse(localStorage.getItem("signUpUsers") as string);
    const IuserExist = signUpUsers.find(m=> m.pseudo == this.loginObj.pseudo && m.mdp ==this.loginObj.mdp);
    sessionStorage.setItem("currentUser", this.loginObj.pseudo)

    if(IuserExist !=undefined){
      alert("Connexion réussie ✅");
      const succes = new Audio
      succes.src = "../../assets/audio/success.mp3"
      succes.play();
      
      window.location.href="http://localhost:4200/"
      this.router.navigate(['/'])
      localStorage.setItem("userCurrent",JSON.stringify(IuserExist));
      
      
    }else{
      alert("Le pseudo ou le mot de passe est incorrect ❌")
      const login = new Audio;
      login.src = "../../assets/audio/login.mp3";
      login.play();
    }
  }
  
}
