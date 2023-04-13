import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  api = `${environment.apiUrl}/api/boolean`

  constructor(private http: HttpClient) { }


  obterDados(): Observable<any> {
    return this.http.get(this.api);
  }

  enviarDados(obj: any): Observable<any> {
    return this.http.post(this.api, obj);
  }


  getGeo(latitude: any, longitude: any){
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    return this.http.get(url);
  }

}
