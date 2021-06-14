import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {


   /**
   * 
   * 
   */

  public loginForm: any = {};


  constructor(private formBuild: FormBuilder ) { }

  ngOnInit() {

    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', , Validators.required],
    });

    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  onSubmit(){

  }
 
}
