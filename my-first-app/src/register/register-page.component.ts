import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';

@Component({
    selector : 'register-page',
    templateUrl : './register-page.component.html' 
}) 
export class RegisterPageComponent implements OnInit{

    //userData = { fName:"", lName : "", email : "", pwd : "", mobile : ""};
    customForm : FormGroup;

    @ViewChild('ngOtpInput') ngOtpInput : any;
    constructor(private apiservice : ApiService, private formbuilder : FormBuilder){

    }

    userRegister(){
        //console.log(this.userData);
        this.apiservice.userRegister(this.customForm);
    }
    
    /*verifyNumber(){
        let otp = this.ngOtpInput.nativeElement;
        console.log(otp.value);
    }*/

    ngOnInit(){
        this.customForm = this.formbuilder.group({
            fName : ['',Validators.required,Validators.minLength(3)],
            lName : ['',Validators.required],
            email : ['', Validators.required, Validators.email],
            pwd : ['' , Validators.required],
            mobile : ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)]
        })
    }

}