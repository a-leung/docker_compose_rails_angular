import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class NumberGeneratorService {
  private _HTTPFileURL = 'assets/result.json';

  constructor(private _http: HttpClient) { }

  value(): number {
    return 420;
  };

  valueHTTPFile(): Observable<any> {
    return this._http.get<any>(this._HTTPFileURL)
               .do(data => console.log('All: ' + JSON.stringify(data)))
  }
}
