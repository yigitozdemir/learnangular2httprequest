import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FormBuilder, Validators, Control} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import 'rxjs/add/operator/map'

@Component({
    selector: 'register-form',
    templateUrl: 'http://localhost:8080/app/registerpage.html'
})

export class RegisterPage {
  userForm: any;
  requestObject: any;
  http: any;
  
  constructor(private _formBuilder: FormBuilder, http: Http) {  
    this.userForm = this._formBuilder.group({
        'password': ['', Validators.required],
        'name': ['', Validators.required],
        'email': ['', Validators.required]
    });
    
    this.http = http;
  }
  
  saveUser(e) {
      e.preventDefault();
      console.log("button clicked");
      this.requestObject = {
          name: this.userForm.value.name,
          password: this.userForm.value.password,
          email: this.userForm.value.email
      };
      var stringRequestObject = JSON.stringify(this.requestObject);
      
      this.http.post('http://localhost:3000/user/register', stringRequestObject).map(res => res.text())
        .subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Random Quote Complete')
        );
  }
}