import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
login = this.formBuilder.group({
  email :['',Validators.email],
  mdp : ['',Validators.required]

  


})



loginObj:any = {
  email:'',
  mdp: ''
};


  
constructor(private formBuilder : FormBuilder){}
  ngOnInit(): void {
   
  }
  
  onLogin(){
    let signUpUsers: any[] = JSON.parse(localStorage.getItem("signUpUsers") as string);
    const IuserExist = signUpUsers.find(m=> m.email == this.loginObj.email && m.mdp ==this.loginObj.mdp);

    if(IuserExist !=undefined){
      alert("Connexion réussie ✅");
      localStorage.setItem("userCurrent",JSON.stringify(IuserExist));
    }else{
      alert("L'adresse email ou le mot de passe est incorrect ❌")
      const login = new Audio;
      login.src = "../../assets/audio/login.mp3";
      login.play();
    }
  }
  
}
