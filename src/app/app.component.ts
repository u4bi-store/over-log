import { Component } from '@angular/core';

import { SearchOverlogService } from './search-overlog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchOverlogService]
})
export class AppComponent {
  title = 'app works!';
}
