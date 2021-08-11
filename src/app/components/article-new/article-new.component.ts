import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import swal from 'sweetalert';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
public article: Article;
public status: string;
public page_title: string;
public is_edit: boolean;
public url: string;


afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
   
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
     
    }
};

  constructor(
    private _route: ActivatedRoute,
  private _router: Router,
private _articleService: ArticleService

  ) 
  {
this.article = new Article('','','', null, null);
this.page_title = 'Crear articulo';
this.is_edit = true;
this.url = Global.url;

   }

  ngOnInit() {
  }

onSubmit(){
	this._articleService.create(this.article).subscribe(
	response =>{
if(response.status == 'success'){
console.log(this.article);
	response.status == 'success';
	this.article = response.article;

  //Alerta
  swal(
  'Articulo creado!!',
  'El articulo se ha creado correctamente',
  'success'

  );
  
	this._router.navigate(['/blog'])
}else{

	this.status == 'error';
}
	},

	error =>{
	console.log(error);
	this.status = 'error';
	}

	);

}
imageUpload(data){
	this.article.image = data.body.image;
	}
}
