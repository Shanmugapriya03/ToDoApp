import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable()
export class CurdService {

  private url = 'http://localhost:8000';
  constructor(private http:Http) { }
  read(){
    return this.http.get(this.url+'/read');
  }
  add(todoDesc){
    return this.http.get(this.url+'/add?todo='+todoDesc);
  }
  delete(todoId){
    return this.http.get(this.url+'/delete?todoId='+todoId);
  }
}
