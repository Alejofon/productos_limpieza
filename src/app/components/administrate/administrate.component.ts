import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/services/fire.service';


@Component({
  selector: 'app-administrate',
  templateUrl: './administrate.component.html',
  styleUrls: ['./administrate.component.css']
})
export class AdministrateComponent {

  constructor(private fire: FireService, private router: Router) { }

  logout() {
    this.fire.logout().then(()=>{this.router.navigate(['login'])})
  }

}
