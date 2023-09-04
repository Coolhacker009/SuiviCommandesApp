import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router){}
  session = sessionStorage.getItem("currentUser")
    user: any
    
  ngOnInit(): void {
    
    if(this.session){
      this.user = this.session
      console.log(this.user)
      const compte = document.getElementById("compte");
      if (compte !== null) {
        // Faites quelque chose avec monElement en toute sécurité
        compte.style.display = "none";
      }
    }
  }
  onLogOut(){
    
    sessionStorage.removeItem("currentUser");
    window.location.href="http://localhost:4200/login"
    this.router.navigate(['/login']);
    const compte = document.getElementById("compte");
    
    const decon = document.getElementById("decon");
      if (decon !== null) {
        
        decon.style.display = "none";
      }
      if (compte !== null) {
        
        compte.style.display = "block";
      }
      
  }

}
