import { Component, OnInit } from '@angular/core';
import { Iproduit } from './produit.model';
import { ProduitService } from './ProduitService';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  commandeObj: any[] = [];
  

  public produits! : Iproduit[];

  constructor(private produitService : ProduitService,
    private router: Router){}
  ngOnInit(): void {
    this.produits=this.produitService.getAllproducts();
  }

  getData() {
    const data = localStorage.getItem("commande")
    return JSON.parse(data || '[]');
  }

 

  Oncommand(id:number){
    if(sessionStorage.getItem("currentUser")){
      this.commandeObj = this.getData();
      if(this.commandeObj.indexOf(id) === -1){
        this.commandeObj.push(id)
        localStorage.setItem("commande", JSON.stringify(this.commandeObj))
      }
      this.router.navigate(["/commande"])
    }else{
      const sonCommand = new Audio;
      sonCommand.src="../../assets/audio/BeToConnectCommand.mp3";
      sonCommand.play();
      
      alert("Vous devez être connecté pour commander")
    }
  }


}
