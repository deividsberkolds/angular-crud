import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-data-fetch',
  templateUrl: './data-fetch.component.html',
  styleUrls: ['./data-fetch.component.scss'],
})
export class DataFetchComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dataUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';

  ngOnInit(): void {
    this.getData();
  }

  getData(): any {
    return this.http.get(this.dataUrl, {
      responseType: 'json',
      observe: 'response',
    });
  }
}
