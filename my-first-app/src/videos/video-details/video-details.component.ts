import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VideoDataService } from 'src/services/video-data.service';



@Component({
    selector : 'video-details',
    templateUrl : './video-details.component.html'
})
export class VideoDetailsComponent implements OnInit{

    @Input()  title : string;
    channel : string;

    constructor( private router : Router,
         private activatedroute : ActivatedRoute,
         private VideoDataService : VideoDataService){

    }

    goToHomePage(){
        this.router.navigate(['']);
    }

    goToEditPage(){
        this.router.navigate(['/edit-details',this.title,this.channel]);
    }

    ngOnInit(){
        this.title = this.activatedroute.snapshot.paramMap.get('title');
        this.channel = this.activatedroute.snapshot.paramMap.get('channel');
    }

}

