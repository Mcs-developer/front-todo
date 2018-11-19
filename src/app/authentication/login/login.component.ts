import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(form) {
    this.authService.login(form.username, form.password)
                    .subscribe(val => {
                      if (val) {
                        this.router.navigate(['/tasks']);
                      } else {
                        alert('Usuario incorrecto');
                      }
                    });
  }

}
