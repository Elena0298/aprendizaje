import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  BASE_LOCAL_URL = "http://localhost:8080/";

  httpHeaders = new HttpHeaders({
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  });

  options = {
    headers: this.httpHeaders
  }; 

  constructor(private httpClient: HttpClient) { }

  public getListToDo(){
    return this.httpClient.get(this.BASE_LOCAL_URL+"getListToDo", this.options);
  }

  public delete(idToDo){
    return this.httpClient.get(this.BASE_LOCAL_URL+"deleteToDo/"+idToDo);
  }

  public update(json){
    return this.httpClient.post(this.BASE_LOCAL_URL+"updateToDo", json, this.options);
  }

  public register(json){
    return this.httpClient.post(this.BASE_LOCAL_URL+"registerToDo", json, this.options);
  }

}
