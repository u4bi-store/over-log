import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Over } from '../over';
import { SearchOverlogService } from '../search-overlog.service';

@Component({
  selector: 'app-view-overlog',
  templateUrl: './view-overlog.component.html',
  styleUrls: ['./view-overlog.component.css']
})
export class ViewOverlogComponent implements OnInit, OnDestroy {
  over : Over;
  sub: any;
  lodingPath: string;
  logoPath: string;

  constructor(
    private searchService: SearchOverlogService,
    private route: ActivatedRoute,
    private router: Router) {
      this.lodingPath = 'http://www.capso.tv/public/img/create/loading_create.gif';
      this.logoPath = 'http://assets.razerzone.com/eeimages/razer_pages/24924/overwatch-logo.png';
    }
  
  back() : void{
    let link = ['/'];
    this.router.navigate(link);
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let tag = params['tag'];  
      let num = params['num'];

      this.searchService.search(tag, num).then(over => {
        this.over = over;
        console.log(this.over);
      });
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
