import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  shortenUrl(url:string){
    return this.http.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
  }
}
