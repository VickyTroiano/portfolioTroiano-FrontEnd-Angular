//para poder hacer las peticiones(delete, get... mini servidor)
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//para suscribirse y que reciba respuesta de forma asincronica(no se actualiza salvo q lo modifiquemos)
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //el primer http es el alias
  constructor(private http:HttpClient) { }

  //metodo getDatos() para que devuelva el observable datos (json) de cualquier tipo (any)
  getDatos():Observable<any>{

    //llamamos el json con su path. Tambien se pueden traer json's con una URL, que esten online
    return this.http.get('./assets/json/datos.json');
  }
}
