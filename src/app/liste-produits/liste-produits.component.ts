import { Component, OnInit } from '@angular/core';
import { Iproduit } from './produit.model';
import { ProduitService } from './ProduitService';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  public produits! : Iproduit[];

  constructor(private produitService : ProduitService){}
  ngOnInit(): void {
    this.produits=this.produitService.getAllproducts();
  }


}
