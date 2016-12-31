import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-overlog',
  templateUrl: './view-overlog.component.html',
  styleUrls: ['./view-overlog.component.css']
})
export class ViewOverlogComponent implements OnInit, OnDestroy {
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }
  
  back() : void{
    let link = ['/'];
    this.router.navigate(link);
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let tag = params['tag']; 
      let num = params['num'];
      console.log(tag+' '+num);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
