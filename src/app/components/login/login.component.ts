import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/interfaces/userAdmin.interface';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin: FormGroup

  constructor(private fb: FormBuilder, private fire: FireService, private reoute: Router,private toastr: ToastrService) {
    this.admin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  login() {

    const user: Admin = {
      email: this.admin.value.email,
      password: this.admin.value.password
    }

    this.fire.login(user).then(() => {
      this.reoute.navigate(['administracion'])
    }).catch((error)=>{
      this.toastr.error('Credenciales erradas', 'Error',{
        positionClass: 'toast-top-left'
      })
      console.log(error)
    })

  }

}
