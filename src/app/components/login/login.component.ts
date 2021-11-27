import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _loginService: LoginService,
    private aRouter: ActivatedRoute) {

    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  login() {

    this._loginService.obtenerUsuario(this.loginForm.get('name')?.value).subscribe(data => {

      if(!data){
        this.toastr.error('Usuario no existe', 'Error!');
      }

      if (data.password === this.loginForm.get('password')?.value) {
        this.toastr.success('Usted está logueado', 'Bienvenido!');
        this.router.navigate(['listar-producto']);
      } else {
        this.toastr.error('Credenciales invalidas', 'No logueado!');
        this.loginForm.reset();
      }

    }, error => {
      console.log(error);
      this.loginForm.reset();
    })

  }

}
