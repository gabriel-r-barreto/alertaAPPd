import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  api = `${environment.apiUrl}/api/boolean`
  apiMsg = `${environment.apiUrl}/api/mensagens`

  constructor(private http: HttpClient) { }


  obterDados(): Observable<any> {
    return this.http.get(this.api);
  }

  enviarDados(obj: any): Observable<any> {
    return this.http.post(this.api, obj);
  }

  enviarMsg(obj: any): Observable<any> {
    return this.http.post(this.apiMsg, obj);
  }

  getMsg(): Observable<any> {
    return this.http.get(this.apiMsg);
  }


  getGeo(latitude: any, longitude: any){
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    return this.http.get(url);
  }

}
