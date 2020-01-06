import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      email: [null, Validators.required],
      pass: [null, Validators.required]
    });
  }

}
