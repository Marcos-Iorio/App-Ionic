import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post("https://edi-iorio-back.herokuapp.com/login/", user, {'headers': headers});
  }

  registro(user : any): Observable<any> {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.post("https://edi-iorio-back.herokuapp.com/registro/", user, {'headers': headers})
  }
}
