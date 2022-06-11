import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { HomeService } from './service/home.service';
import { Login } from './service/login.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  loginFormControl: FormGroup;
  loginModel: Login;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ) {
    this.loginFormControl = formBuilder.group({
      user: '',
      pass: '',
    });
  }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
  }

  login() {
    this.loginModel = new Login(
      this.loginFormControl.value.user,
      this.loginFormControl.value.pass
    );
    this.homeService.login(this.loginModel);
    this.loginFormControl.reset();
  }
}
