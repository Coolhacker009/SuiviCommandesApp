import { Injectable } from '@angular/core';
import { Iuser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  private user : Iuser[] =[
    {
      prenom : "Alhassan",
      nom : "Berthé",
      email:"alhassanberthe@gmail.com",
      age : 24,
      mdp : "12345678",
      pseudo : "jack"
    },
    
  ]

  constructor() { }

  public addUser(user : Iuser){
    this.user.push(user)

  }
}
