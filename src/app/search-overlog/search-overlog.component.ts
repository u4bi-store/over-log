import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-overlog',
  templateUrl: './search-overlog.component.html',
  styleUrls: ['./search-overlog.component.css']
})
export class SearchOverlogComponent implements OnInit {

  constructor() { }
  
  sendSearch(tag : string, num : string){
    console.log(tag+' '+num);
  }

  ngOnInit() {
  }
  
}
