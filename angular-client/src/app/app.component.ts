import { Component } from '@angular/core';

import { Http } from '@angular/http';

const APIURL = 'http://localhost:3000';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template';

  constructor(private _http: Http) {
    this._http.get(APIURL + '/hello')
      .map((value) => value.json())
      .subscribe((value) => {
        this.title = value.message;
      });
    }   
}
