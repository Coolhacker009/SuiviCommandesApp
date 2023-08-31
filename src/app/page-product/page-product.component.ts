import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './productDetails.model';
import { ProduitService } from '../liste-produits/ProduitService';
import { ActivatedRoute } from '@angular/router';
import { Iproduit } from '../liste-produits/produit.model';



@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {

  product : any;

  constructor(private produitService : ProduitService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') as unknown as number;
      console.log(this.produitService.getProductById(id));
      this.product = this.produitService.getProductById(id);
    })
  }
  

}
