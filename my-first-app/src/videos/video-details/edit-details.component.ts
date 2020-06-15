import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VideoDataService } from '../../services/video-data.service';

@Component({
    selector : 'edit-details',
    templateUrl : './edit-details.component.html',
})
export class EditDetailsComponent{

    title : string = '';
    channel : string = '';
    currentTitle : string = '';

    constructor(private VideoDataService : VideoDataService,
         private ActivatedRoute : ActivatedRoute,
         private router : Router){

    }

    onSave(){

        this.currentTitle = this.ActivatedRoute.snapshot.paramMap.get('title');

        this.VideoDataService.getVideodata()
            .map((d)=> {
                if(d.title === this.currentTitle){
                    d.title = this.title ? this.title : d.title;
                    d.channel = this.channel ? this.channel : d.channel;
                }

            })
            this.router.navigate(['/video-details',this.title]);

    }

    onCancel(){
        this.router.navigate(['/video-details',this.title])
    }

}

