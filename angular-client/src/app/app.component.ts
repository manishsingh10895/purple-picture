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

  constructor() {
      this.title =  'Template';
  }   
}
