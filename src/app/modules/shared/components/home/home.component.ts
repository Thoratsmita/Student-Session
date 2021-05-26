import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  videoplayer: ElementRef;
  nativeElement:ElementRef;
  @ViewChild('videoPlayer')videoPlayer:ElementRef;

  constructor() {}

  ngOnInit(): void {
  }
  data =[
    {
      "video":"",
      "name" :"Angular 2",
      "duration" :"0-1",
      "author" :"Droid7 Technolabs"
    },
    {
      "video":"",
      "name" :"Angular 2",
      "duration" :"0-1",
      "author" :"Droid7 Technolabs"
    },
    {
      "video":"",
      "name" :"Angular 2",
      "duration" :"0-1",
      "author" :"Droid7 Technolabs"
    },
    {
      "video":"",
      "name" :"Angular 2",
      "duration" :"0-1",
      "author" :"Droid7 Technolabs"
    },
    {
      "video":"",
      "name" :"Angular 2",
      "duration" :"0-1",
      "author" :"Droid7 Technolabs"
    },
    {
      "video":"",
      "name" :"Angular 2",
      "duration" :"0-1",
      "author" :"Droid7 Technolabs"
    }
  
  ]
  toggleVideo(_event: any) {
    this.videoplayer.nativeElement.play();   

}
playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

}
