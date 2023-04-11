import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private http: HttpClient) { }


  obterDados(): Observable<any> {
    return this.http.get('apiescola-production.up.railway.app/api/boolean');
  }

  enviarDados(obj: any): Observable<any> {
    return this.http.post('apiescola-production.up.railway.app/api/boolean', obj);
  }


}
