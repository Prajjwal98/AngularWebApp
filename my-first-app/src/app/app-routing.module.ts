import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailsComponent } from '../videos/video-details/video-details.component';
import { AppComponent } from './app.component';
import { VideoListComponent } from '../videos/video-list/video-list.component';
import { EditDetailsComponent } from '../videos/video-details/edit-details.component';
import { LoginPageComponent } from '../login/login-page.component';
import { RegisterPageComponent } from '../register/register-page.component';


const routes: Routes = [
  { path : 'video-details/:title/:channel', component : VideoDetailsComponent},
  { path : '', component : VideoListComponent},
  { path : 'edit-details/:title/:channel', component : EditDetailsComponent},
  { path : 'login', component : LoginPageComponent },
  { path : 'register', component : RegisterPageComponent },
  { path : '**' , redirectTo : '', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
