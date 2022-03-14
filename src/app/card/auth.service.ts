import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const apiKey =  'coinranking543ae203a1b49c617769f0aacf243cb04ab271cdf851e3a9'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-customer-Header' : `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: HttpClient) { }

  cryptoData(){
    const url = `${this.proxyUrl}${this.baseUrl}`
    return this.http
    .get(url,httpOptions)
    .toPromise()
    .then((data) =>{
      return data
    })  
  }

}
  