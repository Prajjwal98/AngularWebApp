import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from "../navbar/navbar.component";
import { VideoListComponent } from '../videos/video-list/video-list.component';
import { VideoCardComponent } from '../videos/video-card/video-card.component';
import { VideoDataService } from '../services/video-data.service';
import { EditDetailsComponent } from '../videos/video-details/edit-details.component';
import { LoginPageComponent } from '../login/login-page.component';
import { RegisterPageComponent } from '../register/register-page.component';
import { ApiService } from '../services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VideoListComponent,
    VideoCardComponent,
    EditDetailsComponent,
    LoginPageComponent,
    RegisterPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule 
  ],
  providers: [VideoDataService,ApiService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }


