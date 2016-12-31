import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Over } from './over';

@Injectable()
export class SearchOverlogService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private api = 'https://api.overwatchinfo.com/pc/kr';

  constructor(private http: Http) { }
  
  search(tag: string, num: string): Promise<Over>{
    const url = `${this.api}/${tag}-${num}/profile`;
    return this.http
      .get(url)
      .toPromise()
      .then(response =>response.json().data as Over)
      .catch(handleError);
  }

}

function handleError (error: any){
  let errorMsg = error.message || `error handle msg`
  console.error(errorMsg);
  return Promise.reject(errorMsg);
}
