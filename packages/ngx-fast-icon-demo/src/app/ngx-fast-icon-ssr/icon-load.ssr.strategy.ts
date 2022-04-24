import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IconLoadStrategy } from '@ngx-fast-icon';

@Injectable()
export class IconLoadStrategySsr implements IconLoadStrategy {
  constructor(private http: HttpClient) {
  }

  load(url: string): Observable<string> {
    return this.http.get('http://localhost:4200' + url, { responseType: 'text' });
  }
}