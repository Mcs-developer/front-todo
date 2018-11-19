import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

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
              private authService: AuthService) { }

  ngOnInit() {
  }

  submit(form) {
    this.authService.login(form.username, form.password)
                    .subscribe(val => {
                      if (val) {
                        alert('me loguie');
                      } else {
                        alert('Usuario incorrecto');
                      }
                    });
  }

}
