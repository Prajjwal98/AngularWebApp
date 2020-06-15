import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector : 'login-page',
    templateUrl : './login-page.component.html'
})
export class LoginPageComponent{

    loginData = {email : "", pwd : ""};

    constructor(private apiservice : ApiService){

    }

    userLogin(){
        console.log('LoginData');
        console.log(this.loginData);
        this.apiservice.userLogin(this.loginData);
    }

}