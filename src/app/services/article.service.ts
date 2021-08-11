import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable }  from 'rxjs';
import { Article } from '../models/article';

import { Global } from './global';


@Injectable()
export class ArticleService {

public url: string;

	constructor(
	private _http: HttpClient
	
	){
	this.url = Global.url;

	}

	prueba(){
	return "soy el servicio de articulos!!";
	}

	getArticles(last:any = null):Observable<any>{

  var articles = 'articles';

	if(last != null){
        articles = 'articles/true';
	}


	return this._http.get(this.url+articles);
	}

	//peticion para sacar un solo articulo en el  
	//servicio
	
	getArticle(articleId):Observable<any>{
	return this._http.get(this.url+'article/'+articleId);
	}


	search(searchString):Observable<any>{
	return this._http.get(this.url+'search/'+searchString);

	}
	create(article):Observable<any>{
	let params = JSON.stringify(article);
	let headers = new HttpHeaders().set('Content-Type','application/json');


	return this._http.post(this.url+'save', params, {headers: headers});
	}


	update(id, article):Observable<any>{

	let params = JSON.stringify(article);
	let headers = new HttpHeaders().set('Content-Type', 'application/json');

	return this._http.put(this.url+'article/'+id,params, {headers:headers});
	}

	delete(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

return this._http.delete(this.url+'article/'+id, {headers:headers})


	}
}