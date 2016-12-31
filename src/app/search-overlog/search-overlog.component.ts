import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-overlog',
  templateUrl: './search-overlog.component.html',
  styleUrls: ['./search-overlog.component.css']
})
export class SearchOverlogComponent implements OnInit {

  constructor(private router: Router) { }
  
  sendSearch(tag : string, num : string){
    if(tag === '' || num === '') return console.log('not input');
    this.router.navigate(['/search', tag, num]);
  }

  ngOnInit() {
  }
  
}
