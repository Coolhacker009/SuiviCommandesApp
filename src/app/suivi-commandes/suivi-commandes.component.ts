import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../liste-produits/ProduitService';
import { Iproduit } from '../liste-produits/produit.model';

@Component({
  selector: 'app-suivi-commandes',
  templateUrl: './suivi-commandes.component.html',
  styleUrls: ['./suivi-commandes.component.css']
})
  
export class SuiviCommandesComponent implements OnInit {
  public produits : Iproduit[] = [];;
  produitss = new Array
  produit: any
  commandes: any[] = [];
  userIn = sessionStorage.getItem("currentUser")
   constructor(
    private produitService: ProduitService
   ){}
  ngOnInit(): void {
    if(this.userIn){
      this.produit = localStorage.getItem("commande")
      this.commandes = JSON.parse(this.produit)
      for (let index = 0; index < this.commandes.length; index++) {
        const produit = this.produitService.getProductById(this.commandes[index]);
        if (produit !== null && produit !== undefined) {
          this.produits.push(produit);
        }
      }
    }else{
      alert("Vous devez etre connecte pour voir vos comandes")
    }
    
    
  }
  client = sessionStorage.getItem("currentUser")

  



date = new Date();
etat = "en cours";

 cValid = document.getElementById("valid");

comValid(id :number){
  this.produit = localStorage.getItem("commande")
  this.commandes = JSON.parse(this.produit)
  let commande = this.commandes.find((commande)=> commande.id == id)
  if(commande){
    commande.status = "Livré"
    localStorage.setItem("commande",JSON.stringify(this.commandes))
  }


}
onDelete(id: number) {
  this.produit = localStorage.getItem("commande")
  this.commandes = JSON.parse(this.produit)
  console.log(this.commandes)
  let newV: number = this.commandes.findIndex(commande => commande == id)
  if (newV !== -1){
    this.commandes.splice(newV,1)
    console.log(newV);
    localStorage.setItem("commande", JSON.stringify(this.commandes))
    // this.dataChanged.next();
    
    window.location.href="http://localhost:4200/commande"
  }
  
}
onPanier(){
  const commande = localStorage.getItem("commande")
  localStorage.setItem("panier",JSON.stringify(commande))
  
}
}
