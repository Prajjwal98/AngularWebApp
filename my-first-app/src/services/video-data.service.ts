import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { VData } from '../videos/video-class';
import { map } from 'rxjs/operators';
//import  data  from "../videos/video-class";

@Injectable({
    providedIn : 'root'
})
export class VideoDataService{

    constructor(public http : HttpClient){

    }

    getVideodata() : VData[]{
        return this.data; 
    }


    getDataFromAPI() : Observable<VData[]>{
        return this.http.get<VData[]>('https://www.googleapis.com/youtube/v3/videos?part=topicDetails&key=AIzaSyB_WbFFpfvwIqsBgTmZKkqgtgpLzkBF8uI');   
    
    }

 

    apiKey : string = 'AIzaSyDYkeTCKDUNaMOluI8Q7-TDU-6PzHVYeHU';
  
      getVideosForChannel(channel, maxResults): Observable<Object> {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
            console.log('res..'+res);
          return res;
        }))

    }


    // trying another approach..

    data : VData[] =
[
    {
        title : 'YouTube vs TikTok' ,
        channel : 'Carryminati',
        visible : true
    },
    {
        title : 'Pixel 3A Review' ,
        channel : 'MKBHD',
        visible : true
    },
    {
        title : 'Lockdown ke nuksaan' ,
        channel : 'Ashish Chanchlani',
        visible : true
    },
    {
        title : 'Dank Irrfan Khan' ,
        channel : 'AIB : All India Bakchod',
        visible : true
    },
    {
        title : 'Lockdown Queen' ,
        channel : 'BB Ki Vines',
        visible : true
    }

]; 
   

    changeData(newData:VData[]){
        this.data = newData;
        console.log(this.data);
    }

}





//GET https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=[YOUR_API_KEY] HTTP/1.1

//Authorization: Bearer [YOUR_ACCESS_TOKEN]
//Accept: application/json
//AIzaSyB_WbFFpfvwIqsBgTmZKkqgtgpLzkBF8uI