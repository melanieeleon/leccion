import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../interface/plato';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private apiUri = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  constructor(private http: HttpClient) { 
  
  }
  obtenerPlatos(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  }
}