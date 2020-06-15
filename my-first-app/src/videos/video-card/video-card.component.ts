import { Component, OnInit, Input } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';
import { VData } from '../video-class';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
//import data from '../videos/video-class';

@Component({
    selector : 'video-card',
    templateUrl : './video-card.component.html',
    
})
export class VideoCardComponent implements OnInit{
    visible : boolean;
    datav : VData[];
    unsubscribe$ = new Subject();
    CardData : VData[];
    constructor(public videoDataService : VideoDataService){    
        
    }

    
    ngOnInit(){
       // this.datav = this.videoDataService.getVideodata();
        console.log(this.datav);
        // this.setVideoCardData();
        /*this.videoDataService.getDataFromAPI()
            .subscribe(
                (data : VData[]) => this.CardData = data,
                (error : any) => console.log(error),
                () => (console.log('Completed..'),console.log(this.CardData))
            )
        */
       this.CardData = [];
       
        this.videoDataService.getVideosForChannel('UCsTcErHg8oDvUnTzoqsYeNw',12).pipe(takeUntil(this.unsubscribe$))
        .subscribe(lista => {
        for (let element of lista["items"]) {
        this.CardData.push(element)
        }
        console.log('CardDate.. ');
        console.log(this.CardData);
        });        
        
        


    }


}
