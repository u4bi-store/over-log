import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  logoPath : string;

  constructor() {
    this.logoPath = 'http://assets.razerzone.com/eeimages/razer_pages/24924/overwatch-logo.png';
  }

  ngOnInit() {
  }

}
