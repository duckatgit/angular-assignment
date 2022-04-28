import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiURL = "https://jsonplaceholder.typicode.com";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/users/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/users/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}