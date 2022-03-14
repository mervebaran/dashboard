import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';  


// const apiKey = '9581a17aa59866386e450a016eb0b214'
// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-My-customer-Header' : `${apiKey}`,
//       'Access-Control-Allow-Origin': '*'
//     })
//   }

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

//   dailyForecast():Observable<number> {
//     return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
//       .map(result => result);
//   }

//   dailyForecast():Observable<number> {
//     return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
//       .pipe(map((result: any) => result))
//   }

}


// https://www.youtube.com/watch?v=RTzi5DS7On4   ===> 9.dk da kaldım