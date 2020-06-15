import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../services/video-data.service';
import { VData } from '../videos/video-class';
import { pipe } from 'rxjs';
import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
//import data from '../videos/video-class';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'

})
export class NavBarComponent implements OnInit{
  
  constructor(private videoDataService : VideoDataService){

  }

  searchkeyword : string 
  datav : VData[];

  searchVideo(keyword:string){
    console.log(keyword);
    this.datav = this.videoDataService.getVideodata();
   //this.dataRec.push();
   console.log('data before..');
   console.log(this.datav);

   this.datav.forEach((d)=> {
      if(d.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())){
        console.log('Got it..'+d.title);
        d.visible = true;
      }else{
        d.visible = false;
      }
    });

    console.log('datarec after..');
    console.log(this.datav);

    this.videoDataService.changeData(this.datav);

  }

  ngOnInit(){
    //this.videoDataService.currentData.subscribe(dData => this.datav = dData);
    console.log('after subscribing ');
    this.searchkeyword = "";
  }



}
