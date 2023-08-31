import { Injectable } from "@angular/core";
import { Iproduit } from "./produit.model";


@Injectable({
    providedIn:"root"
})
export class ProduitService{
    private produit: Iproduit[]= [
        {
            id : 1,
            nom : "ROG STRX 17",
            description : "PC GAMER",
            prix : 400000,
            imageUrl : "assets/img/29-transformed.png"


        },
        {
            id : 2,
            nom : "Nike Pegasus 30",
            description : "Chaussure de Sport",
            prix : 50000,
            imageUrl : "assets/img/28530-3-nike-shoes-transparent.png"
        },
        {
            id : 3,
            nom : "PS4 PRO",
            description : "Console de jeu",
            prix : 250000,
            imageUrl : "assets/img/PS4-Video-Game-Consoles-PNG-HD-Quality.png",
        },
        {
            id : 4,
            nom : "iPhone 14 Pro Max",
            description : "Smartphone Next Gen",
            prix : 450000,
            imageUrl : "assets/img/iPhone-14-PRO-MAX-model-1-transformed.png",
        },
        {
            id : 5,
            nom : "TV SAMSUNG 8K",
            description : "Smart TV Next Gen",
            prix : 1000000,
            imageUrl : "assets/img/pngwing.com (51).png",
        },
        {
            id : 6,
            nom : "Frigo Crosley",
            description : "Réfrigerateur",
            prix : 1000000,
            imageUrl : "assets/img/Fridge-PNG-Isolated-Transparent.png",
        },
        {
            id : 7,
            nom : "Apple Watch 6",
            description : "Montre Connecté",
            prix : 200000,
            imageUrl : "assets/img/5217568-middle (1).png",
        },
        {
            id : 8,
            nom : "Summer Sandale",
            description : "Chaussures légères",
            prix : 20000,
            imageUrl : "assets/img/pngtree-a-brown-female-shoe-image_1113364-transformed.png",
        },
        {
            id : 9,
            nom : "PS5 Classic",
            description : "Console de jeu",
            prix : 450000,
            imageUrl : "assets/img/console-playstation-5-825gb-com-leitor-de-disco-cfi-1114a-a-transformed.png",
        },  
        {
            id : 10,
            nom : "Sac Luxury",
            description : "Sac à main",
            prix : 40000,
            imageUrl : "assets/img/pngtree-fashion-female-bag-png-image_2393139-transformed.png",
        }
        
    ];
    
    
    public getAllproducts(): Iproduit[]{
        return this.produit;
    }

    public addProduit(produit : Iproduit){
        this.produit.push(produit);
    }

    public getProductById(idP : any){
        let prod;
        this.produit.forEach(el=>{
            if(el.id == idP)
                prod = el;
        })
        return prod;
    }
}