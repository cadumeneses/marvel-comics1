import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HqService {

  PUBLIC_KEY = '817deacfb335c4e57a31efd095d744fc';
  HASH = 'b8d3ed7a4a937921e1cedcb324532c68';
  URL_API = `https:gateway.marvel.com/v1/public/comics?ts=1660311077&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  allCommics(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
  
}
