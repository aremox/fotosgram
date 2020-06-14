import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts=0;

  constructor(private http: HttpClient) { }

  getPost(){

    this.paginaPosts ++;

    return this.http.get<any>(`localhost:3000/posts/?pagina=${ this.paginaPosts}`);
  }
}
