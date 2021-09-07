import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  getUserList() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(this.http.get('assets/applications.json', { headers }))
    return this.http.get('assets/applications.json', { headers });
}
}
