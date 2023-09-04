import { Component, OnInit } from '@angular/core';
import { ProductService } from '../page-product/product-details.service';
import { ProductDetails } from '../page-product/productDetails.model';
import { ListeProduitsComponent } from '../liste-produits/liste-produits.component';

@Component({
  selector: 'app-panier-achat',
  templateUrl: './panier-achat.component.html',
  styleUrls: ['./panier-achat.component.css']
})
export class PanierAchatComponent implements OnInit{

  client = sessionStorage.getItem("currentUser")

  constructor(private produitservice: ProductService,
    
    private listeproduitscomponent: ListeProduitsComponent){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  command = localStorage.getItem("commande")

  date = new Date()

onCommand(){
   
}

}
