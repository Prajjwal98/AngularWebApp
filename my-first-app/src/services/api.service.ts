import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class ApiService{

    response : string;
   
    constructor(private http : HttpClient){
        
    }

    userRegister(userData){
        console.log('Before sending request to server..userData -->> ');
        console.log(userData);
        this.http.post('http://localhost:3000/register',userData).subscribe(res=>{
            console.log('After receiving response from server'); 
            console.log(res); 
        })
    }
    //"5ed37db899b2121a7c42e4b9" -- ishu@gmail.com
    //"5ed37db899b2121a7c42e4b9" -- ishu@gmail.com

    userLogin(loginData){
        console.log('Before sending request to server..loginData -->> ');
        console.log(loginData);
        this.http.post('http://localhost:3000/login',loginData).subscribe(res=>{
            console.log('After receiving response from server'); 
            console.log(res);
            localStorage.setItem('token',JSON.parse(JSON.stringify(res)).token);
        })
    }

}