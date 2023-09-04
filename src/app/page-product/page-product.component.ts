import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './productDetails.model';
import { ProduitService } from '../liste-produits/ProduitService';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduit } from '../liste-produits/produit.model';
import { ListeProduitsComponent } from '../liste-produits/liste-produits.component';





@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {
  commandeObj: any[] = [];
  public produits! : Iproduit[];

  product : any;

  constructor(private produitService : ProduitService, 
    private activatedRoute : ActivatedRoute,
    private router: Router,
    listeProduitComponent : ListeProduitsComponent){}

  ngOnInit(): void {
    this.produits=this.produitService.getAllproducts();
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') as unknown as number;
      console.log(this.produitService.getProductById(id));
      this.product = this.produitService.getProductById(id);
    })
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
        
  addBasket(id:number){
   if(sessionStorage.getItem("currentUser")){
      // Récupérer les produits déjà présents dans le panier depuis le localStorage
  const panier: number[] = JSON.parse(localStorage.getItem("panier") || "[]");

  // Vérifier si le produit n'est pas déjà dans le panier (en fonction de son ID)
  if (!panier.includes(id)) {
    // Ajouter l'ID du produit au panier
    panier.push(id);

    // Mettre à jour le panier dans le localStorage
    localStorage.setItem("panier", JSON.stringify(panier));
  }

   }
    
  }
  

}
