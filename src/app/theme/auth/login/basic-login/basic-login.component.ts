import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';

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


  constructor(private formBuild: FormBuilder, private auth: AuthenticationService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  onSubmit(){

    let islogin = false;

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';

    islogin = this.auth.login(this.loginForm.value.email , this.loginForm.value.password);

    console.log(islogin);
    
    if(islogin){
      this.router.navigateByUrl(returnUrl);
    } else {
      alert('e-mail e senha diferentes, tentenovamente mais tarde.')
    }

  }
 
}
